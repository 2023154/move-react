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
    details: 'Planos',
    faq: 'FAQ',
    tagline: 'Expanda seu Negócio'
  },
  hero: {
    slides: [
      {
        id: 'FraseTitulo',
        title: 'Expanda sua Presença Online',
        tagline: 'Presença Digital Essencial',
        description: 'Site estático de 1 página ideal para autônomos e microempreendedores. Nós criamos, hospedamos e gerenciamos para você.',
        price: {
          main: '$99/anual',
          oldPrice: '$330',
          brl: { main: 'R$ 599/anual', oldPrice: 'R$ 1.999' },
          note: 'Hospedagem estática (GitHub/Render) inclusa'
        },
        features: [
          'Site Estático de 1 Página',
          'Conexão de Domínio Personalizado',
          '1 Atualização Menor por mês',
          'Até 3 Fotos de Marketing Inclusas',
          'Suporte Direto (Email & WhatsApp)'
        ],
        cta: 'Assinar Plano Básico',
        image: card1,
        imageAlt: 'Plano de Website Básico'
      },
      {
        id: 'professional-plan',
        title: 'Plano Profissional',
        tagline: 'Crescimento e Autoridade',
        description: 'Site dinâmico de até 5 páginas com banco de dados. Perfeito para empresas que precisam de mais espaço e SEO.',
        price: {
          main: '$199/anual',
          oldPrice: '$660',
          brl: { main: 'R$ 1.199/anual', oldPrice: 'R$ 3.999' },
          note: 'Banco de Dados + 5GB de Armazenamento'
        },
        features: [
          'Site Dinâmico de até 5 Páginas',
          'Banco de Dados (Supabase)',
          'Remoção da Marca d\'água "Built By"',
          '3 Atualizações Menores por mês',
          // 'Google Analytics e Configuração SEO'
        ],
        cta: 'Assinar Plano Profissional',
        image: card2,
        imageAlt: 'Plano de Website Profissional'
      },
      {
        id: 'premium-plan',
        title: 'Plano Premium',
        tagline: 'Solução Completa e Autonomia',
        description: 'Plataforma completa e dinâmica. Faça login no CMS para editar seu próprio conteúdo e aceite pagamentos online.',
        price: {
          main: '$499/anual',
          oldPrice: '$1000',
          brl: { main: 'R$ 2.999/anual', oldPrice: 'R$ 5.999' },
          note: 'Tráfego de 50GB + 20GB de Armazenamento'
        },
        features: [
          'Painel de Login CMS para o Cliente',
          'Integração de Pagamentos (Stripe)',
          'Fotos e Atualizações Ilimitadas',
          'Domínio Personalizado + Analytics',
          'Suporte VIP (WhatsApp e Chamadas)'
        ],
        cta: 'Assinar Plano Premium',
        image: card3,
        imageAlt: 'Plano de Website Premium'
      }
    ],
    ctaLink: '#contact'
  },
  sales: {
    problem: {
      title: 'Dificuldades com o seu site atual?',
      bullets: [
        'Não tem tempo ou conhecimento para atualizar o site',
        'Pagando taxas mensais altas para agências tradicionais',
        'Site lento ou que não se adapta a telas de celular',
        'Dificuldade para integrar formulários e banco de dados',
        'Falta de suporte rápido quando você precisa de mudanças'
      ]
    },
    solution: {
      title: 'Nós Construímos e Gerenciamos Para Você',
      paragraphs: [
        'Esqueça os construtores de sites complicados. Nossa estrutura "Feito Para Você" garante que seu negócio tenha uma presença digital profissional sem a dor de cabeça da manutenção técnica.',
        'Desde uma página estática ultrarrápida até plataformas dinâmicas com CMS próprio e pagamentos via Stripe, nossos planos anuais cobrem tudo: design, hospedagem e atualizações contínuas.'
      ]
    },
    product: {
      title: 'Recursos Inclusos nos Nossos Planos',
      items: [
        {
          icon: 'device',
          title: 'Domínio Personalizado',
          description: 'Traga o seu próprio domínio. Nós fazemos toda a conexão técnica gratuitamente em todos os planos.'
        },
        {
          icon: 'clipboard',
          title: 'Banco de Dados Integrado',
          description: 'A partir do plano Profissional, seu site conta com a robustez do Supabase para gestão de dados e formulários.'
        },
        {
          icon: 'chart',
          title: 'Atualizações Contínuas',
          description: 'Precisa trocar uma foto ou um texto? Oferecemos atualizações menores mensais, ou edições ilimitadas no plano Premium.'
        },
        // {
        //   icon: 'file',
        //   title: 'Google Analytics e SEO',
        //   description: 'Otimização para os motores de busca e rastreamento de visitantes inclusos nos planos Profissional e Premium.'
        // },
        {
          icon: 'shield',
          title: 'Aceite Pagamentos Online',
          description: 'No plano Premium, integramos o Stripe para que você possa vender produtos ou serviços diretamente no seu site.'
        },
        {
          icon: 'chart',
          title: 'Suporte Dedicado',
          description: 'Fale diretamente com nossa equipe via Email ou WhatsApp. Clientes Premium têm acesso a suporte VIP e chamadas.'
        }
      ],
      note: 'Todos os sites são responsivos, garantindo uma experiência perfeita em computadores, tablets e celulares.'
    },
    benefits: {
      title: 'Por que escolher nossa assinatura?',
      bullets: [
        'Custos transparentes com faturamento anual único',
        'Hospedagem e manutenção totalmente inclusas',
        'Sites codificados à mão para máxima velocidade',
        'Sem necessidade de conhecimentos técnicos da sua parte',
        'Design moderno que reflete a qualidade da sua empresa'
      ]
    },
    differentiators: {
      title: 'Diferenciais que geram resultados',
      bullets: [
        'Transição fácil de um site Estático (Basic) para Dinâmico (Pro/Premium)',
        'Remoção de marca d\'água a partir do plano Profissional',
        'Limites de armazenamento generosos (Até 20GB no Premium)',
        'Integração direta com suas redes sociais e WhatsApp',
        'Opção de Painel CMS para você ter controle total (Premium)'
      ]
    },
    primaryCta: {
      id: 'cta-primary',
      title: 'Pronto para colocar seu site no ar?',
      text: 'Clique no botão abaixo para agendar sua consultoria gratuita e escolher o plano ideal para o seu negócio.',
      buttonLabel: 'Quero meu site profissional',
      buttonHref: '#contact',
      note: 'Configuração e design guiados pela nossa equipe.'
    },
    testimonials: {
      title: 'Quem confia em nosso trabalho',
      items: [
        {
          quote: 'O plano básico foi perfeito para a minha consultoria. Site no ar rápido, sem complicação e com suporte direto no WhatsApp.',
          author: 'Ricardo S., Consultor Independente',
          rating: 5,
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
          quote: 'Fizemos o upgrade para o plano Premium e agora gerenciamos nosso próprio conteúdo pelo CMS, além de aceitar pagamentos via Stripe!',
          author: 'Mariana L., Dona de E-commerce',
          rating: 5,
          avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
        },
        {
          quote: 'A equipe cuida de todas as atualizações de texto e fotos no plano Profissional. Economizo horas todos os meses.',
          author: 'Carlos E., Proprietário de Clínica',
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
          question: 'O que é considerado uma "Atualização Menor"?',
          answer: 'Uma atualização menor inclui trocas de texto, substituição de imagens, ou ajustes de links. Mudanças completas de layout não estão inclusas.'
        },
        {
          question: 'Vocês compram o domínio para mim?',
          answer: 'Você deve comprar e trazer o seu próprio domínio (ex: godaddy, registro.br). A partir daí, nós cuidamos de toda a conexão técnica gratuitamente em qualquer plano.'
        },
        {
          question: 'Como funciona o acesso CMS no plano Premium?',
          answer: 'No plano Premium, criamos um painel de controle (CMS) seguro onde você mesmo pode fazer login para editar textos, adicionar novos serviços ou fotos de forma ilimitada.'
        },
        {
          question: 'Posso começar com o Básico e mudar depois?',
          answer: 'Com certeza! Você pode fazer o upgrade do seu site estático para uma versão dinâmica (Profissional ou Premium) a qualquer momento pagando a diferença.'
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
    subtitle: 'Preencha o formulário abaixo e entraremos em contato para entender suas necessidades e propor o melhor plano.',
    disclaimer: 'Seus dados estão seguros conosco e serão usados apenas para contato comercial.',
    form: {
      name: 'Seu nome ou nome da empresa',
      email: 'Seu melhor e-mail',
      message: 'Conte um pouco sobre seu projeto ou qual plano te interessou',
      button: 'Enviar Solicitação'
    }
  },
  footer: {
    title: '',
    links: []
  }
}