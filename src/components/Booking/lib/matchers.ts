import type { Matcher } from "react-day-picker";
import { dateInAdvance } from "@/components/Booking/lib/constants";

export const combinedMatcher: Matcher = (day: Date) => {
  const isSunday = day.getDay() === 0;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const isBeforeYesterday = day < yesterday;
  const today = new Date();
  const MonthsFromToday = new Date();
  MonthsFromToday.setMonth(today.getMonth() + dateInAdvance);
  const isAhead = day > MonthsFromToday;

  return isSunday || isBeforeYesterday || isAhead;
};
