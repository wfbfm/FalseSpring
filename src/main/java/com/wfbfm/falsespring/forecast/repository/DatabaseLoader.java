package com.wfbfm.falsespring.forecast.repository;

import com.google.api.client.http.GenericUrl;
import com.google.api.client.http.HttpRequest;
import com.google.api.client.http.HttpRequestFactory;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonObjectParser;
import com.google.api.client.json.gson.GsonFactory;
import com.google.gson.Gson;
import com.wfbfm.falsespring.forecast.input.Forecast;
import com.wfbfm.falsespring.forecast.input.ForecastResponse;
import com.wfbfm.falsespring.forecast.input.HourlyReport;
import com.wfbfm.falsespring.forecast.input.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.List;

@Component
public class DatabaseLoader implements CommandLineRunner
{
    private final LocationForecastRepository repository;
    private final boolean FETCH_DATA = true;

    @Autowired
    public DatabaseLoader(LocationForecastRepository repository)
    {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception
    {
        if (FETCH_DATA)
        {
            for (Location location : Location.values())
            {
                ForecastResponse forecastResponse = getForecastResponseForLocationId(location.getId());
                List<Forecast> forecasts = forecastResponse.getForecasts();

                for (Forecast forecast : forecasts)
                {
                    List<HourlyReport> hourlyReportList = forecast.getDailyReport().getHourlyReports();

                    for (HourlyReport hourlyReport : hourlyReportList)
                    {
                        repository.save(new LocationForecast(location, hourlyReport));
                    }
                }
            }
        }
    }

    public ForecastResponse getForecastResponseForLocationId(final String locationId) throws IOException
    {
        HttpRequestFactory requestFactory = new NetHttpTransport().createRequestFactory();
        GsonFactory gsonFactory = new GsonFactory();
        final String url = "https://weather-broker-cdn.api.bbci.co.uk/en/forecast/aggregated/" + locationId;
        HttpRequest request = requestFactory.buildGetRequest(new GenericUrl(url));
        request.setParser(new JsonObjectParser(gsonFactory));
        String rawResponse = request.execute().parseAsString();
        Gson gson = new Gson();
        return gson.fromJson(rawResponse, ForecastResponse.class);
    }
}
