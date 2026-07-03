type ConsultationStatusBadgeProps = {
  status: "Completed" | "Pending" | "Cancelled";
};

const variants = {
  Completed: "bg-emerald-100 text-emerald-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
};

export function ConsultationStatusBadge({
  status,
}: ConsultationStatusBadgeProps) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${variants[status]}`}
    >
      {status}
    </span>
  );
}
