/* 
import { useState, useEffect } from 'react'

import { DateObject, type DatePickerProps } from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import './style.css'
import 'react-multi-date-picker/styles/colors/purple.css'
import 'react-multi-date-picker/styles/layouts/mobile.css'
import DatePicker from 'react-multi-date-picker'


interface MyDatePickerProps extends DatePickerProps {
  value?: string | null
  error?: boolean
}
const CustomDatepicker = (props: MyDatePickerProps) => {
  const { value, onChange, error, style, ...rest } = props
  const [selectedDate, setSelectedDate] = useState<DateObject | null>(null)

  useEffect(() => {
    if (value) {
      setSelectedDate(
        new DateObject({
          calendar: persian,
          locale: persian_fa,
          date: value,
        }),
      )
    }
  }, [value])

  return (
    <section style={{ display: 'inline-block', position: 'relative', width: '100%' }}>

      <DatePicker
        {...rest}
        style={{ ...style, minWidth: '50px !important' }}
        placeholder='روز / ماه / سال'
        inputClass={`myRmdp-input ui-datepicker ${error && `error`}`}
        calendar={persian}
        onChange={onChange}
        locale={persian_fa}
        value={selectedDate}
      />
    </section>
  )
}

export default CustomDatepicker */



import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import './style.css'
import 'react-multi-date-picker/styles/colors/purple.css'
import 'react-multi-date-picker/styles/layouts/mobile.css'
type CustomDatepickerProps = {
  value: Date | null | undefined;
  onChange: (date: Date | null) => void;
  className?: string;
};

export default function CustomDatepicker({ value, onChange, className, ...rest }: CustomDatepickerProps) {

  const dateObject = value ? new DateObject(value) : null;

  return (
    <DatePicker
      {...rest}
      className={className}
      value={dateObject}
      onChange={(date: DateObject | null) => {
        if (date) {
          onChange(date.toDate());
        } else {
          onChange(null);
        }
      }}
      calendar={persian}
      locale={persian_fa}
      format="YYYY/MM/DD"
      calendarPosition="bottom-right"
      inputClass={`myRmdp-input ui-datepicker`}
    />
  );
}
