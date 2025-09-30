export default function CourseMarquee() {
  const courses = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Curso ${i + 1}`,
  }));

  return (
    <div className="relative w-full overflow-hidden [--speed:3s] md:[--speed:30s]">
      <div className="flex gap-3 md:gap-4 will-change-transform animate-[marquee_var(--speed)_linear_infinite]">
        <TrackItems items={courses} />
        <TrackItems items={courses} ariaHidden />
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

function TrackItems({ items, ariaHidden = false }) {
  return (
    <div className="flex gap-3 md:gap-4 shrink-0" aria-hidden={ariaHidden ? "true" : "false"}>
      {items.map((c) => (
        <div
          key={`${ariaHidden ? "dup-" : ""}${c.id}`}
          className="shrink-0 rounded-xl bg-gray-400/60 overflow-hidden"
         
          style={{ width: "clamp(140px, 42vw, 220px)" }}
        >
          
          <div className="aspect-[31/60] w-full rounded-xl bg-gray-300" />
          {/* so por a imagem aqui dps
            <img src={url} alt={c.title} className="aspect-[31/60] w-full object-cover rounded-xl" />
            // ou object-contain + bg pra não cortar
          */}
        </div>
      ))}
    </div>
  );
}


