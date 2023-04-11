package com.wfbfm.falsespring.forecast.repository;

import com.wfbfm.falsespring.forecast.input.HourlyReport;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@Entity
@EntityListeners(AuditingEntityListener.class)
public class LocationForecast
{
    @Id @GeneratedValue
    private long id;
    @CreatedDate
    private Date accessedDate;
    @OneToOne
    private Location location;
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

    private LocationForecast(){};

    public LocationForecast(final Location location, final HourlyReport hourlyReport)
    {
        this.location = location;
        this.localDate = hourlyReport.getLocalDate();
        this.timeslot = hourlyReport.getTimeslot();
        this.enhancedWeatherDescription = hourlyReport.getEnhancedWeatherDescription();
        this.gustSpeedKph = hourlyReport.getGustSpeedKph();
        this.feelsLikeTemperatureC = hourlyReport.getFeelsLikeTemperatureC();
        this.feelsLikeTemperatureF = hourlyReport.getFeelsLikeTemperatureF();
        this.humidity = hourlyReport.getHumidity();
        this.precipitationProbabilityInPercent = hourlyReport.getPrecipitationProbabilityInPercent();
        this.precipitationProbabilityText = hourlyReport.getPrecipitationProbabilityText();
        this.pressure = hourlyReport.getPressure();
        this.temperatureC = hourlyReport.getTemperatureC();
        this.temperatureF = hourlyReport.getTemperatureF();
        this.timeslotLength = hourlyReport.getTimeslotLength();
        this.visibility = hourlyReport.getVisibility();
        this.weatherTypeText = hourlyReport.getWeatherTypeText();
        this.windDescription = hourlyReport.getWindDescription();
        this.windDirection = hourlyReport.getWindDirection();
        this.windDirectionAbbreviation = hourlyReport.getWindDirectionAbbreviation();
        this.windDirectionFull = hourlyReport.getWindDirectionFull();
        this.windSpeedKph = hourlyReport.getWindSpeedKph();
        this.windSpeedMph = hourlyReport.getWindSpeedMph();
    }

    public long getId()
    {
        return id;
    }

    public void setId(long id)
    {
        this.id = id;
    }

    public Date getAccessedDate()
    {
        return accessedDate;
    }

    public void setAccessedDate(Date accessedDate)
    {
        this.accessedDate = accessedDate;
    }

    public Location getLocation()
    {
        return location;
    }

    public void setLocation(Location location)
    {
        this.location = location;
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
