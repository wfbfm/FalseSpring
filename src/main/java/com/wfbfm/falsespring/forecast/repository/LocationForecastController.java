package com.wfbfm.falsespring.forecast.repository;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/locationForecasts")
public class LocationForecastController
{

    private final LocationForecastRepository locationForecastRepository;

    public LocationForecastController(LocationForecastRepository locationForecastRepository)
    {
        this.locationForecastRepository = locationForecastRepository;
    }

    @GetMapping
    public List<LocationForecast> getAllLocationForecasts()
    {
        return (List<LocationForecast>) this.locationForecastRepository.findAll();
    }

    @GetMapping("/{id}")
    public LocationForecast getForecastById(@PathVariable long id)
    {
        return this.locationForecastRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/location/{locationId}")
    public List<LocationForecast> getForecastsForLocation(@PathVariable String locationId)
    {
        return this.locationForecastRepository.findByLocationId(locationId);
    }

    @GetMapping("/location/{locationId}/date/{localDate}")
    public List<LocationForecast> getForecastsForLocationAndDate(@PathVariable String locationId, @PathVariable String localDate)
    {
        return this.locationForecastRepository.findByLocationIdAndLocalDate(locationId, localDate);
    }

    @GetMapping("/latest/location/{locationId}/date/{localDate}")
    public List<LocationForecast> getLatestForecastsForLocationAndDate(@PathVariable String locationId, @PathVariable String localDate)
    {
        return this.locationForecastRepository.findLatestForecastsForLocationIdAndLocalDate(locationId, localDate);
    }

    @GetMapping("/historical/location/{locationId}/date/{localDate}")
    public List<LocationForecast> getHistoricalForecastsForLocationAndDate(@PathVariable String locationId, @PathVariable String localDate)
    {
        return this.locationForecastRepository.findHistoricalForecastsForLocationIdAndLocalDate(locationId, localDate);
    }
}