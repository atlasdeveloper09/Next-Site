import { ExternalLink, StoreIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export function Home() {
  // const features = [
  //   {
  //     icon: <Shield className="h-6 w-6" />,
  //     title: "Segurança Avançada",
  //     description: "Proteja sua comunidade com nosso sistema de verificação de última geração"
  //   },
  //   {
  //     icon: <Zap className="h-6 w-6" />,
  //     title: "Vendas Automatizadas",
  //     description: "Simplifique suas operações com poderosas ferramentas de automação"
  //   },
  //   {
  //     icon: <BarChart className="h-6 w-6" />,
  //     title: "Painel analítico",
  //     description: "Acompanhe seu crescimento com insights e métricas detalhadas"
  //   },
  //   {
  //     icon: <Users className="h-6 w-6" />,
  //     title: "Ferramentas comunitárias",
  //     description: "Envolva seus membros com recursos interativos"
  //   },
  //   {
  //     icon: <Clock className="h-6 w-6" />,
  //     title: "Monitoramento 24/7",
  //     description: "Proteção 24 horas por dia e respostas automatizadas"
  //   },
  //   {
  //     icon: <Gift className="h-6 w-6" />,
  //     title: "Sistema de recompensa",
  //     description: "Incentive o envolvimento com recompensas personalizáveis"
  //   }
  // ];

  const metrics = [
    {
      value: "10",
      label: "Clientes",
      description: "Confie em nossa plataforma diariamente"
    },
    {
      value: "10",
      label: "Servidores",
      description: "Utilizando nossos sistema"
    }
  ];

  return (
    <div className="bg-white dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#02040d] dark:to-[#000000]">
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
              <Link to='/plans'>
                <Button size="lg" className="min-w-[200px]">
                  <StoreIcon className="mr-2 h-5 w-5" />
                  Ver Planos
                </Button>
              </Link>
              <Link to='https://discord.gg/nextbot'>
                <Button size="lg" variant="outline" className="min-w-[200px]">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Suporte
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Um bot completo para seu servidor</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Equipe seu servidor com um arsenal completo de ferramentas, cada uma com possibilidades de personalização incríveis! Todas acessíveis em um único painel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border shadow-sm hover:shadow-lg transition-all bg-white dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#02040d] dark:to-[#000000]">
              <CardHeader>
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section> */}

      <section className="container mx-auto px-4 py-20 border-t">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center space-y-2">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                {metric.value}
              </h3>
              <p className="text-xl font-semibold">{metric.label}</p>
              <p className="text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="container mx-auto px-4 py-20">
        <Card className="bg-primary/5 border-primary/20 bg-white dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#02040d] dark:to-[#000000]">
          <CardContent className="p-12 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-4">Economize tempo e dinheiro</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Equipe seu servidor com um arsenal completo de ferramentas, cada uma com possibilidades de personalização incríveis! Todas acessíveis em um único painel.
            </p>
            <Link to="/plans">
              <Button size="lg" className="min-w-[200px]">
                Ver Preços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section> */}
    </div>
  );
}