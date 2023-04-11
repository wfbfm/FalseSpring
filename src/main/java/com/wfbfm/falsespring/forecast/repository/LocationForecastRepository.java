package com.wfbfm.falsespring.forecast.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LocationForecastRepository extends CrudRepository<LocationForecast, Long>
{
    List<LocationForecast> findByLocationId(@Param("locationId") String locationId);

    List<LocationForecast> findByLocationIdAndLocalDate(@Param("locationId") String locationId, @Param("localDate") String localDate);

    @Query(nativeQuery = true, value = "select *\n" +
            "from location_forecast\n" +
            "where\n" +
            "LOCATION_ID = :locationId\n" +
            "AND\n" +
            "LOCAL_DATE = :localDate\n" +
            "and\n" +
            "FORMATDATETIME(ACCESSED_DATE,  'yyyy-MM-dd') = (select\n" +
            "FORMATDATETIME(max(ACCESSED_DATE),'yyyy-MM-dd')\n" +
            "from location_forecast\n" +
            "where\n" +
            "LOCATION_ID = :locationId\n" +
            "AND\n" +
            "LOCAL_DATE = :localDate\n" +
            ")")
    List<LocationForecast> findLatestForecastsForLocationIdAndLocalDate(@Param("locationId") String locationId, @Param("localDate") String localDate);

    @Query(nativeQuery = true, value = "select *\n" +
            "from location_forecast\n" +
            "where\n" +
            "LOCATION_ID = :locationId\n" +
            "AND\n" +
            "LOCAL_DATE = :localDate\n" +
            "and\n" +
            "FORMATDATETIME(ACCESSED_DATE,  'yyyy-MM-dd') != (select\n" +
            "FORMATDATETIME(max(ACCESSED_DATE),'yyyy-MM-dd')\n" +
            "from location_forecast\n" +
            "where\n" +
            "LOCATION_ID = :locationId\n" +
            "AND\n" +
            "LOCAL_DATE = :localDate\n" +
            ")")
    List<LocationForecast> findHistoricalForecastsForLocationIdAndLocalDate(@Param("locationId") String locationId, @Param("localDate") String localDate);
}
