"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";

type AuthGuardProps = {
  children: ReactNode;
};

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const token = useAuthStore((state) => state.token);
  const hydrate = useAuthStore((state) => state.hydrate);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    hydrate();
    setIsHydrated(true);
  }, [hydrate]);

  useEffect(() => {
    if (isHydrated && !token) {
      router.replace("/auth/login");
    }
  }, [isHydrated, token, router]);

  if (!isHydrated || !token) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-sm text-slate-600">
            Redirigiendo a la página de inicio de sesión…
          </p>
          <p className="mt-2 text-sm">
            Si no eres redirigido,{" "}
            <a href="/auth/login" className="font-medium text-slate-900">
              haz clic aquí
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
