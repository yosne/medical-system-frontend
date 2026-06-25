"use client";

import React from "react";

type Props = {
  userName?: string;
  notifications?: number;
};

export function Header({ userName = "Usuario", notifications = 0 }: Props) {
  const today = new Date().toLocaleDateString();

  return (
    <header className="flex items-center justify-between py-4">
      <div>
        <p className="text-sm text-slate-600">
          Hola, <span className="font-semibold text-slate-900">{userName}</span>
        </p>
        <p className="text-xs text-slate-500">{today}</p>
      </div>

      <div className="flex items-center gap-4">
        <button
          aria-label="Notificaciones"
          className="relative inline-flex items-center p-2 rounded-md hover:bg-slate-100"
        >
          <svg
            className="h-5 w-5 text-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-medium leading-none text-white bg-red-600 rounded-full">
              {notifications}
            </span>
          )}
        </button>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-sm font-medium text-slate-900">{userName}</div>
            <div className="text-xs text-slate-500">Administrador</div>
          </div>
          <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700">
            U
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
