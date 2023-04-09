package com.wfbfm.falsespring.forecast.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LocationForecastRepository extends CrudRepository<LocationForecast, Long>
{
    List<LocationForecast> findByLocationId(@Param("locationId") String locationId);

    List<LocationForecast> findByLocationIdAndLocalDate(@Param("locationId") String locationId, @Param("localDate") String localDate);
}
