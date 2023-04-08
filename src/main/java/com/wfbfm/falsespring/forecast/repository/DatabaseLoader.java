package com.wfbfm.falsespring.forecast.repository;

import com.google.gson.Gson;
import com.google.gson.stream.JsonReader;
import com.wfbfm.falsespring.forecast.input.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.FileReader;
import java.util.List;

@Component
public class DatabaseLoader implements CommandLineRunner
{
    private final LocationForecastRepository repository;

    @Autowired
    public DatabaseLoader(LocationForecastRepository repository)
    {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception
    {
        Gson gson = new Gson();
        JsonReader jsonReader = new JsonReader(new FileReader("test.json"));

        ForecastResponse forecasts = gson.fromJson(jsonReader, ForecastResponse.class);

        Forecast forecast = forecasts.getForecasts().get(0);
        List<HourlyReport> hourlyReportList = forecast.getDailyReport().getHourlyReports();
        Location location = Location.LIMEHOUSE;

        for (HourlyReport hourlyReport : hourlyReportList)
        {
            repository.save(new LocationForecast(location, hourlyReport));
        }
    }
}
