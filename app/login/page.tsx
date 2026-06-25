"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // placeholder: llamar auth
    console.log("iniciar sesión", { email, remember });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] p-6">
      <div className="w-full max-w-md card p-8">
        <div className="mb-6 text-center">
          <div className="mx-auto h-12 w-12 rounded-md bg-[var(--primary)] flex items-center justify-center text-white font-bold">
            SC
          </div>
          <h1 className="mt-4 text-2xl font-semibold text-[var(--text)]">
            Sistema Clínico
          </h1>
          <p className="text-sm text-[var(--muted)] mt-1">
            Accede al sistema de historias clínicas
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-[var(--text)]">
              Correo electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 w-full rounded-md border border-[var(--border)] px-3 py-2 bg-white text-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-[var(--text)]">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 w-full rounded-md border border-[var(--border)] px-3 py-2 bg-white text-sm outline-none"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-[var(--muted)]">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Recordarme
              </label>
              <Link href="#" className="text-[var(--primary)]">
                Recuperar contraseña
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-[var(--primary)] text-white py-2 font-semibold"
            >
              Iniciar sesión
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-xs text-[var(--muted)]">
          Acceso restringido al personal autorizado.
        </p>
      </div>
    </div>
  );
}
