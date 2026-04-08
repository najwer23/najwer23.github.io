export const sumByYear = (
  items: {
    path: string;
    data: Record<string, number>[];
  }[] = [],
) =>
  items.reduce<Record<string, number>>((acc, item) => {
    for (const entry of item.data ?? []) {
      for (const [date, value] of Object.entries(entry)) {
        const year = date.slice(0, 4);
        acc[year] = (acc[year] ?? 0) + value;
      }
    }
    return acc;
  }, {});

export const sumByDate = (
  items: {
    path: string;
    data: Record<string, number>[];
  }[] = [],
) =>
  items.reduce<Record<string, number>>((acc, item) => {
    for (const entry of item.data ?? []) {
      for (const [date, value] of Object.entries(entry)) {
        acc[date] = (acc[date] ?? 0) + value;
      }
    }
    return acc;
  }, {});

export const sortByDate = (totals: Record<string, number>) =>
  Object.entries(totals).sort(([a], [b]) => a.localeCompare(b));

export const buildChartData = (entries: [string, number][]) => ({
  labels: entries.map(([date]) => date),
  datasets: [
    {
      label: 'Visitors',
      data: entries.map(([, value]) => value),
    },
  ],
});
