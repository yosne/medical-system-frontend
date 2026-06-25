"use client";

import React from "react";

type Props = {
  placeholder?: string;
};

export function SearchBar({
  placeholder = "Buscar paciente, historia clínica o cita...",
}: Props) {
  return (
    <div className="relative w-full max-w-md">
      <label htmlFor="search" className="sr-only">
        Buscar
      </label>
      <div className="flex items-center gap-2 border border-[var(--border)] bg-white rounded-md px-3 py-2 shadow-sm">
        <svg
          className="h-4 w-4 text-[var(--muted)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M8.5 15.5a7 7 0 1114 0 7 7 0 01-14 0z"
          />
        </svg>
        <input
          id="search"
          name="search"
          placeholder={placeholder}
          className="flex-1 text-sm text-[var(--text)] placeholder-[var(--muted)] bg-transparent outline-none"
        />
      </div>
    </div>
  );
}

export default SearchBar;
