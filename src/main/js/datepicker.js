import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function LocalDatePicker({ localDate, setLocalDate }) {
  return (
    <DatePicker selected={localDate} onChange={date => setLocalDate(date)} dateFormat="yyyy-mm-dd" showIcon/>
  );
}

export default LocalDatePicker;