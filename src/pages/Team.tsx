import React from "react";
import { Briefcase, Headphones, Code } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  photo: string; // URL da foto do membro
  icon: React.ReactNode; // Ícone do Lucide
}

const teamMembers: TeamMember[] = [
  {
    name: "Neskz",
    role: "CEO",
    description: "Responsável pela visão estratégica e liderança da empresa.",
    photo: "https://images-ext-1.discordapp.net/external/Dj0vQ0eFFIVXifPGBwBPptMsXr78mf0MFYbV8uxK6Rg/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/983506506118996020/3ba6e1adc09fd35e99ca490b82e3e7a0.webp?format=webp", // Substitua pela URL da foto real
    icon: <Briefcase className="w-5 h-5 text-blue-600" />,
  },
  {
    name: "Foxyz",
    role: "CEO & Desenvolvedor",
    description: "Criador dos bots e responsável pelas atualizações.",
    photo: "https://media.discordapp.net/attachments/1210729568659308555/1353980836747280425/ezgif-2dad0a49048173.gif?ex=6850642b&is=684f12ab&hm=e5b6b82e902323db1025326d836103f8d994ed54c230b1e3a2ca87c4754c3346&=", // Substitua pela URL da foto real
    icon: <Code className="w-5 h-5 text-purple-600" />,
  },
  {
    name: "Andressa",
    role: "Suporte",
    description: "Garantindo que os clientes tenham assistência 24/7.",
    photo: "https://images-ext-1.discordapp.net/external/NEg8qqGU756F6cc323tbDNLi2AxBrwV3NSSRrdLL9VE/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/737666822924402700/414a125ad6ce62bb12613a5b624df44b.webp?format=webp", // Substitua pela URL da foto real
    icon: <Headphones className="w-5 h-5 text-green-600" />,
  }, 
  /*{
    name: "Ana Costa",
    role: "Desenvolvedora",
    description: "Especialista em integração e personalização de bots.",
    photo: "https://i.pinimg.com/originals/1a/ee/21/1aee21d88e1b06fdfa502502e204d489.gif", // Substitua pela URL da foto real
    icon: <Code className="w-5 h-5 text-purple-600" />,
  },*/
];

export function Team() {
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
                  src={member.photo}
                  alt={member.name}
                  className="w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-600"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-black dark:text-white">{member.name}</h3>
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