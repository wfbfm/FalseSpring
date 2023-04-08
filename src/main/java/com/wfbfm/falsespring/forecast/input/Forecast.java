package com.wfbfm.falsespring.forecast.input;

import com.google.gson.annotations.SerializedName;

public class Forecast
{
    @SerializedName(value = "detailed")
    private DailyReport dailyReport;

    public Forecast(DailyReport dailyReport)
    {
        this.dailyReport = dailyReport;
    }

    public DailyReport getDailyReport()
    {
        return dailyReport;
    }

    public void setDailyReport(DailyReport dailyReport)
    {
        this.dailyReport = dailyReport;
    }
}
