import moment from "moment";

export type PrioritieType = {
  done: boolean;
  text: string;
};

export type DailySheetType = {
  date: string;
  opened: boolean;
  createdAt: string;
  focus: string;
  priorities: PrioritieType[];
  ignories: string[];
  dayNote: string;
  todayLearnings: string[];
  todayGratefull: string[];
};

export default function getDailySheet() {
  const dataSheet = localStorage.getItem("dailySheet");

  if (!dataSheet) {
    const date = moment();

    console.log(date);

    const newDate = date.isAfter(date.clone().hour(19), "hour")
      ? date.add(1, "day")
      : date;

    const dailySheet: DailySheetType = {
      date: newDate.format("DD/MM/YYYY"),
      opened: true,
      createdAt: String(date),
      focus: "",
      priorities: [
        { done: false, text: "" },
        { done: false, text: "" },
        { done: false, text: "" },
        { done: false, text: "" },
        { done: false, text: "" },
      ],
      ignories: ["", "", ""],
      dayNote: "",
      todayLearnings: ["", "", "", "", ""],
      todayGratefull: ["", "", ""],
    };

    return dailySheet;
  } else {
    const dailySheetLocalStorage: DailySheetType = JSON.parse(dataSheet);
    return dailySheetLocalStorage;
  }
}
