import { Link, useParams } from "react-router-dom";
import COURSES from "../assets/courses";
import { capaDoCurso, fotoProfessorPorId } from "../assets/imagens";
import Footer from "../components/rodape.jsx";

export default function CourseDetail() {
  const { id } = useParams();
  const course = COURSES.find((c) => String(c.id) === String(id));

  if (!course) {
    return (
      <main className="min-h-screen w-full bg-[#0D0A0B] text-white grid place-items-center p-6">
        <div className="text-center space-y-4">
          <div className="text-2xl font-semibold">Curso não encontrado</div>
          <Link
            to="/conteudo"
            className="inline-block px-5 py-2 rounded-full bg-[#C2F738] text-[#32410A] font-semibold"
          >
            Voltar ao conteúdo
          </Link>
        </div>
      </main>
    );
  }

  const capaUrl = capaDoCurso(course);
  const fotoProf = course.teacherId
    ? fotoProfessorPorId(course.teacherId, course.teacherPhoto)
    : null;

  return (
    <main className="min-h-screen w-full bg-[#0D0A0B] text-white">
      <div className="max-w-[1200px] mx-auto px-6 pt-8 pb-12">
        <div className="mb-6">
          <Link to="/conteudo" className="hidden md:block text-white/70 hover:text-white text-sm">
            ← Voltar
          </Link>
          <Link to="/conteudo" className="sm:hidden w-12 h-12 rounded-full bg-white text-black grid place-items-center absolute top-24 right-4">
            ✕
          </Link>
          <Link to="/conteudo" className="mt-3 hidden sm:hidden text-white/40 hover:text-white grid text-xs">
            ← Voltar
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[260px,1fr] gap-8 pt-10 md:pt-2">
          <div className="hidden md:block md:w-[clamp(130px,16vw,230px)]">
  <img
    src={capaUrl}
    alt={course.title}
    className="
      w-full h-auto                 
      rounded-2xl                  
      object-contain               
      shadow-[0_8px_24px_rgba(0,0,0,0.35)]
    "
  />
</div>

          {/* TEXTO */}
          <div className="flex flex-col md:h-full">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {course.title}
            </h1>

            {(course.teacher || course.teacherId) && (
              <div className="mt-2 text-white/80 text-sm">
                {course.teacher ? `com ${course.teacher}` : ""}
              </div>
            )}

            {course.tagline && (
              <p className="mt-4 text-white/85 leading-relaxed">{course.tagline}</p>
            )}

            {Array.isArray(course.learn) && course.learn.length > 0 && (
              <div className="mt-6">
                <div className="text-[13px] uppercase tracking-wide text-white/60 mb-2">
                  O que você vai aprender
                </div>
                <ul className="space-y-2 text-[15px] leading-relaxed">
                  {course.learn.slice(0, 14).map((it, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#FF2C64]" />
                      <span className="break-words">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 md:mt-auto flex items-center justify-between gap-3 flex-wrap sticky bottom-0 bg-[#0D0A0B]/95 backdrop-blur md:static md:bg-transparent md:backdrop-blur-0 py-3 md:py-0">
              <span className="text-xs text-white/60">
                A assinatura enmoda+ libera acesso a todos os cursos.
              </span>
              <Link to="/assinatura#planosass" className="font-bold px-3 py-1 text-base mt-6 mb-10 md:mt-10 md:mb-6 md:px-4 md:py-1.5 md:text-lg rounded-full bg-[#C2F738] text-[#32410A] transition duration-300 ease-in-out hover:shadow-[0_0_10px_2px_#C2F738]">
                QUERO COMEÇAR AGORA
              </Link>
            </div>
          </div>
        </div>

        {/* Professor(a) */}
        {(course.teacher || course.teacherBio || course.teacherId) && (
          <section className="mt-10 md:mt-12">
            <div className="rounded-2xl border border-white/10 bg-white/[0.01] p-5 sm:p-6 shadow-[0_0_24px_rgba(255,44,100,0.3)]">
              <div className="grid grid-cols-[80px,2fr] sm:grid-cols-[160px,1fr] gap-4 items-start">
                <div className="w-30 h-50 md:w-30 md:h-60 rounded overflow-hidden  bg-white/10">
                  <img
                    src={
                      fotoProf ||
                      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=300&auto=format"
                    }
                    alt={course.teacher || "Professor(a)"}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wide text-white/60">
                    Professor(a)
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mt-0.5">
                    {course.teacher || "—"}
                  </h3>

                  {course.teacherBio && (
                    <p className="mt-3 text-white/85 leading-relaxed text-sm sm:text-base">
                      {course.teacherBio}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
      
    </main>
  );
}
