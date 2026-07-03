"use client";

type ConsultationFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export function ConsultationFilters({
  search,
  onSearchChange,
}: ConsultationFiltersProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <input
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Buscar paciente, médico o especialidad..."
        className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
      />
    </div>
  );
}
