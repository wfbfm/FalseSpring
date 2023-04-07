package com.wfbfm.weatherhindsight;

import com.google.api.client.http.GenericUrl;
import com.google.api.client.http.HttpRequest;
import com.google.api.client.http.HttpRequestFactory;
import com.google.api.client.http.javanet.NetHttpTransport;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class TestHttpCall
{
    public static void main(String[] args) throws IOException
    {
        HttpRequestFactory requestFactory = new NetHttpTransport().createRequestFactory();
        // GsonFactory gsonFactory = new GsonFactory();
        HttpRequest request = requestFactory.buildGetRequest(new GenericUrl("https://weather-broker-cdn.api.bbci.co.uk/en/forecast/aggregated/2643743"));
        // request.setParser(new JsonObjectParser(gsonFactory));
        String rawResponse = request.execute().parseAsString();
        System.out.println(rawResponse);

        BufferedWriter writer = new BufferedWriter(new FileWriter("test.json"));
        writer.write(rawResponse);
        writer.close();
    }
}