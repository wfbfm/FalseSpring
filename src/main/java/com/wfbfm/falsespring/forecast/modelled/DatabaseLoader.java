package com.wfbfm.falsespring.forecast.modelled;

import com.google.gson.Gson;
import com.google.gson.stream.JsonReader;
import com.wfbfm.falsespring.forecast.input.Forecast;
import com.wfbfm.falsespring.forecast.input.ForecastResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.FileReader;

@Component
public class DatabaseLoader implements CommandLineRunner
{
    private final ForecastRepository repository;

    @Autowired
    public DatabaseLoader(ForecastRepository repository)
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

        repository.save(forecast.getDailyReport());
    }
}
