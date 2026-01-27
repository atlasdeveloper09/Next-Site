
import { ExternalLink, LayoutGrid, Share2, HeartHandshake, RefreshCcw, History, Pencil } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function Home() {

  const plans = [
    {
      id: 'comunidade1',
      name: "Bot de Comunidade",
      price: "R$ 15,00",
      popular: true,
      buttonVariant: "success"
    },
    {
      id: 'comunidade2',
      name: "Bot de Comunidade",
      price: "R$ 45,00",
      popular: false,
      buttonVariant: "success"
    },
    {
      id: 'comunidade3',
      name: "Bot de Comunidade",
      price: "R$ 180,00",
      popular: false,
      buttonVariant: "success"
    },
  ];

  function PlanCard({ plan }: { plan: typeof plans[0] }) {
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
        <a href="https://discord.gg/invite/applications" target="_blank" rel="noopener noreferrer">
          <Button className={`w-full mt-6 py-2 text-sm font-medium ${plan.buttonVariant === "success" ? "bg-green-600 text-white" : "bg-gray-800 text-white"}`}>
            Adquirir
          </Button>
        </a>
      </div>
    );
  }

  // Funcionalidades
  const features = [
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

  // FAQ
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


  const metrics = [
    {
      value: "100",
      label: "Clientes",
    },
    {
      value: "100",
      label: "Bots",
    },
    {
      value: "24/7",
      label: "Suporte"
    }
  ];

  return (
    <div className="bg-white dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#02040d] dark:to-[#000000]">
      {/* Hero */}
      <section className="container mx-auto px-4 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_70%)]" />
        <div className="relative">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 bg-gradient-to-r from-indigo-300">
              Encontre o seu bot perfeito.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              A solução ideal para transformar o seu servidor Discord em uma ferramenta poderosa e eficiente.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href='https://discord.gg/icones' target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="min-w-[200px]">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Suporte
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-20 bg-white dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#02040d] dark:to-[#000000]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Seu plano perfeito sem nenhuma burocracia!</h2>
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

      {/* Funcionalidades */}
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

      {/* Métricas */}
      <section className="container mx-auto px-4 py-20 border-t">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center space-y-2">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                {metric.value}
              </h3>
              <p className="text-xl font-semibold">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
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
    </div>
  );
}