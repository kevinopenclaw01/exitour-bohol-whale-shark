"use client";

type CopyContactButtonProps = {
  value: string;
};

export function CopyContactButton({ value }: CopyContactButtonProps) {
  return (
    <button
      type="button"
      onClick={() => navigator.clipboard.writeText(value)}
      className="rounded-full border border-cyan-100/30 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-50 transition hover:bg-cyan-100 hover:text-slate-950"
      aria-label="Copy contact"
    >
      Copy
    </button>
  );
}
