package com.wfbfm.weatherhindsight.forecast;

public class Forecast
{
    private DailyReport detailed;

    public Forecast(DailyReport detailed)
    {
        this.detailed = detailed;
    }

    public DailyReport getDetailed()
    {
        return detailed;
    }

    public void setDetailed(DailyReport detailed)
    {
        this.detailed = detailed;
    }
}
