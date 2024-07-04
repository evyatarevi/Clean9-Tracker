export const checkDayNumber = (day: string | undefined) => {
  switch (day) {
    case "day1":
      return 1;
    case "day2":
      return 2;
    case "day3":
      return 3;
    case "day4":
      return 4;
    case "day5":
      return 5;
    case "day6":
      return 6;
    case "day7":
      return 7;
    case "day8":
      return 8;
    case "day9":
      return 9;
    default:
      return 0;
  }
};
