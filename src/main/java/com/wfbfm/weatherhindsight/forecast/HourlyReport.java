package com.wfbfm.weatherhindsight.forecast;

public class HourlyReport
{
    private String enhancedWeatherDescription;
    private int gustSpeedKph;
    private String feelsLikeTemperatureC;
    private String feelsLikeTemperatureF;
    private int humidity;
    private String localDate;
    private int precipitationProbabilityInPercent;
    private String precipitationProbabilityText;
    private int pressure;
    private int temperatureC;
    private int temperatureF;
    private String timeslot;
    private int timeslotLength;
    private String visibility;
    private String weatherTypeText;
    private String windDescription;
    private String windDirection;
    private String windDirectionAbbreviation;
    private String windDirectionFull;
    private int windSpeedKph;
    private int windSpeedMph;

    public HourlyReport(String enhancedWeatherDescription, int gustSpeedKph, String feelsLikeTemperatureC, String feelsLikeTemperatureF, int humidity, String localDate, int precipitationProbabilityInPercent, String precipitationProbabilityText, int pressure, int temperatureC, int temperatureF, String timeslot, int timeslotLength, String visibility, String weatherTypeText, String windDescription, String windDirection, String windDirectionAbbreviation, String windDirectionFull, int windSpeedKph, int windSpeedMph)
    {
        this.enhancedWeatherDescription = enhancedWeatherDescription;
        this.gustSpeedKph = gustSpeedKph;
        this.feelsLikeTemperatureC = feelsLikeTemperatureC;
        this.feelsLikeTemperatureF = feelsLikeTemperatureF;
        this.humidity = humidity;
        this.localDate = localDate;
        this.precipitationProbabilityInPercent = precipitationProbabilityInPercent;
        this.precipitationProbabilityText = precipitationProbabilityText;
        this.pressure = pressure;
        this.temperatureC = temperatureC;
        this.temperatureF = temperatureF;
        this.timeslot = timeslot;
        this.timeslotLength = timeslotLength;
        this.visibility = visibility;
        this.weatherTypeText = weatherTypeText;
        this.windDescription = windDescription;
        this.windDirection = windDirection;
        this.windDirectionAbbreviation = windDirectionAbbreviation;
        this.windDirectionFull = windDirectionFull;
        this.windSpeedKph = windSpeedKph;
        this.windSpeedMph = windSpeedMph;
    }

    public String getEnhancedWeatherDescription()
    {
        return enhancedWeatherDescription;
    }

    public void setEnhancedWeatherDescription(String enhancedWeatherDescription)
    {
        this.enhancedWeatherDescription = enhancedWeatherDescription;
    }

    public int getGustSpeedKph()
    {
        return gustSpeedKph;
    }

    public void setGustSpeedKph(int gustSpeedKph)
    {
        this.gustSpeedKph = gustSpeedKph;
    }

    public String getFeelsLikeTemperatureC()
    {
        return feelsLikeTemperatureC;
    }

    public void setFeelsLikeTemperatureC(String feelsLikeTemperatureC)
    {
        this.feelsLikeTemperatureC = feelsLikeTemperatureC;
    }

    public String getFeelsLikeTemperatureF()
    {
        return feelsLikeTemperatureF;
    }

    public void setFeelsLikeTemperatureF(String feelsLikeTemperatureF)
    {
        this.feelsLikeTemperatureF = feelsLikeTemperatureF;
    }

    public int getHumidity()
    {
        return humidity;
    }

    public void setHumidity(int humidity)
    {
        this.humidity = humidity;
    }

    public String getLocalDate()
    {
        return localDate;
    }

    public void setLocalDate(String localDate)
    {
        this.localDate = localDate;
    }

    public int getPrecipitationProbabilityInPercent()
    {
        return precipitationProbabilityInPercent;
    }

    public void setPrecipitationProbabilityInPercent(int precipitationProbabilityInPercent)
    {
        this.precipitationProbabilityInPercent = precipitationProbabilityInPercent;
    }

    public String getPrecipitationProbabilityText()
    {
        return precipitationProbabilityText;
    }

    public void setPrecipitationProbabilityText(String precipitationProbabilityText)
    {
        this.precipitationProbabilityText = precipitationProbabilityText;
    }

    public int getPressure()
    {
        return pressure;
    }

    public void setPressure(int pressure)
    {
        this.pressure = pressure;
    }

    public int getTemperatureC()
    {
        return temperatureC;
    }

    public void setTemperatureC(int temperatureC)
    {
        this.temperatureC = temperatureC;
    }

    public int getTemperatureF()
    {
        return temperatureF;
    }

    public void setTemperatureF(int temperatureF)
    {
        this.temperatureF = temperatureF;
    }

    public String getTimeslot()
    {
        return timeslot;
    }

    public void setTimeslot(String timeslot)
    {
        this.timeslot = timeslot;
    }

    public int getTimeslotLength()
    {
        return timeslotLength;
    }

    public void setTimeslotLength(int timeslotLength)
    {
        this.timeslotLength = timeslotLength;
    }

    public String getVisibility()
    {
        return visibility;
    }

    public void setVisibility(String visibility)
    {
        this.visibility = visibility;
    }

    public String getWeatherTypeText()
    {
        return weatherTypeText;
    }

    public void setWeatherTypeText(String weatherTypeText)
    {
        this.weatherTypeText = weatherTypeText;
    }

    public String getWindDescription()
    {
        return windDescription;
    }

    public void setWindDescription(String windDescription)
    {
        this.windDescription = windDescription;
    }

    public String getWindDirection()
    {
        return windDirection;
    }

    public void setWindDirection(String windDirection)
    {
        this.windDirection = windDirection;
    }

    public String getWindDirectionAbbreviation()
    {
        return windDirectionAbbreviation;
    }

    public void setWindDirectionAbbreviation(String windDirectionAbbreviation)
    {
        this.windDirectionAbbreviation = windDirectionAbbreviation;
    }

    public String getWindDirectionFull()
    {
        return windDirectionFull;
    }

    public void setWindDirectionFull(String windDirectionFull)
    {
        this.windDirectionFull = windDirectionFull;
    }

    public int getWindSpeedKph()
    {
        return windSpeedKph;
    }

    public void setWindSpeedKph(int windSpeedKph)
    {
        this.windSpeedKph = windSpeedKph;
    }

    public int getWindSpeedMph()
    {
        return windSpeedMph;
    }

    public void setWindSpeedMph(int windSpeedMph)
    {
        this.windSpeedMph = windSpeedMph;
    }
}
