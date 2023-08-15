import React, { useEffect } from 'react';
import './styles.css';
import { months } from '../../../common/months';
import { daysInMonth } from '../../../helpers/DateFormater';
import { connect } from 'react-redux';
import { updateDay, updateMonth, updateYear } from '../../../store/actions/DateAction';

const DatePicker = ({ day, month, year, updateDay, updateMonth, updateYear }) => {
  useEffect(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    updateYear(currentYear.toString());
    updateMonth(currentMonth.toString());
    updateDay(currentDay.toString());
  }, [updateDay, updateMonth, updateYear]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'day':
        updateDay(value);
        break;
      case 'month':
        updateMonth(value);
        break;
      case 'year':
        updateYear(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const maxDays = daysInMonth(parseInt(month), parseInt(year));
    const currentDay = parseInt(day);
    if (currentDay > maxDays) {
      updateDay(maxDays.toString());
    }
  }, [day, month, year, updateDay]);

  const yearsFromNow = 25;
  const yearsAgo = 55;
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: yearsFromNow + yearsAgo + 1 }, (_, i) => currentYear - yearsAgo + i);

  return (
    <div className='date-picker'>
      <select name='month' value={month} onChange={handleInputChange}>
        {months.map((m, index) => (
          <option key={index + 1} value={index + 1}>
            {m}
          </option>
        ))}
      </select>

      <select name='day' value={day} onChange={handleInputChange}>
        {Array.from({ length: daysInMonth(parseInt(month), parseInt(year)) }, (_, i) => i + 1).map(d => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <select name='year' value={year} onChange={handleInputChange}>
        {yearOptions.map(y => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    day: state.DateReducer.day,
    month: state.DateReducer.month,
    year: state.DateReducer.year,
  };
};

const mapDispatchToProps = {
  updateDay,
  updateMonth,
  updateYear,
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
