import { months } from '../common/months';

const isLeapYear = year => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export const daysInMonth = (month, year) => {
  if (parseInt(month) === 2) {
    return isLeapYear(parseInt(year)) ? 29 : 28;
  } else {
    return new Date(year, month, 0).getDate();
  }
};

export const dateToString = (day, month, year) => {
  return `${months[month - 1]} ${day}, ${year}`;
};
