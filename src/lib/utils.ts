import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}





export function getGithubMonthsAndContributions(
  weeks: {
    contributionDays: {
      date: string;
      contributionCount: number;
    }[];
  }[]
) {
  const monthDaysMap = new Map<string, number>();
  let totalContributions=0;

  // Count total days per month-year combination
  weeks.forEach((week) => {
    week.contributionDays.forEach((day) => {
      const date = new Date(day.date);
      const monthYear = format(date, "MMM yyyy");
      monthDaysMap.set(monthYear, (monthDaysMap.get(monthYear) || 0) + 1);
      totalContributions++;
    });
  });

  // Filter months that have 15 or more contribution days
  const validMonths = Array.from(monthDaysMap.entries())
    .filter(([_, count]) => count >= 15)
    .map(([monthYear]) => {

      return monthYear;
    })


  // Return all valid months with only the month names
  const result = validMonths.map((m) => format(new Date(m), "MMM"));

  return {result,totalContributions};
}
