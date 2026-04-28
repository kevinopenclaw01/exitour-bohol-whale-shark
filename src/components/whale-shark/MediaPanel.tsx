type MediaPanelProps = {
  image: string;
  alt: string;
  label?: string;
};

export function MediaPanel({ image, alt, label }: MediaPanelProps) {
  return (
    <figure
      aria-label={alt}
      className="relative min-h-[24rem] overflow-hidden rounded-[8px] border border-white/10 bg-[linear-gradient(135deg,rgba(8,47,73,0.58),rgba(2,8,17,0.98))]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,17,0)_0%,rgba(2,8,17,0.72)_100%)]" />
      {label ? (
        <figcaption className="absolute bottom-5 left-5 right-5 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-100/78">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}
