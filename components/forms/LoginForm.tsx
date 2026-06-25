"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { authAPI } from "@/lib/api";
import { useAuthStore } from "@/store/auth-store";

type LoginFormValues = {
  email: string;
  password: string;
};

const loginSchema = z.object({
  email: z.string().email("Introduce un correo válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export function LoginForm() {
  const router = useRouter();
  const setToken = useAuthStore((state) => state.setToken);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginFormValues) => {
    setErrorMessage(null);
    setIsLoading(true);

    try {
      const data = await authAPI.login(values);
      setToken(data.accessToken, data.user);
      router.push("/dashboard");
    } catch (error) {
      setErrorMessage(
        "Credenciales inválidas. Verifique su correo y contraseña.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
      {errorMessage ? (
        <div className="rounded-3xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </div>
      ) : null}

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-(--text)">
          Correo electrónico
        </label>
        <input
          type="email"
          autoComplete="email"
          {...register("email")}
          className={`w-full rounded-3xl border px-4 text-sm text-(--text) outline-none transition focus:border-(--primary) focus:ring-2 focus:ring-(--primary)/10 ${
            errors.email
              ? "border-red-300 ring-red-200/70"
              : "border-(--border) bg-white"
          }`}
          placeholder="correo@ejemplo.com"
          style={{ minHeight: 44 }}
        />
        {errors.email ? (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-(--text)">
          Contraseña
        </label>
        <input
          type="password"
          autoComplete="current-password"
          {...register("password")}
          className={`w-full rounded-3xl border px-4 text-sm text-(--text) outline-none transition focus:border-(--primary) focus:ring-2 focus:ring-(--primary)/10 ${
            errors.password
              ? "border-red-300 ring-red-200/70"
              : "border-(--border) bg-white"
          }`}
          placeholder="Introduzca su contraseña"
          style={{ minHeight: 44 }}
        />
        {errors.password ? (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="inline-flex items-center gap-2 text-sm text-(--text)">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-(--border) text-(--primary) focus:ring-(--primary)"
          />
          Recordar sesión
        </label>
        <button
          type="button"
          className="text-sm font-medium text-(--primary) transition hover:text-blue-700"
        >
          Recuperar contraseña
        </button>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-3xl bg-(--primary) px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_36px_rgba(37,99,235,0.18)] transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Accediendo..." : "Acceder al sistema"}
      </button>
    </form>
  );
}
