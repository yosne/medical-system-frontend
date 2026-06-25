import { LoginForm } from "@/components/forms/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-(--bg) px-4 py-10">
      <div className="w-full max-w-md rounded-4xl border border-(--border) bg-(--surface) p-10 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center justify-center gap-3 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-(--primary)">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-(--primary) text-white">
                HM
              </span>
              HM - Gestión Médica
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-(--muted)">
                Iniciar sesión
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-(--text)">
                Acceder al sistema
              </h1>
              <p className="mt-2 text-sm leading-6 text-(--muted)">
                Introduce tus credenciales para entrar al portal clínico.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-(--border) bg-white p-8 shadow-sm">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
