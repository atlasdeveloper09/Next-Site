import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, UserCheck, MessageSquare, Bot } from 'lucide-react';

const RULES_DATA = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Segurança do servidor",
    rules: [
      "Sem compartilhamento de informações pessoais",
      "Sem assédio ou intimidação",
      "Sem discurso de ódio ou discriminação",
      "Relate atividades suspeitas aos moderadores"
    ]
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Comunicação",
    rules: [
      "Use uma linguagem apropriada",
      "Mantenha as discussões em canais relevantes",
      "Sem spam ou limites excessivos",
      "Respeite as opiniões dos outros"
    ]
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Bot Manager",
    rules: [
      "Use comandos em canais designados",
      "Não abuse dos recursos do bot",
      "Relate bugs através dos canais apropriados",
      "Siga os tempos de espera do comando"
    ]
  },
  {
    icon: <UserCheck className="h-6 w-6" />,
    title: "Conduta dos Membros",
    rules: [
      "Siga as instruções do moderador",
      "Use apelidos apropriados",
      "Nenhuma representação de funcionários ou outros",
      "Mantenha uma atmosfera positiva"
    ]
  }
];

export function Rules() {
  return (
    <div className="bg-white dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#02040d] dark:to-[#000000]">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Regras da comunidade</h1>
            <p className="text-xl text-muted-foreground">
              Diretrizes para manter um ambiente seguro e amigável
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RULES_DATA.map((section, index) => (
              <Card key={index} className="border shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {section.icon}
                    </div>
                    <CardTitle>{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="flex items-start gap-2">
                        <span className="text-primary font-semibold">
                          {ruleIndex + 1}.
                        </span>
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="py-4">
              <p className="text-center text-muted-foreground">
                O não cumprimento dessas regras pode resultar em advertências, suspensão temporária ou banimento permanente.
                Os moderadores têm a palavra final em todas as situações.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}