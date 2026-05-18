import doresImg from "@/assets/programs/dores-nunca-mais.jpg";
import coracaoImg from "@/assets/programs/coracao-saudavel.jpg";
import metabolicaImg from "@/assets/programs/sindrome-metabolica.jpg";
import sessentaImg from "@/assets/programs/60-mais-v2.png";
import gestacaoImg from "@/assets/programs/gestacao-segura.jpg";
import platinumImg from "@/assets/programs/bliss-platinum.jpg";

export type ProgramSlug =
  | "dores-nunca-mais"
  | "coracao-saudavel"
  | "sindrome-metabolica"
  | "60-mais"
  | "gestacao-segura"
  | "bliss-platinum";

export type Program = {
  slug: ProgramSlug;
  name: string;
  badge: string;
  premium?: boolean;
  forWho: string;
  shortBullets: string[];
  image: string;
  // Detail page content
  tagline: string;
  intro: string[];
  benefitsTitle: string;
  benefits: string[];
  diffsTitle: string;
  diffs: string[];
  forWhom?: string[];
};

export const PROGRAMS: Program[] = [
  {
    slug: "dores-nunca-mais",
    name: "Dores Nunca Mais",
    badge: "Mais procurado",
    forWho: "dor lombar, pescoço, ombros, hérnia, artrose",
    image: doresImg,
    shortBullets: [
      "Alívio progressivo das dores",
      "Fortalecimento muscular seguro",
      "Melhora de mobilidade",
    ],
    tagline: "Recupere sua qualidade de vida, sem dor.",
    intro: [
      "Atualmente é muito comum sentirmos algumas dores musculares, seja na lombar, no pescoço e/ou nos ombros. Esse fenômeno está muito relacionado a fatores como fraqueza muscular, má postura e ergonomia deficitária no local de trabalho.",
      "Já as dores articulares são menos comuns, porém mais limitantes, exigindo um treinamento ainda mais especializado. Artroses, síndrome do impacto do ombro, condropatias e hérnias de disco estão entre as patologias mais comuns.",
      "No Programa Dores Nunca Mais você terá um plano totalmente personalizado para sanar essas dores — musculares ou articulares — por meio de técnicas como liberação miofascial, pontos-gatilho, mobilidade articular e estratégias diversas de alongamento.",
    ],
    benefitsTitle: "Principais benefícios",
    benefits: [
      "Aumento dos espaços articulares",
      "Proteção das articulações",
      "Alívio da rigidez muscular",
      "Redução do desgaste das articulações",
      "Diminuição das câimbras",
      "Recuperação de movimentos",
      "Melhora da sensação de bem-estar e relaxamento muscular",
    ],
    diffsTitle: "Diferenciais do programa",
    diffs: [
      "Plano de treino totalmente personalizado para cada quadro de dor",
      "Repertório amplo de técnicas para alongamento e relaxamento muscular",
      "Foco na proteção das articulações",
      "Fortalecimento muscular seguro e direcionado",
      "Método exclusivo que proporciona melhores resultados",
    ],
  },
  {
    slug: "coracao-saudavel",
    name: "Coração Saudável",
    badge: "Cardiológico",
    forWho: "hipertensos, cardiopatas, pós-infarto",
    image: coracaoImg,
    shortBullets: [
      "Treino seguro com acompanhamento",
      "Melhora cardiorrespiratória",
      "Controle da pressão e colesterol",
    ],
    tagline: "Treino cardiológico personalizado, seguro e eficaz.",
    intro: [
      "Programa pensado especialmente para você que tem alguma patologia cardiológica, como hipertensão arterial, doença arterial coronariana ou pessoas que já desenvolveram infarto agudo do miocárdio.",
      "No Programa Coração Saudável você terá um plano totalmente personalizado, focado nas especificidades do seu quadro clínico, proporcionando um treinamento seguro e eficaz.",
      "Pessoas com problemas cardiológicos devem se exercitar como parte de um tratamento mais amplo. O treinamento físico adequado proporciona benefícios que o restante do tratamento clínico não é capaz de oferecer.",
    ],
    benefitsTitle: "Principais benefícios para cardiopatas",
    benefits: [
      "Diminuição da frequência cardíaca e da pressão arterial em repouso",
      "Aumento do bom colesterol (HDL) e diminuição de triglicerídeos",
      "Melhora da capacidade cardiorrespiratória",
      "Aumento na quantidade de vasos sanguíneos nos músculos ativos",
      "Diminuição da pressão arterial em exercícios de baixa intensidade",
      "Diminuição da gordura corporal total e da gordura visceral",
      "Melhora dos índices de glicose no sangue (glicemia)",
    ],
    diffsTitle: "Diferenciais do programa",
    diffs: [
      "Programa de treino totalmente personalizado conforme seu quadro clínico",
      "Maior segurança e eficácia",
      "Evolução constante respeitando os marcadores fisiológicos",
      "Método exclusivo que proporciona melhores resultados",
    ],
  },
  {
    slug: "sindrome-metabolica",
    name: "Síndrome Metabólica",
    badge: "Metabólico",
    forWho: "gordura abdominal, diabetes, pré-diabetes",
    image: metabolicaImg,
    shortBullets: [
      "Controle da glicemia",
      "Redução de gordura visceral",
      "Melhora metabólica geral",
    ],
    tagline: "Reequilibre o seu metabolismo, recupere sua saúde.",
    intro: [
      "A síndrome metabólica caracteriza-se por circunferência abdominal proeminente, hipertensão arterial, resistência à insulina ou diabetes, e níveis anormais de colesterol e triglicerídeos (dislipidemia).",
      "Esse conjunto de fatores causa perda de qualidade de vida e aumento da morbidade. No Programa Síndrome Metabólica você terá um plano completo para o controle e melhoria de todos os fatores de risco envolvidos.",
      "Por meio de um programa personalizado você se exercitará de forma correta, segura e evoluirá de forma constante, reequilibrando os fatores desencadeadores e recuperando sua qualidade de vida.",
    ],
    benefitsTitle: "Principais benefícios",
    benefits: [
      "Diminuição da pressão arterial em repouso",
      "Diminuição da pressão arterial em esforço",
      "Maiores concentrações de bom colesterol (HDL)",
      "Redução de triglicérides, LDL e VLDL",
      "Melhora da sensibilidade à insulina e tolerância à glicose",
      "Diminuição da gordura corporal total e visceral",
      "Melhora dos índices de glicemia",
    ],
    diffsTitle: "Diferenciais do programa",
    diffs: [
      "Programa de treino totalmente personalizado conforme seu quadro clínico",
      "Maior segurança e eficácia",
      "Evolução constante respeitando os marcadores fisiológicos",
      "Método exclusivo que proporciona melhores resultados",
    ],
  },
  {
    slug: "60-mais",
    name: "Programa 60+",
    badge: "Longevidade",
    forWho: "pessoas acima de 60 anos",
    image: sessentaImg,
    shortBullets: ["Mobilidade e equilíbrio", "Prevenção de quedas", "Mais autonomia no cotidiano"],
    tagline: "Mais autonomia, mais equilíbrio, mais vida.",
    intro: [
      "O Programa 60+ foi pensado para quem quer envelhecer com saúde, autonomia e disposição. Com a idade, a perda de massa muscular, equilíbrio e mobilidade tornam tarefas cotidianas mais difíceis — e aumentam o risco de quedas.",
      "Aqui, cada treino é construído respeitando seu corpo, seu histórico e seu ritmo. O foco é manter você funcional, ativo e independente por muito mais tempo.",
    ],
    benefitsTitle: "Principais benefícios",
    benefits: [
      "Manutenção e ganho de massa muscular",
      "Melhora do equilíbrio e prevenção de quedas",
      "Mais mobilidade e flexibilidade",
      "Fortalecimento ósseo e prevenção de osteoporose",
      "Melhora cardiorrespiratória",
      "Mais disposição e autonomia no dia a dia",
      "Bem-estar mental e socialização",
    ],
    diffsTitle: "Diferenciais do programa",
    diffs: [
      "Plano 100% personalizado e seguro para a faixa etária",
      "Profissionais com formação específica em gerontologia",
      "Turmas pequenas, com atenção real e individual",
      "Avaliações funcionais periódicas para acompanhar a evolução",
      "Ambiente acolhedor, sem competição estética",
    ],
  },
  {
    slug: "gestacao-segura",
    name: "Gestação Segura",
    badge: "Gestação",
    forWho: "grávidas em qualquer trimestre",
    image: gestacaoImg,
    shortBullets: [
      "Treino adaptado por fase",
      "Redução de dores e inchaço",
      "Preparo para o parto",
    ],
    tagline: "Uma gestação tranquila, segura e prazerosa.",
    intro: [
      "Programa pensado especialmente para você, mamãe, em um momento muito especial. No Programa Gestação Segura você terá um plano totalmente personalizado, respeitando todas as variações dos três trimestres da gestação.",
      "Nesse curto período, muitas alterações ocorrem no organismo da gestante. O exercício físico bem orientado é fundamental para o equilíbrio, o bom funcionamento do organismo e o transcorrer de uma gestação tranquila.",
    ],
    benefitsTitle: "Principais benefícios para gestantes",
    benefits: [
      "Diminuição das câimbras",
      "Melhora na circulação sanguínea",
      "Redução do inchaço",
      "Fortalecimento da musculatura abdominal",
      "Redução do desconforto intestinal",
      "Melhora da postura corporal",
      "Recuperação pós-parto mais rápida",
      "Diminuição das dores lombares",
      "Controle do aumento do peso corporal",
      "Controle da glicemia e da pressão arterial",
      "Melhora nos níveis hormonais e na ansiedade",
      "Mais sensação de bem-estar e relaxamento muscular",
    ],
    diffsTitle: "Diferenciais do programa",
    diffs: [
      "Programa de treino totalmente personalizado para cada fase da gestação",
      "Maior segurança para você e para o seu bebê",
      "Maior eficácia, potencializando as valências físicas conforme o trimestre",
      "Preparação para o parto e pós-parto",
      "Método exclusivo que proporciona melhores resultados",
    ],
  },
  {
    slug: "bliss-platinum",
    name: "Bliss Platinum",
    badge: "Premium ✦",
    premium: true,
    forWho: "quem quer a experiência máxima",
    image: platinumImg,
    shortBullets: [
      "Acompanhamento exclusivo",
      "Personalização total",
      "Experiência premium diferenciada",
    ],
    tagline: "O melhor do treinamento personalizado, com leveza para socializar.",
    intro: [
      "O Programa Bliss Platinum é um serviço 100% personalizado, criado especialmente para você que quer o melhor do treinamento personalizado e gosta de socializar.",
      "Indicado para quem quer se cuidar preventivamente, possui quadros restritivos (dores articulares, lombalgias, cervicalgias, condropatia, síndrome do impacto do ombro, osteoporose) ou alguma comorbidade (cardiopatias, diabetes, síndrome metabólica, depressão, etc.).",
      "Estrutura: 1 consultor para até 4 membros, sessões com horário agendado, programa totalmente personalizado, variação regular de estímulos conforme evolução, e avaliações e controles periódicos.",
    ],
    forWhom: [
      "Quer um programa de treino 100% personalizado e gosta de socializar",
      "Pessoas com restrições como artrose, hérnias de disco, ruptura de ligamentos de joelhos e ombros, condropatia, síndrome do impacto do ombro e osteoporose",
      "Pessoas com patologias como cardiopatias, diabetes, síndrome metabólica, depressão e fibromialgia",
    ],
    benefitsTitle: "Benefícios",
    benefits: [
      "Segurança e eficiência no alcance dos resultados",
      "Toda estrutura e recursos disponíveis para o desenvolvimento dos treinos",
      "Otimização do tempo disponibilizado para o treinamento",
      "Maior interação social",
      "Melhora do quadro geral de saúde",
      "Melhora na saúde mental (produção de hormônios do bem-estar)",
      "Equipe especializada em necessidades especiais",
      "Conteúdos complementares (alimentação, saúde mental, etc.)",
    ],
    diffsTitle: "O que está incluso",
    diffs: [
      "1 consultor para até 4 membros",
      "Sessões de treino com horário agendado",
      "Programa de treino 100% personalizado",
      "Variação regular de estímulos conforme evolução",
      "Avaliações e controles periódicos",
    ],
  },
];

export function getProgram(slug: string): Program | undefined {
  return PROGRAMS.find((p) => p.slug === slug);
}

export function programWhatsappLink(programName: string) {
  const msg = `Olá! Tenho interesse em saber mais sobre o ${programName}. Podem me chamar?`;
  return `https://wa.me/5561991868113?text=${encodeURIComponent(msg)}`;
}

export const BLISS_CONTACT = {
  whatsapp: "5561991868113",
  whatsappDisplay: "(61) 99186-8113",
  landline: "(61) 3327-6521",
  landlineHref: "tel:+556133276521",
  whatsappHref: "tel:+5561991868113",
  address: "CLN 202, Bloco B, Loja 45/95 — Asa Norte",
  addressFull: "CLN 202 BL B Loja 45/95 — Asa Norte, Brasília – DF, 70832-525",
  city: "Brasília – DF",
  zip: "70832-525",
  instagram: "https://www.instagram.com/blissplacenaoacademia/",
  instagramHandle: "@blissplacenaoacademia",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Bliss Place CLN 202 Bloco B Loja 45 Asa Norte Brasília DF 70832-525"),
  mapsEmbed:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("CLN 202 Bloco B Loja 45 Asa Norte Brasília DF 70832-525") +
    "&output=embed",
};
