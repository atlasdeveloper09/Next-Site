import { Terminal } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Commands() {
  const commandCategories = [
    {
      title: "Comandos Moderação",
      description: "Comandos para gerenciar seu servidor",
      commands: [
        { name: "f!avatar @user", description: "Mostra o avatar de um usuário" },
        { name: "f!banner @user", description: "Mostra o banner de um usuário" },
        { name: "f!userinfo @user", description: "Mostra informações de um usuário" },
        { name: "f!addemoji", description: "Adiciona um emoji ao servidor" },
        { name: "f!addcargo @user @cargo", description: "Adiciona um cargo a um usuário" },
        { name: "f!removecargo @user @cargo", description: "Remove um cargo de um usuário" },
        { name: "f!adms", description: "Lista os administradores do servidor" },
        { name: "f!ban @user motivo", description: "Bane um usuário do servidor" },
        { name: "f!unban @user", description: "Desbane um usuário do servidor" },
        { name: "f!mute @user tempo motivo", description: "Silencia um usuário por um tempo" },
        { name: "f!unmute @user", description: "Desfaz o mute de um usuário" },
        { name: "f!clear [1-1000]", description: "Limpa mensagens do chat" },
        { name: "f!kick @user", description: "Expulsa um usuário do servidor" },
        { name: "f!unlock #canal", description: "Desbloqueia um canal" },
        { name: "f!lock #canal", description: "Bloqueia um canal" },
        { name: "f!embed #canal", description: "Envia um embed em um canal" },
        { name: "f!registrar @user", description: "Registra um usuário" },
        { name: "f!editarcargo @cargo", description: "Edita um cargo" },
      ]
    },
    {
      title: "Comandos Vips",
      description: "Comandos exclusivos para membros VIP",
      commands: [
        { name: "f!setvip @user", description: "Define um usuário como VIP" },
        { name: "f!vip", description: "Mostra informações de VIP" },
        { name: "f!addvip @user", description: "Adiciona VIP a um usuário" },
        { name: "f!removervip @user", description: "Remove VIP de um usuário" },
      ]
    },
    {
      title: "Comandos Primeira Dama",
      description: "Comandos especiais da Primeira Dama",
      commands: [
        { name: "f!pd", description: "Veja e adicione a sua Primeira Dama" },
      ]
    },
    {
      title: "Comandos Informações",
      description: "Comandos de informação do servidor ou bot",
      commands: [
        { name: "f!tempo", description: "Mostra o tempo do seu tempo acumulado" },
      ]
    },
  ];

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-white dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#02040d] dark:to-[#000000] py-12">
      <div className="flex items-center gap-3 mb-10">
        <Terminal className="h-10 w-10 text-primary" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary-foreground dark:text-white">Comandos do Bot</h1>
      </div>

      <div className="mb-10 p-4 bg-card/80 rounded-xl border w-full max-w-2xl mx-auto shadow-lg">
        <p className="text-lg text-muted-foreground">
          Prefixo padrão: <span className="font-mono font-bold text-primary">.</span>
        </p>
      </div>

      <div className="flex flex-col gap-10 w-full max-w-2xl mx-auto">
        {commandCategories.map((category, index) => (
          <Card key={index} className="bg-card/80 border rounded-2xl shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl md:text-2xl font-bold text-center">
                {category.title}
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground mt-1">{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {category.commands.map((cmd, cmdIndex) => (
                  <div key={cmdIndex} className="flex flex-col items-center gap-1 p-4 rounded-xl bg-background border border-border shadow-sm">
                    <span className="font-mono font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full text-base md:text-lg mb-1 inline-block">
                      {cmd.name}
                    </span>
                    <span className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {cmd.description}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
