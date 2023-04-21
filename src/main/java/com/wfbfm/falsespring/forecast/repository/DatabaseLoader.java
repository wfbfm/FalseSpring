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
import com.wfbfm.falsespring.forecast.input.LocationsToQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.List;

@Component
public class DatabaseLoader implements CommandLineRunner
{
    private final LocationForecastRepository locationForecastRespository;
    private final LocationRepository locationRepository;
    private final boolean FETCH_DATA_ON_BOOT = false;

    @Autowired
    public DatabaseLoader(LocationForecastRepository locationForecastRespository, LocationRepository locationRepository)
    {
        this.locationForecastRespository = locationForecastRespository;
        this.locationRepository = locationRepository;
    }

    @Override
    public void run(String... strings) throws Exception
    {
        // populate Location ref data first
        for (LocationsToQuery locationsToQuery : LocationsToQuery.values())
        {
            if (!locationRepository.existsById(locationsToQuery.getId()))
            {
                locationRepository.save(new Location(locationsToQuery));
            }
        }
        if (FETCH_DATA_ON_BOOT)
        {
            fetchLocationForecasts();
        }
    }

    private void fetchLocationForecasts() throws IOException
    {
        for (LocationsToQuery queryLocation : LocationsToQuery.values())
        {
            final Location location = locationRepository.findById(queryLocation.getId()).orElseThrow();

            ForecastResponse forecastResponse = getForecastResponseForLocationId(queryLocation.getId());
            List<Forecast> forecasts = forecastResponse.getForecasts();

            for (Forecast forecast : forecasts)
            {
                List<HourlyReport> hourlyReportList = forecast.getDailyReport().getHourlyReports();

                for (HourlyReport hourlyReport : hourlyReportList)
                {
                    locationForecastRespository.save(new LocationForecast(location, hourlyReport));
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


    @Scheduled(cron = "0 0 21 * * *")
    public void scheduleFixedDelayTask() throws IOException
    {
        fetchLocationForecasts();
    }
}
