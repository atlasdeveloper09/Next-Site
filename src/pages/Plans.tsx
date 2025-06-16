import { Check, LayoutGrid, Share2, HeartHandshake, RefreshCcw, History, Pencil } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  custom?: boolean;
  buttonVariant?: "default" | "success";
}

const plans: Plan[] = [
  {
    id: 'comunidade',
    name: "Bot de Comunidade",
    price: "R$ 15,00",
    description: "Profissionalize o atendimento/moderação/diversão do seu servidor.",
    features: [
      "Personalização Total",
      "Suporte Ininterrupto",
      "Atualizações Automáticas",
      "Funcionalidades Exclusivas",
      "Gerenciamento de Usuários"
    ],
    popular: true,
    buttonVariant: "success"
  },
  {
    id: 'comunidade',
    name: "Bot de Comunidade",
    price: "R$ 45,00",
    description: "Profissionalize o atendimento/moderação/diversão do seu servidor.",
    features: [
      "Personalização Total",
      "Suporte Ininterrupto",
      "Atualizações Automáticas",
      "Funcionalidades Exclusivas",
      "Gerenciamento de Usuários"
    ],
    popular: false,
    buttonVariant: "success"
  },
  {
    id: 'comunidade',
    name: "Bot de Comunidade",
    price: "R$ 180,00",
    description: "Profissionalize o atendimento/moderação/diversão do seu servidor.",
    features: [
      "Personalização Total",
      "Suporte Ininterrupto",
      "Atualizações Automáticas",
      "Funcionalidades Exclusivas",
      "Gerenciamento de Usuários"
    ],
    popular: false,
    buttonVariant: "success"
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className={`bg-white dark:bg-gradient-to-r dark:from-[#131315] dark:via-[#131315] dark:to-[#131315] relative p-7 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 ${plan.popular ? 'border-2 border-green-600' : 'border border-gray-700'} bg-[#0B0E13] w-full md:w-75`}>
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          ✦ Mais vendido ✦
        </div>
      )}
      <h3 className="dark:text-white text-lg font-semibold">{plan.name}</h3>
      <div className="dark:text-white mt-2">
        <span className="text-3xl font-bold">{plan.price}</span>
        <span className="text-gray-400 ml-1">/mês</span>
      </div>
      <p className="text-gray-500 mt-2 text-sm">{plan.description}</p>
      <ul className="mt-4 space-y-2">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center dark:text-gray-300 text-sm">
            <Check className="h-4 w-4 text-green-500 mr-2" /> {feature}
          </li>
        ))}
      </ul>
      <a href="https://discord.gg/invite/applications" target="_blank" rel="noopener noreferrer">
        <Button className={`w-full mt-6 py-2 text-sm font-medium ${plan.buttonVariant === "success" ? "bg-green-600 text-white" : "bg-gray-800 text-white"}`}>
          Adquirir
        </Button>
      </a>
    </div>
  );
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <RefreshCcw className="w-8 h-8" />,
    title: "Eficiência e Otimização",
    description: "Aumente o desempenho do servidor com nossos bots otimizados."
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Suporte Dedicado",
    description: "Acesse nossa equipe especializada para assistência e resolução de problemas de forma rápida."
  },
  {
    icon: <History className="w-8 h-8" />,
    title: "Atualizações Regulares",
    description: "Desfrute de atualizações consistentes com novos recursos e correções de segurança."
  },
  {
    icon: <Pencil className="w-8 h-8" />,
    title: "Personalização",
    description: "Adapte e ajuste as funcionalidades dos bots para atender às necessidades exclusivas do seu servidor."
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Integração Simples",
    description: "Facilite a integração dos bots com outras ferramentas e plataformas que você utiliza."
  },
  {
    icon: <LayoutGrid className="w-8 h-8" />,
    title: "Gerenciamento Eficiente",
    description: "Gerencie e organize os usuários do seu servidor de maneira eficiente e intuitiva."
  }
];

function Features() {
  return (
    <section className="py-20 bg-white dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#02040d] dark:to-[#000000]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold mb-4">Principais Funcionalidades</h2>
          <h3 className="text-4xl font-bold mb-6">Conheça as vantagens dos nossos bots</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nossos bots foram desenvolvidos para oferecer soluções que melhoram a gestão e o desempenho do seu servidor. Abaixo, conheça as principais funcionalidades que trazem praticidade e eficiência.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border border-border/1000">
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "Como funciona a personalização dos bots?",
    answer: "Você pode ajustar as funcionalidades dos bots para atender às necessidades específicas do seu servidor."
  },
  {
    question: "Os bots têm suporte 24/7?",
    answer: "Sim, nossa equipe está disponível para ajudar a qualquer momento."
  },
  {
    question: "Posso mudar de plano depois de contratar?",
    answer: "Sim, você pode fazer o upgrade ou downgrade do plano a qualquer momento."
  },
];

function FAQ() {
  return (
    <section className="py-20 bg-white dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#02040d] dark:to-[#000000]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Perguntas Frequentes</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border p-4 rounded-lg bg-gray-100 dark:bg-[#131315]">
              <h3 className="text-xl font-semibold text-black dark:text-white">{faq.question}</h3>
              <p className="text-muted-foreground mt-2 text-black dark:text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Plans() {
  return (
    <>
      <section className="py-20 bg-white dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#02040d] dark:to-[#000000]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Seu plano perfeito sem nenhuma burocracia!</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Escolha o plano que melhor se adapta às suas necessidades e comece a aproveitar os benefícios imediatamente.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>
      <Features />
      <FAQ />
    </>
  );
}