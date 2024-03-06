import { formatters } from "./formatters";

export const helpers = {
  getLastSixMonths: (): string[] => {
    const today = new Date();
    const lastSixMonths: string[] = [];

    for (let i = 5; i >= 0; i--) {
      const month = today.getMonth() - i;
      const year = today.getFullYear();

      if (month < 0) {
        const iso = formatters.dateToPeriod(new Date(year - 1, 12 + month, 1));

        lastSixMonths.push(iso);
      } else {
        const iso = formatters.dateToPeriod(new Date(year, month, 1));

        lastSixMonths.push(iso);
      }
    }

    return lastSixMonths;
  },
};
