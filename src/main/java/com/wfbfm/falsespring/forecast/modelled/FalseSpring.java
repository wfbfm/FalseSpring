package com.wfbfm.falsespring.forecast.modelled;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class FalseSpring
{
    public static void main(String[] args)
    {
        SpringApplication.run(FalseSpring.class, args);
    }
}
