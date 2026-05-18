import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ProgramPage } from "@/components/bliss/ProgramPage";
import { getProgram, PROGRAMS } from "@/components/bliss/programs-data";

export const Route = createFileRoute("/programas/$slug")({
  loader: ({ params }) => {
    const program = getProgram(params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData }) => {
    const program = loaderData?.program;
    if (!program) {
      return { meta: [{ title: "Programa – Bliss Place" }] };
    }
    const title = `${program.name} – Bliss Place | Brasília DF`;
    const description = program.tagline + " " + program.intro[0].slice(0, 120);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ProgramRoute,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-white px-5">
      <div className="max-w-md text-center">
        <p className="text-[#C4963C] text-sm uppercase tracking-[0.18em] font-semibold">
          Programa não encontrado
        </p>
        <h1
          className="mt-3 font-bold text-[#1C2B4A] text-3xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Esse programa não existe
        </h1>
        <p className="mt-3 text-[#5A6875]">Conheça os programas disponíveis na Bliss Place:</p>
        <ul className="mt-5 space-y-2 text-sm">
          {PROGRAMS.map((p) => (
            <li key={p.slug}>
              <Link
                to="/programas/$slug"
                params={{ slug: p.slug }}
                className="text-[#C4963C] hover:underline"
              >
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/"
          className="inline-block mt-8 rounded-[6px] bg-[#C4963C] px-6 py-3 text-white font-semibold"
        >
          Voltar para a home
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen flex items-center justify-center bg-white px-5">
      <div className="max-w-md text-center">
        <h1 className="font-bold text-[#1C2B4A] text-2xl">Algo deu errado</h1>
        <p className="mt-3 text-[#5A6875]">{error.message}</p>
        <button
          onClick={reset}
          className="mt-6 rounded-[6px] bg-[#C4963C] px-6 py-3 text-white font-semibold"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  ),
});

function ProgramRoute() {
  const { program } = Route.useLoaderData();
  return <ProgramPage program={program} />;
}
