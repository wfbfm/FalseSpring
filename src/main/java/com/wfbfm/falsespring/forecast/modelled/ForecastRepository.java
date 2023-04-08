package com.wfbfm.falsespring.forecast.modelled;

import com.wfbfm.falsespring.forecast.input.DailyReport;
import org.springframework.data.repository.CrudRepository;

public interface ForecastRepository extends CrudRepository<DailyReport, Long>
{
}
