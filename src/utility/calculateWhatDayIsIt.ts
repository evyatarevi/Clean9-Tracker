import { Timestamp } from "firebase/firestore";

export const calculateWhatDayIsIt = (startDate: Timestamp): string => {
  const startDateObj = startDate.toDate();
  const currentDate = new Date();
  const start = new Date(startDateObj).setHours(0, 0, 0, 0);
  const current = new Date(currentDate).setHours(0, 0, 0, 0);
  const dayNumber = Math.floor((current - start) / (1000 * 60 * 60 * 24)) + 1;
  return `day${dayNumber}`;
};
