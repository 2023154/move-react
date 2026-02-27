import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'

export const languages = [
  { code: 'pt', label: 'Português', flag: 'BR' },
  { code: 'en', label: 'English', flag: 'GB' },
  { code: 'es', label: 'Español', flag: 'ES' },
  { code: 'fr', label: 'Français', flag: 'FR' },
  { code: 'it', label: 'Italiano', flag: 'IT' },
  { code: 'zh-CN', label: '中文', flag: 'CN' }
]

export const baseContent = {
  nav: {
    home: 'Início',
    details: 'Serviços',
    faq: 'FAQ'
  },
  hero: {
    slides: [
      {
        id: 'web-design',
        title: 'Websites de Alta Performance',
        tagline: 'Sua vitrine digital 24/7',
        description: 'Desenvolvemos sites modernos, rápidos e otimizados para converter visitantes em clientes reais. Design responsivo para todos os dispositivos.',
        price: {
          main: 'PRO',
          note: 'Consultoria gratuita inclusa'
        },
        features: [
          'Design Exclusivo e Moderno',
          'Otimização para SEO (Google)',
          'Painel de Controle Intuitivo'
        ],
        cta: 'Solicitar Orçamento',
        image: card1,
        imageAlt: 'Desenvolvimento de Websites Profissionais'
      },
      {
        id: 'systems',
        title: 'Sistemas e Plataformas',
        tagline: 'Automação e Gestão Inteligente',
        description: 'Criamos sistemas internos, CRMs e plataformas personalizadas para gerir o seu negócio com eficiência e escala.',
        price: {
          main: 'TECH',
          note: 'Soluções escaláveis'
        },
        features: [
          'Automação de Processos',
          'Dashboards em Tempo Real',
          'Segurança de Dados'
        ],
        cta: 'Ver Soluções',
        image: card2,
        imageAlt: 'Sistemas Personalizados para Empresas'
      },
      {
        id: 'traffic-social',
        title: 'Tráfego Pago e Redes Sociais',
        tagline: 'Escalando seu Faturamento',
        description: 'Gestão completa de campanhas no Google e Meta Ads, aliada a um posicionamento estratégico nas redes sociais.',
        price: {
          main: 'GROWTH',
          note: 'Foco total em ROI'
        },
        features: [
          'Gestão de Anúncios (Ads)',
          'Suporte em Redes Sociais',
          'Relatórios de Performance'
        ],
        cta: 'Escalar meu Negócio',
        image: card3,
        imageAlt: 'Gestão de Tráfego e Social Media'
      }
    ],
    ctaLink: '#contact'
  },
  sales: {
    problem: {
      title: 'Sua empresa está enfrentando estes desafios?',
      bullets: [
        'Site lento, antigo ou que não funciona no celular',
        'Processos manuais que tomam todo o seu tempo',
        'Redes sociais paradas e sem engajamento',
        'Dificuldade em atrair novos clientes qualificados',
        'Investimento em anúncios sem retorno claro'
      ]
    },
    solution: {
      title: 'Transformamos sua Presença Digital',
      paragraphs: [
        'Somos uma agência focada em resultados reais. Não entregamos apenas design; entregamos ferramentas de crescimento. Unimos tecnologia de ponta com estratégias de marketing validadas para colocar sua empresa à frente da concorrência.',
        'Desde a criação de um site institucional até sistemas complexos de gestão, nosso foco é simplificar sua operação e maximizar seus lucros através do digital.'
      ]
    },
    product: {
      title: 'Nossa Stack de Soluções Profissionais',
      items: [
        {
          icon: 'device',
          title: 'Websites Premium',
          description: 'Desenvolvimento focado em experiência do usuário e conversão imediata.'
        },
        {
          icon: 'clipboard',
          title: 'Sistemas Customizados',
          description: 'Plataformas sob medida para resolver problemas específicos do seu negócio.'
        },
        {
          icon: 'chart',
          title: 'Tráfego Pago (Ads)',
          description: 'Campanhas estratégicas para levar as pessoas certas até o seu produto.'
        },
        {
          icon: 'file',
          title: 'Identidade Visual',
          description: 'Criação de marcas e artes profissionais para manter sua empresa com um visual consistente.'
        },
        {
          icon: 'shield',
          title: 'Manutenção e Suporte',
          description: 'Sua plataforma sempre online e segura com nosso monitoramento constante.'
        },
        {
          icon: 'chart',
          title: 'Consultoria de Growth',
          description: 'Estratégias baseadas em dados para acelerar o crescimento e o ROI da sua empresa.'
        }
      ],
      note: 'Cada projeto é único e recebe atenção personalizada da nossa equipe.'
    },
    benefits: {
      title: 'Por que escolher nossa agência?',
      bullets: [
        'Aumente sua visibilidade e autoridade online',
        'Automatize tarefas repetitivas com sistemas inteligentes',
        'Atraia leads qualificados prontos para comprar',
        'Suporte técnico rápido e humano',
        'Design moderno que reflete a qualidade da sua empresa'
      ]
    },
    differentiators: {
      title: 'Diferenciais que geram lucro',
      bullets: [
        'Foco total em ROI (Retorno sobre Investimento)',
        'Tecnologias modernas e performáticas',
        'Transparência total em relatórios de tráfego',
        'Entregas ágeis e dentro do prazo',
        'Expertise em diversos nichos de mercado'
      ]
    },
    primaryCta: {
      id: 'cta-primary',
      title: 'Pronto para digitalizar seu negócio?',
      text: 'Clique no botão abaixo para agendar uma consultoria gratuita e descobrir como podemos ajudar sua empresa a crescer.',
      buttonLabel: 'Quero crescer meu negócio',
      buttonHref: '#contact',
      note: 'Consultoria estratégica sem compromisso.'
    },
    testimonials: {
      title: 'Quem confia em nosso trabalho',
      items: [
        {
          quote: 'O novo sistema automatizou 40% das nossas tarefas diárias. Recuperamos tempo e aumentamos a precisão dos dados.',
          author: 'Ricardo S., Diretor de Operações',
          rating: 5,
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
          quote: 'Nosso faturamento dobrou após as campanhas de tráfego pago. O suporte nas redes sociais também fez toda a diferença.',
          author: 'Mariana L., Empresária',
          rating: 5,
          avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
        },
        {
          quote: 'O site ficou incrível e muito rápido. Recebemos elogios dos clientes todos os dias pela facilidade de navegação.',
          author: 'Carlos E., CEO TechStart',
          rating: 5,
          avatar: 'https://randomuser.me/api/portraits/men/35.jpg'
        }
      ]
    },
    faq: {
      id: 'faq',
      title: 'Perguntas frequentes',
      items: [
        {
          question: 'Quanto tempo leva para criar um site?',
          answer: 'O prazo médio para um site institucional é de 15 a 30 dias, dependendo da complexidade e do envio de materiais.'
        },
        {
          question: 'Vocês cuidam de tudo nas redes sociais?',
          answer: 'Sim! Desde o planejamento de conteúdo, criação de artes, legendas e até a interação estratégica com o público.'
        },
        {
          question: 'O tráfego pago garante vendas?',
          answer: 'O tráfego garante que pessoas qualificadas vejam sua oferta. A venda depende do conjunto: oferta, produto e atendimento.'
        },
        {
          question: 'Como funcionam os sistemas personalizados?',
          answer: 'Analisamos suas dores de gestão e criamos uma ferramenta web sob medida para resolver esses problemas específicos.'
        }
      ]
    },
    support: {
      title: 'Suporte e Contato',
      description: 'Dúvidas ou novos projetos? Fale conosco em',
      email: 'contatomoveeuropa@gmail.com',
      responseTime: 'Atendimento prioritário para clientes ativos.'
    }
  },
  contact: {
    title: 'Inicie seu Projeto Agora',
    subtitle: 'Preencha o formulário abaixo e entraremos em contato para entender suas necessidades e propor a melhor solução.',
    disclaimer: 'Seus dados estão seguros conosco e serão usados apenas para contato comercial.',
    form: {
      name: 'Seu nome ou nome da empresa',
      email: 'Seu melhor e-mail',
      message: 'Conte um pouco sobre seu projeto ou necessidade',
      button: 'Enviar Solicitação'
    }
  },
  footer: {
    title: 'Conecte-se Conosco',
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/mundo_online_world/', icon: 'FaInstagram' },
      { label: 'WhatsApp', url: 'https://wa.me/353834694919', icon: 'FaWhatsapp' }
    ]
  }
}
