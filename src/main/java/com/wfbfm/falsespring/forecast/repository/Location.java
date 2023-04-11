package com.wfbfm.falsespring.forecast.repository;

import com.wfbfm.falsespring.forecast.input.LocationsToQuery;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Location
{
    @Id
    private String id;
    private String locationName;

    private Location(){};

    public Location(final LocationsToQuery locationsToQuery)
    {
        this.id = locationsToQuery.getId();
        this.locationName = locationsToQuery.getName();
    }

    public String getId()
    {
        return id;
    }

    public void setId(String id)
    {
        this.id = id;
    }

    public String getLocationName()
    {
        return locationName;
    }

    public void setLocationName(String locationName)
    {
        this.locationName = locationName;
    }
}
