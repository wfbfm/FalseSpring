package com.wfbfm.falsespring.forecast.modelled;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@EntityScan(basePackages = "com.wfbfm.falsespring.forecast.input")
public class AppConfig
{
    // configuration code
}
