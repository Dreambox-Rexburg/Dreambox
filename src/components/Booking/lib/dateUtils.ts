import { dateInAdvance } from "@/components/Booking/lib/constants";
import { Dates } from "@/components/Booking/lib/interface";

export function getDatesBetween(startDate: Date, endDate: Date): string[] {
  let dates: string[] = [];
  let currentDate = new Date(startDate.getTime());

  while (currentDate <= endDate) {
    dates.push(currentDate.toDateString());
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

export const dates: Dates = {};

const startDate = new Date();
const endDate = new Date(startDate);
endDate.setMonth(startDate.getMonth() + dateInAdvance);
const generatedDates = getDatesBetween(startDate, endDate);

generatedDates.forEach((date) => {
  dates[date] = [
    { time: "5:00 pm", available: false },
    { time: "6:00 pm", available: true },
    { time: "7:00 pm", available: true },
    { time: "8:00 pm", available: true },
    { time: "9:00 pm", available: true },
  ];

  if (date.includes("Fri")) {
    dates[date].push(
      { time: "10:00pm", available: true },
      { time: "11:00pm", available: true },
    );
  }

  if (date.includes("Sat")) {
    dates[date].push({ time: "10:00pm", available: true });
  }
});
