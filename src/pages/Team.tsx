import React, { useEffect, useState } from "react";
import { Briefcase, Code } from "lucide-react";

interface TeamMember {
  id: string;
  role: string;
  description: string;
  icon: React.ReactNode[];
}

const teamMembers: TeamMember[] = [
  {
    id: "1441581261268193360",
    role: "CEO e Programador",
    description: "Creator e Programador.",
    icon: [
      <Briefcase className="w-5 h-5 text-green-600" key="briefcase" />,
      <Code className="w-5 h-5 text-blue-600 ml-1" key="code" />,
    ],
  },
];

export function Team() {
  const [userData, setUserData] = useState<Record<string, { name: string; avatar: string }>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const fetchedData: Record<string, { name: string; avatar: string }> = {};

      for (const member of teamMembers) {
        try {
          const response = await fetch(`https://japi.rest/discord/v1/user/${member.id}`);
          
          if (response.ok) {
            const result = await response.json();
            
            // Debug: verifique a estrutura da resposta
            console.log(`Resposta para ${member.id}:`, result);
            
            // A API retorna { data: { ... }, cached: true, etc }
            if (result.data) {
              const user = result.data;
              
              // Use o avatarURL da resposta OU construa manualmente
              const avatarUrl = user.avatarURL || 
                (user.avatar ? `https://cdn.discordapp.com/avatars/${member.id}/${user.avatar}.png` : user.defaultAvatarURL);
              
              const name = user.global_name || user.username || "Usuário";
              
              fetchedData[member.id] = {
                name: name,
                avatar: avatarUrl
              };
              
              console.log(`Dados processados para ${member.id}:`, {
                name: name,
                avatar: avatarUrl
              });
            }
          } else {
            console.error(`Erro na resposta para ${member.id}:`, response.status);
          }
        } catch (error) {
          console.error(`Erro ao buscar dados do usuário ${member.id}:`, error);
        }
      }

      setUserData(fetchedData);
      setIsLoading(false);
      console.log("Todos os dados:", fetchedData);
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#02040d] dark:to-[#000000]">
        <img
          src="https://i.gifer.com/origin/4d/4dc11d17f5292fd463a60aa2bbb41f6a_w200.gif"
          alt="Carregando..."
          className="w-16 h-16 mb-4"
        />
        <h1 className="text-2xl font-bold text-black dark:text-white">Carregando informações...</h1>
        <p className="text-gray-600 dark:text-gray-300">Por favor, aguarde enquanto carregamos os dados da equipe.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#02040d] dark:to-[#000000]">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-black dark:text-white">Conheça nossa equipe</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nossa equipe dedicada está aqui para garantir que você tenha a melhor experiência possível.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => {
              const user = userData[member.id];
              const displayName = user?.name || "Carregando...";
              const avatarUrl = user?.avatar || "https://cdn.discordapp.com/embed/avatars/0.png";
              
              return (
                <div key={index} className="p-6 rounded-lg border bg-gray-50 dark:bg-[#131315] shadow-sm">
                  <div className="flex items-center mb-4">
                    <img
                      src={avatarUrl}
                      alt={displayName}
                      className="w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-600 object-cover"
                      onError={(e) => {
                        // Fallback se a imagem não carregar
                        e.currentTarget.src = "https://cdn.discordapp.com/embed/avatars/0.png";
                      }}
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-black dark:text-white">
                        {displayName}
                      </h3>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        {member.icon}
                        <span className="ml-2">{member.role}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{member.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 rounded-lg p-6">
            <p className="text-center text-gray-600 dark:text-gray-300">
              Nossa equipe trabalha constantemente para melhorar e manter a qualidade dos nossos serviços.
              Para suporte ou dúvidas, entre em contato através dos canais oficiais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
