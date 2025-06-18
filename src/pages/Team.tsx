import React, { useEffect, useState } from "react";
import { Briefcase, Headphones, Code } from "lucide-react";

interface TeamMember {
  id: string; // ID do usuário no Discord
  role: string;
  description: string;
  icon: React.ReactNode;
}

const teamMembers: TeamMember[] = [
  {
    id: "983506506118996020", // ID do Neskz
    role: "CEO",
    description: "Responsável pela visão estratégica e liderança da empresa.",
    icon: <Briefcase className="w-5 h-5 text-blue-600" />,
  },
  {
    id: "1304851017225211935", // ID do Foxyz
    role: "CEO & Desenvolvedor",
    description: "Criador dos bots e responsável pelas atualizações.",
    icon: <Code className="w-5 h-5 text-purple-600" />,
  },
  {
    id: "1279669757901144074", 
    role: "Desenvolvedor & Suporte",
    description: "Especialista em bot e ajudando a atender melhor como usar nossos bots.",
    icon: <Code className="w-5 h-5 text-purple-600" />,
  },
  {
    id: "737666822924402700", 
    role: "Suporte",
    description: "Garantindo que os clientes tenham assistência 24/7.",
    icon: <Headphones className="w-5 h-5 text-green-600" />,
  },
  {
    id: "539990001828757504", 
    role: "Suporte",
    description: "Garantindo que os clientes tenham assistência 24/7.",
    icon: <Headphones className="w-5 h-5 text-green-600" />,
  },
  {
    id: "575162334331273231",
    role: "Suporte",
    description: "Garantindo que os clientes tenham assistência 24/7.",
    icon: <Headphones className="w-5 h-5 text-green-600" />,
  },
];

export function Team() {
  const [userData, setUserData] = useState<Record<string, { name: string; avatar: string }>>({});
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento


  useEffect(() => {
    const fetchUserData = async () => {
      const token = "MTI5NzEyMzAyMzc5MDQwNzczMA.G7QSWG.GmxH4_uM6mQsDssekOnQpuKlpDOqyKoh02pVls"; // Substitua pelo token do bot
      const fetchedData: Record<string, { name: string; avatar: string }> = {};

      for (const member of teamMembers) {
        try {
          const response = await fetch(`https://discord.com/api/v10/users/${member.id}`, {
            headers: {
              Authorization: `${token}`,
            },
          });
          if (response.ok) {
            const data = await response.json();
            const avatarFormat = data.avatar?.startsWith("a_") ? "gif" : "png"; // Verifica se o avatar é animado
            fetchedData[member.id] = {
              name: data.global_name || data.username,
              avatar: data.avatar
                ? `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.${avatarFormat}`
                : "https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg", // Avatar padrão
            };
          }
        } catch (error) {
          console.error(`Erro ao buscar dados do usuário ${member.id}:`, error);
        }
      }

      setUserData(fetchedData);
      setIsLoading(false); // Define como carregado após buscar os dados
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    // Tela de carregamento ocupando toda a página
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-[#131315]">
        <img
          src="https://i.gifer.com/origin/4d/4dc11d17f5292fd463a60aa2bbb41f6a_w200.gif" // Substitua pelo caminho correto do GIF
          alt="Carregando..."
          className="w-16 h-16 mb-4"
        />
        <h1 className="text-2xl font-bold text-black dark:text-white">Carregando informações...</h1>
        <p className="text-gray-500 dark:text-gray-400">Por favor, aguarde enquanto carregamos os dados da equipe.</p>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#02040d] dark:to-[#000000]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">Conheça nossa equipe</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-black dark:text-gray-300">
            Nossa equipe dedicada está aqui para garantir que você tenha a melhor experiência possível.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-6 rounded-lg border bg-gray-100 dark:bg-[#131315]">
              <div className="flex items-center mb-4">
                <img
                  src={userData[member.id]?.avatar || "https://via.placeholder.com/150"}
                  alt={userData[member.id]?.name || "Avatar"}
                  className="w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-600"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {userData[member.id]?.name || "Carregando..."}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground text-black dark:text-gray-300">
                    {member.icon}
                    <span className="ml-2">{member.role}</span>
                  </div>
                </div>
              </div>
              <p className="text-black dark:text-gray-300">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}