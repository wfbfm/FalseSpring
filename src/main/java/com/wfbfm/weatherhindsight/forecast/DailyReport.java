package com.wfbfm.weatherhindsight.forecast;

import java.util.List;

public class DailyReport
{
    private String issueDate;
    private String lastUpdated;
    private List<HourlyReport> reports;

    public DailyReport(String issueDate, String lastUpdated, List<HourlyReport> reports)
    {
        this.issueDate = issueDate;
        this.lastUpdated = lastUpdated;
        this.reports = reports;
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

    public List<HourlyReport> getReports()
    {
        return reports;
    }

    public void setReports(List<HourlyReport> reports)
    {
        this.reports = reports;
    }
}
