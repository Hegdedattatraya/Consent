import { notification } from "antd";
import { ValidationMessages } from "./enums";
import moment from "moment";


export const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
export const monthsOfYear = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export function sendNotification(
  type: "error" | "success",
  message: string = ""
) {
  notification[type]({
    duration: 5,
    message: message,
    style: {
      width: 350,
      height: "auto",
    },
  });
}

export const phoneNumberValidator = (_: any, value: any) => {
  const phoneRegex = /^\d{10}$/;
  if (!value || phoneRegex.test(value)) {
    return Promise.resolve();
  }
  return Promise.reject(new Error(ValidationMessages.PHONE_NUMBER));
};

export const passwordValidator = (_: any, value: any) => {
  const pwdRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (!value || pwdRegex.test(value)) {
    return Promise.resolve();
  }
  return Promise.reject(new Error(ValidationMessages.PWD_VALIDATIONS));
};

export const formatDateToInD = (date: Date) => {
  return new Date(date).toLocaleDateString("en-In");
};

export function parseDateString(value: any, originalValue: any) {
  let dateComponents = originalValue.split("-");
  let appointmentDate = new Date(
    dateComponents[2],
    dateComponents[1] - 1,
    dateComponents[0]
  );

  const parsedDate = moment(appointmentDate).isValid()
    ? appointmentDate
    : new Date();

  return parsedDate;
}

export const segregateTimeSlots = (slots: any) => {
  const result: any = [
    { period: "morning", slots: [] },
    { period: "noon", slots: [] },
    { period: "evening", slots: [] },
    { period: "night", slots: [] },
  ];

  slots.forEach((slot: any) => {
    const [time, period] = slot.time.split(" ");
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours, 10);
    minutes = parseInt(minutes, 10);

    if (period === "PM" && hours !== 12) {
      hours += 12;
    } else if (period === "AM" && hours === 12) {
      hours = 0;
    }

    if (hours >= 9 && hours < 12) {
      result[0].slots.push(slot); // Morning
    } else if (hours >= 12 && hours < 15) {
      result[1].slots.push(slot); // Noon
    } else if (hours >= 15 && hours < 18) {
      result[2].slots.push(slot); // Evening
    } else if (hours >= 18 && hours < 21) {
      result[3].slots.push(slot); // Night
    }
  });

  return result.filter((res: any) => res.slots.length !== 0);
};

export const getNextNDays = (number: number) => {
  const today = new Date();

  const daysArray = [];

  for (let i = 0; i < number; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    const day = daysOfWeek[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = monthsOfYear[currentDate.getMonth()];
    const dateValue = `${String(currentDate.getDate()).padStart(
      2,
      "0"
    )}/${String(currentDate.getMonth() + 1).padStart(
      2,
      "0"
    )}/${currentDate.getFullYear()}`;

    daysArray.push({ day, date, month, dateValue });
  }

  return daysArray;
};
