type Props = {
  search: string;
  onSearchChange: (value: string) => void;
};

export function ExamFilters({ search, onSearchChange }: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5">
      <input
        type="text"
        placeholder="Buscar por paciente o tipo de examen..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500"
      />
    </div>
  );
}
