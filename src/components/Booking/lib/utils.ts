export function getDatesBetween(startDate: Date, endDate: Date): string[] {
  let dates: string[] = [];
  let currentDate = new Date(startDate.getTime());

  while (currentDate <= endDate) {
    dates.push(currentDate.toDateString());
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

// TODO: Add function for startDate & endDate to have same data as combinedMatcher in BookingCalendar.tsx :)
/*
let startDate = new Date(2024, 4, 17);
let endDate = new Date(2024, 7, 17);
let dates = getDatesBetween(startDate, endDate);

console.log(dates);
*/
