export const formatters = {
  stringToDate: (date: string): Date => {
    const split = date.replace(/\D/g, "").split("");

    const year = split.slice(0, 4).join("");
    const month = split.slice(4, 6).join("");
    const day = split.slice(6, 8).join("");

    const formatted = new Date(parseInt(year), parseInt(month), parseInt(day));

    return formatted;
  },
  dateToString: (dateObject: Date): string => {
    const year = dateObject.getFullYear().toString().padStart(4, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObject.getDate().toString().padStart(2, "0");

    return year + month + day;
  },
  ISOToNumber: (date: string): number => {
    const split = date.replace(/\D/g, "").split("");

    const year = split.slice(0, 4).join("");
    const month = split.slice(4, 6).join("");
    const day = split.slice(6, 8).join("");

    const formatted = `${year}${month}${day}`;

    return parseInt(formatted);
  },
  formatDateToISO: (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  },
  parseISOToDate: (isoDateString: string): Date => {
    const [year, month, day] = isoDateString.split("-").map(Number);
    return new Date(year, month - 1, day);
  },
};
