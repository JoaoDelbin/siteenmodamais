import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import COURSES from "../assets/courses"; // coloque seu array aqui (ver arquivo 3)

function CourseCard({ course }) {
  return (
    <Link
      to={`/conteudo/${course.id}`}
      aria-label={`Abrir ${course.title}`}
      className="group block rounded-xl overflow-hidden bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF2C64]/60"
    >
      <div className="w-full aspect-[3/4] overflow-hidden bg-black/30 rounded-xl">
        <img
          src={`/courses/${course.cover}`}
          alt={course.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transform-gpu group-hover:scale-[1.03] transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1520975940468-88d8a520f3d8?q=80&w=600&auto=format";
          }}
          draggable="false"
        />
      </div>
      <div className="px-2 pt-2 pb-3">
        <div className="text-[12px] text-white/85 leading-snug line-2 min-h-[2.6em]">
          {course.title}
        </div>
      </div>
    </Link>
  );
}

export default function ConteudoPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COURSES;
    return COURSES.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.tagline?.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <main className="min-h-screen w-full bg-[#0D0A0B] text-white">
      <div className="max-w-[1600px] mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold">
            Conteúdo <span className="text-[#FF2C64]">enmoda+</span>
          </h1>
          <div className="flex-1" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar curso…"
            className="w-full sm:w-[320px] rounded-full bg-white/5 border border-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-[#FF2C64]/60"
          />
        </div>

        <div
          className="
            grid gap-4 sm:gap-5
            grid-cols-[repeat(auto-fill,minmax(150px,1fr))]
            sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))]
            lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]
            xl:grid-cols-[repeat(auto-fill,minmax(230px,1fr))]
          "
        >
          {filtered.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>

      <style>{`
        .line-2{
          display:-webkit-box;
          -webkit-line-clamp:2;
          -webkit-box-orient:vertical;
          overflow:hidden;
        }
      `}</style>
    </main>
  );
}
