export const formatters = {
  ISOToPeriod: (iso: string): string => {
    return iso.replace(/\D/g, "");
  },
  fullDateToISO: (fullDate: string): string => {
    const split = fullDate.split("");

    const year = split.slice(0, 4).join("");
    const month = split.slice(4, 6).join("");
    const day = split.slice(6, 8).join("");

    return `${year}-${month}-${day}`;
  },
  periodToISO: (period: string): string => {
    const split = period.split("");

    const year = split.slice(0, 4).join("");
    const month = split.slice(4, 6).join("");

    return `${year}-${month}`;
  },
  dateToPeriod: (dateObject: Date): string => {
    const year = dateObject.getFullYear().toString().padStart(4, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");

    return year + month;
  },
};
