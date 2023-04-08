package com.wfbfm.falsespring;

import com.google.gson.Gson;
import com.google.gson.stream.JsonReader;
import com.wfbfm.falsespring.forecast.input.ForecastResponse;

import java.io.FileNotFoundException;
import java.io.FileReader;

public class GsonFromFile
{
    public static void main(String[] args) throws FileNotFoundException
    {
        Gson gson = new Gson();
        JsonReader jsonReader = new JsonReader(new FileReader("test.json"));

        ForecastResponse forecasts = gson.fromJson(jsonReader, ForecastResponse.class);

        System.out.println(forecasts);
    }
}
