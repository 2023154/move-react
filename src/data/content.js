import heroPrimaryImg from '../images/capaprincipal2png.png'
import courseCoverImg from '../images/capadocurso.jpg'

export const languages = [
  { code: 'pt', label: 'Português', flag: 'BR' },
  { code: 'en', label: 'English', flag: 'GB' },
  { code: 'es', label: 'Español', flag: 'ES' },
  { code: 'fr', label: 'Français', flag: 'FR' },
  { code: 'it', label: 'Italiano', flag: 'IT' },
  { code: 'zh-CN', label: '中文', flag: 'CN' },
  { code: 'mn', label: 'Монгол', flag: 'MN' }
]

export const baseContent = {
  nav: {
    home: 'Início',
    details: 'Conteúdo',
    faq: 'FAQ'
  },
  hero: {
    slides: [
      {
        id: 'move-essential',
        title: 'MOVE Essencial',
        tagline: 'Tudo que você precisa para embarcar com autonomia',
        description: 'Checklist, roteiro completo, modelos prontos e planilha financeira para você planejar a mudança internacional com segurança.',
        price: {
          main: 'R$67',
          note: 'Valor promocional de lançamento'
        },
        features: [
          'Acesso vitalício ao kit completo',
          'Atualizações gratuitas em 2025',
          'Garantia incondicional de 7 dias'
        ],
        cta: 'Garantir acesso agora',
        image: courseCoverImg,
        imageAlt: 'Capa do curso MOVE Essencial'
      },
      {
        id: 'move-family',
        title: 'MOVE Family Pack',
        tagline: 'Para casais, mães solo e famílias que querem clareza',
        description: 'Inclui o MOVE Essencial + cronograma adaptado para famílias, modelos de planilhas extras e guia de escolas infantis.',
        price: {
          main: 'R$129',
          note: 'Possibilidade de parcelamento em até 6x'
        },
        features: [
          'Planilha financeira familiar',
          'Guia de adaptação para crianças',
          'Modelos de comunicação com escolas'
        ],
        cta: 'Quero o Family Pack',
        image: heroPrimaryImg,
        imageAlt: 'Família celebrando viagem com o MOVE'
      },
      {
        id: 'move-mentorship',
        title: 'MOVE + Mentoria Express',
        tagline: 'Acompanhamento direto em uma sessão estratégica de 60 minutos',
        description: 'Receba o kit completo + mentoria individual para revisar documentos, cronograma e tirar dúvidas ao vivo.',
        price: {
          main: 'R$297',
          note: 'Agenda semanal com vagas limitadas'
        },
        features: [
          'Sessão 1:1 de 60 minutos',
          'Checklist personalizado pós-mentoria',
          'Suporte por e-mail por 7 dias'
        ],
        cta: 'Aplicar para mentoria',
        image: courseCoverImg,
        imageAlt: 'Sessão de mentoria do MOVE'
      }
    ],
    ctaLink: '#cta-primary'
  },
  sales: {
    problem: {
      title: 'Você quer sair do Brasil, mas...',
      bullets: [
        'Se sente perdida ou perdido com tanta informação solta',
        'Acha que só é possível com ajuda de agência cara',
        'Tem medo de cometer erros burocráticos e perder dinheiro',
        'Ainda não fala inglês fluente',
        'Sonha com uma vida melhor, mas não sabe por onde começar'
      ]
    },
    solution: {
      title: 'Foi por isso que criei o MOVE',
      paragraphs: [
        'O MOVE é um kit prático, direto e completo com tudo que você precisa para sair do Brasil e reconstruir sua vida na Europa, com foco em um dos destinos mais acessíveis e desejados: a Irlanda.',
        'Todos os passos que eu e minha família seguimos estão organizados aqui: da decisão ao embarque, matrícula, emprego e adaptação. Mesmo que o seu destino seja Portugal, Alemanha ou Espanha, os pilares continuam válidos.'
      ]
    },
    product: {
      title: 'Dentro do MOVE você recebe acesso imediato a',
      items: [
        {
          icon: 'clipboard',
          title: 'Checklist completo',
          description: 'Documentos, prazos e vistos organizados para você não esquecer nenhum passo.'
        },
        {
          icon: 'compass',
          title: 'Roteiro passo a passo',
          description: 'Planejamento do zero ao embarque, incluindo matrícula, trabalho e adaptação.'
        },
        {
          icon: 'file',
          title: 'Modelos prontos',
          description: 'Currículo e e-mail em inglês adaptáveis para diferentes perfis e objetivos.'
        },
        {
          icon: 'video',
          title: 'Vídeo exclusivo',
          description: 'Os 5 erros mais comuns que fazem brasileiros perder dinheiro antes de embarcar.'
        },
        {
          icon: 'list',
          title: 'Lista de escolas e empregos',
          description: 'Instituições confiáveis e plataformas atualizadas para multiplicar suas oportunidades.'
        },
        {
          icon: 'chart',
          title: 'Planilha financeira inteligente',
          description: 'Saiba quanto guardar, quanto custa viver na Irlanda e como organizar cada gasto.'
        }
      ],
      note: 'Conteúdo disponível imediatamente após a confirmação do pagamento.'
    },
    benefits: {
      title: 'Os resultados que você destrava',
      bullets: [
        'Economize até R$20.000 evitando taxas de agência',
        'Faça o processo com clareza, segurança e autonomia',
        'Aplique materiais atualizados sem precisar começar do zero',
        'Planeje tudo mesmo sem falar inglês fluente',
        'Ideal para famílias, casais, mães solo ou mulheres viajando sozinhas'
      ]
    },
    differentiators: {
      title: 'Por que o MOVE é diferente',
      bullets: [
        'Baseado em experiência real, nada de teoria distante da prática',
        'Atualizado para 2025 com links e referências conferidos',
        'Direto ao ponto para você não perder tempo',
        'Alto valor percebido por um investimento acessível',
        'Compatível com diferentes perfis: solo, casais e famílias'
      ]
    },
    primaryCta: {
      id: 'cta-primary',
      title: 'Garanta seu acesso ao MOVE por R$67',
      text: 'Clique no botão para garantir o kit completo agora mesmo e iniciar seu plano com segurança e autonomia.',
      buttonLabel: 'Quero o MOVE por R$67',
      buttonHref: '#checkout',
      note: 'Pagamento seguro e liberação automática.'
    },
    testimonials: {
      title: 'Histórias de quem já está embarcando',
      items: [
        {
          quote: 'Com o MOVE eu organizei tudo em menos de um mês. Já estou pronta para embarcar e gastei muito menos do que imaginei.',
          author: 'Paula M., Recife'
        },
        {
          quote: 'O vídeo dos erros me salvou. Eu ia fazer tudo errado sem saber. Agora me sinto confiante para viajar.',
          author: 'Márcio L., Campinas'
        }
      ]
    },
    visualTips: {
      title: 'Veja o MOVE em ação',
      bullets: [
        'Use mockups da checklist, planilha, roteiro e vídeo para reforçar o valor percebido',
        'Mostre o MOVE em um notebook, celular e tablet para destacar a versatilidade',
        'Inclua uma linha do tempo visual com as etapas do processo para facilitar a compreensão'
      ]
    },
    authority: {
      title: 'Quem criou o MOVE?',
      paragraphs: [
        'Sou mulher, mãe, esposa e profissional que sonhava com uma vida melhor para a minha família. Decidi fazer o caminho sozinha, sem agência, sem dinheiro sobrando e sem inglês fluente. E consegui.',
        'Hoje moro na Irlanda com minha família e transformei essa experiência em um guia prático que eu mesma gostaria de ter tido. Se eu consegui, você também consegue. O MOVE existe para te acompanhar nessa jornada.'
      ]
    },
    secondaryCta: {
      id: 'cta-secundario',
      title: 'Pronta para dar o primeiro passo?',
      text: 'Garanta agora o acesso ao MOVE e comece a transformar sua vida com clareza e segurança.',
      buttonLabel: 'Quero o MOVE por R$67',
      buttonHref: '#checkout'
    },
    faq: {
      id: 'faq',
      title: 'Perguntas frequentes',
      items: [
        {
          question: 'Preciso falar inglês fluente?',
          answer: 'Não. O conteúdo te guia mesmo que você esteja começando do zero, com modelos e orientações para ganhar confiança.'
        },
        {
          question: 'Esse kit serve só para a Irlanda?',
          answer: 'O foco principal é a Irlanda porque vivi essa experiência, mas muitos passos também se aplicam a outros países da Europa.'
        },
        {
          question: 'Tenho filhos. Serve para mim?',
          answer: 'Sim. Levei minha família inteira e compartilho estratégias reais para quem viaja com crianças.'
        },
        {
          question: 'É um curso?',
          answer: 'Não. É um kit prático com arquivos, modelos e orientações prontas para aplicar imediatamente.'
        },
        {
          question: 'O kit tem garantia?',
          answer: 'Sim. Você tem 7 dias para testar. Se não for para você, devolvemos o valor sem burocracia.'
        }
      ]
    },
    guarantee: {
      title: 'Garantia incondicional de 7 dias',
      text: 'Se o MOVE não fizer sentido para você dentro de 7 dias, basta enviar um e-mail e devolvemos todo o valor. Sem perguntas.'
    },
    bonuses: {
      title: 'Bônus exclusivos',
      bullets: [
        'Lista de cidades acessíveis e seguras na Irlanda e na Europa',
        'Guia de sites gratuitos para aprender inglês ou outros idiomas'
      ]
    },
    urgency: {
      title: 'Oferta especial de lançamento',
      text: 'Apenas R$67 para as 100 primeiras alunas. Depois, o preço volta para R$97.'
    },
    finalCta: {
      id: 'cta-final',
      title: 'Garanta agora seu acesso por R$67',
      text: 'Oferta válida enquanto durar o lote especial. Depois o valor sobe para R$97.',
      buttonLabel: 'Quero o MOVE agora',
      buttonHref: '#checkout'
    },
    compatibility: {
      title: 'Compatibilidade e acessibilidade',
      bullets: [
        'Acesso 100% online em celular, tablet ou computador',
        'Entrega imediata por e-mail após a confirmação',
        'Acesso vitalício com atualizações gratuitas'
      ]
    },
    support: {
      title: 'Suporte dedicado',
      description: 'Dúvidas ou suporte? Escreva para',
      email: 'contato@suaempresa.com',
      responseTime: 'Atendimento de segunda a sexta, em até 48h úteis.'
    }
  },
  footer: {
    title: 'Siga nas redes',
    links: [
      { label: 'GitHub', url: 'https://github.com/2023154', icon: 'FaGithub' },
      { label: 'Facebook', url: 'https://www.facebook.com/forbarbering', icon: 'FaFacebook' },
      { label: 'Instagram', url: 'https://www.instagram.com', icon: 'FaInstagram' },
      { label: 'YouTube', url: 'https://www.youtube.com', icon: 'FaYoutube' }
    ]
  }
}
