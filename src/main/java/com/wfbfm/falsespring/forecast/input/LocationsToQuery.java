package com.wfbfm.falsespring.forecast.input;

public enum LocationsToQuery
{
    LONDON("2643743", "London", 51.5085, -0.1257),
    CAMBRIDGE("2653941", "Cambridge", 52.2, 0.1167),
    CRIEFF("2651983", "Crieff", 56.3727, -3.8389),
    ESKILSTUNA("2715953", "Eskilstuna", 59.3666, 16.5077),
    GORDES("3015661", "Gordes", 43.9124, 5.2009),
    LIMEHOUSE("2644497", "Limehouse", 51.5141, -0.0328),
    EARLS_COURT("2650549", "Earls Court", 51.4916, -0.198);

    private final String id;
    private final String name;
    private final double latitude;
    private final double longitude;

    LocationsToQuery(String id, String name, double latitude, double longitude)
    {
        this.id = id;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public String getId()
    {
        return id;
    }

    public String getName()
    {
        return name;
    }

    public double getLatitude()
    {
        return latitude;
    }

    public double getLongitude()
    {
        return longitude;
    }
}
