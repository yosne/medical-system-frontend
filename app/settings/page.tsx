export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-4xl border border-(--border) bg-(--surface) p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.24em] text-(--muted)">
            Configuración
          </p>
          <h1 className="text-3xl font-semibold text-(--text)">
            Ajustes del sistema
          </h1>
          <p className="max-w-2xl text-sm text-(--muted)">
            Administra la configuración de tu cuenta y el comportamiento del
            portal.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-(--border) bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-(--text)">Perfil</h2>
          <p className="mt-2 text-sm text-(--muted)">
            Actualiza tu información de usuario y preferencias de acceso.
          </p>
        </div>
        <div className="rounded-3xl border border-(--border) bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-(--text)">Seguridad</h2>
          <p className="mt-2 text-sm text-(--muted)">
            Cambia tu contraseña y revisa la actividad de inicio de sesión.
          </p>
        </div>
      </div>
    </div>
  );
}
