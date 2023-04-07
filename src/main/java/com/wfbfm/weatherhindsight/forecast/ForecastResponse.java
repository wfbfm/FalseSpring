package com.wfbfm.weatherhindsight.forecast;

import java.util.List;

public class ForecastResponse
{
    private List<Forecast> forecasts;

    public ForecastResponse(List<Forecast> forecasts)
    {
        this.forecasts = forecasts;
    }

    public List<Forecast> getForecasts()
    {
        return forecasts;
    }

    public void setForecasts(List<Forecast> forecasts)
    {
        this.forecasts = forecasts;
    }
}
