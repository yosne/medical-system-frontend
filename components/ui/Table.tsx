import type { ReactNode } from "react";

type TableProps = {
  headers: string[];
  rows: ReactNode[];
};

export function Table({ headers, rows }: TableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-50 text-slate-500">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-6 py-4 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">{rows}</tbody>
      </table>
    </div>
  );
}
