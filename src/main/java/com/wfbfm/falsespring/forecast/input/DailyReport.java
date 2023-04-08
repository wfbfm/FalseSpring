package com.wfbfm.falsespring.forecast.input;

import com.google.gson.annotations.SerializedName;

import java.util.List;

public class DailyReport
{
    private String issueDate;
    private String lastUpdated;
    @SerializedName(value = "reports")
    private List<HourlyReport> hourlyReports;

    public DailyReport(String issueDate, String lastUpdated, List<HourlyReport> hourlyReports)
    {
        this.issueDate = issueDate;
        this.lastUpdated = lastUpdated;
        this.hourlyReports = hourlyReports;
    }

    public String getIssueDate()
    {
        return issueDate;
    }

    public void setIssueDate(String issueDate)
    {
        this.issueDate = issueDate;
    }

    public String getLastUpdated()
    {
        return lastUpdated;
    }

    public void setLastUpdated(String lastUpdated)
    {
        this.lastUpdated = lastUpdated;
    }

    public List<HourlyReport> getHourlyReports()
    {
        return hourlyReports;
    }

    public void setHourlyReports(List<HourlyReport> hourlyReports)
    {
        this.hourlyReports = hourlyReports;
    }
}
