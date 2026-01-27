import { useState } from "react";
import {
  Crown,
  Info,
  Shield,
  ChevronDown,
  ChevronUp,
  Menu,
  Clock,
  Star,
  Users,
  CookingPot,
} from "lucide-react";
import React from "react";

const commandCategories = [
  {
    id: "info",
    name: "Informações",
    icon: <Info className="w-5 h-5" />,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    commands: [
      {
        name: "seuprefixo+avatar",
        description: ["Veja o avatar de um usuário.", "Exemplo: seuprefixo+avatar (@usuario/id)"]
      },
      {
        name: "seuprefixo+banner",
        description: ["Veja o banner de um usuário.", "Exemplo: seuprefixo+banner (@usuario/id)"]
      },
      {
        name: "seuprefixo+divorciar",
        description: ["Divorcie de uma pessoa.", "Exemplo: seuprefixo+divorciar (@usuario/id)"]
      },
      {
        name: "seuprefixo+embed",
        description: ["Faça uma embed selecionando o canal para ser postado.", "Exemplo: seuprefixo+embed (#canal/id)"]
      },
      {
        name: "seuprefixo+marry",
        description: ["Case-se com uma pessoa.", "Exemplo: seuprefixo+marry (@usuario/id)"]
      }
    ]
  },
  {
    id: "menu",
    name: "Menu",
    icon: <Menu className="w-5 h-5" />,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    commands: [
      {
        name: "seuprefixo+addperm",
        description: ["Adiciona a permissão para o usuário acessar o painel e demais funções.", "Exemplo: seuprefixo+addperm (@usuario/id)"]
      },
      {
        name: "seuprefixo+listperm",
        description: ["Lista os usuários que tem permissão ativa no bot."]
      },
      {
        name: "seuprefixo+menu",
        description: ["Abre o Painel de Menu"]
      },
      {
        name: "seuprefixo+removeperm",
        description: ["Remove a permissão para o usuário acessar o painel e demais funções.", "Exemplo: seuprefixo+removeperm (@usuario/id)"]
      }
    ]
  },
  {
    id: "moderation",
    name: "Moderação",
    icon: <Shield className="w-5 h-5" />,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    commands: [
      {
        name: "seuprefixo+addcargo",
        description: ["Adiciona cargo a um usuário.", "Exemplo: seuprefixo+addcargo (@cargo/id) (@usuario/id)"]
      },
      {
        name: "seuprefixo+addemoji",
        description: ["Adiciona Emojis em Massa ao Servidor", "Exemplo: seuprefixo+addemoji [emoji1, emoji2, emoji3]"]
      },
      {
        name: "seuprefixo+adms",
        description: ["Abre uma lista com todos os administradores do servidor"]
      },
      {
        name: "seuprefixo+adv",
        description: ["Aplica advertência.", "Exemplo: seuprefixo+adv (@usuario/id) [motivo]"]
      },
      {
        name: "seuprefixo+ban",
        description: ["Bane um membro do servidor.", "Exemplo: seuprefixo+ban (@usuario/id) [motivo]"]
      },
      {
        name: "seuprefixo+cargo",
        description: ["Edite um cargo Por botões", "Exemplo: seuprefixo+cargo (@cargo/id)"]
      },
      {
        name: "seuprefixo+clear",
        description: ["Limpe o chat interagido.", "Exemplo: seuprefixo+clear [quantidade]"]
      },
      {
        name: "seuprefixo+deletemoji",
        description: ["Deleta emojis em massa do servidor.", "Exemplo: seuprefixo+deletemoji [emoji1, emoji2, emoji3]"]
      },
      {
        name: "seuprefixo+groles",
        description: ["Adicione e Remove o cargo caso a proteção geral estiver ativado.", "Exemplo: seuprefixo+groles (@usuario/id)"]
      },
      {
        name: "seuprefixo+kick",
        description: ["Expulsa um membro do servidor.", "Exemplo: seuprefixo+kick (@usuario/id) [motivo]"]
      },
      {
        name: "seuprefixo+lock",
        description: ["Tranca um chat interagido."]
      },
      {
        name: "seuprefixo+membros",
        description: ["Confira a Lista de todos os Usuários com o cargo selecionado", "Exemplo: seuprefixo+membros (@cargo/id)"]
      },
      {
        name: "seuprefixo+mute",
        description: ["Muta um membro.", "Exemplo: seuprefixo+mute <chat/call/all> (@usuario/id) <tempo> [motivo]"]
      },
      {
        name: "seuprefixo+radv",
        description: ["Remove advertência.", "Exemplo: seuprefixo+radv (@usuario/id)"]
      },
      {
        name: "seuprefixo+registrar",
        description: ["Registrar o usuário usando sistema de registro.", "Exemplo: seuprefixo+registrar (@usuario/id)"]
      },
      {
        name: "seuprefixo+removercargo",
        description: ["Remove cargo de um usuário.", "Exemplo: seuprefixo+removercargo (@usuario/id)"]
      },
      {
        name: "seuprefixo+unban",
        description: ["Desbane um usuário.", "Exemplo: seuprefixo+unban (@usuario/id)"]
      },
      {
        name: "seuprefixo+unmute",
        description: ["Desmuta um usuário.", "Exemplo: seuprefixo+unmute (@usuario/id)"]
      }
    ]
  },
  {
    id: "panela",
    name: "Panela",
    icon: <CookingPot className="w-5 h-5" />,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    commands: [
      {
        name: "seuprefixo+panelaconfig",
        description: ["Abre o painel para configurar os cargos para o comando panela"]
      },
      {
        name: "seuprefixo+panela",
        description: ["Use o comando de panela para dar cargos configurados."]
      }
    ]
  },
  {
    id: "first-lady",
    name: "Primeira Dama",
    icon: <Crown className="w-5 h-5" />,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    commands: [
      {
        name: "seuprefixo+pd",
        description: ["Abre a tabela mostrando suas damas"]
      }
    ]
  },
  {
    id: "call-time",
    name: "Tempo em Call",
    icon: <Clock className="w-5 h-5" />,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    commands: [
      {
        name: "seuprefixo+ptempo",
        description: ["Adiciona e remove tempo em call de um usuário", "Exemplo: seuprefixo+ptempo (@usuario/id)"]
      },
      {
        name: "seuprefixo+tempocall",
        description: ["Veja seu tempo em call"]
      }
    ]
  },
  {
    id: "vip",
    name: "VIP",
    icon: <Star className="w-5 h-5" />,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    commands: [
      {
        name: "seuprefixo+addvip",
        description: ["Adiciona VIP a um usuário.", "Exemplo: seuprefixo+addvip (@usuario/id)"]
      },
      {
        name: "seuprefixo+removevip",
        description: ["Remove VIP de um usuário.", "Exemplo: seuprefixo+removevip (@usuario/id)"]
      },
      {
        name: "seuprefixo+setvip",
        description: ["Configura VIP para um usuário.", "Exemplo: seuprefixo+setvip (@usuario/id)"]
      },
      {
        name: "seuprefixo+vip",
        description: ["Abre a configuração do seu VIP"]
      }
    ]
  },
  {
    id: "vip-family",
    name: "VIP Família",
    icon: <Users className="w-5 h-5" />,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    commands: [
      {
        name: "seuprefixo+addvipf",
        description: ["Adiciona a TAG VIP Família a um membro", "Exemplo: seuprefixo+addvipf (@usuario/id)"]
      },
      {
        name: "seuprefixo+removevipf",
        description: ["Remove a TAG VIP Família de um membro", "Exemplo: seuprefixo+removevipf (@usuario/id)"]
      },
      {
        name: "seuprefixo+setvipf",
        description: ["Seta o VIP Família a um membro", "Exemplo: seuprefixo+setvipf (@usuario/id)"]
      },
      {
        name: "seuprefixo+vipf",
        description: ["Abre a configuração do VIP Família"]
      }
    ]
  }
];

export function Commands() {
  const [activeCategory, setActiveCategory] = useState("info");
  const [isExpanded, setIsExpanded] = useState(false);

  const activeCategoryData = commandCategories.find(cat => cat.id === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-[#0a0a0a] dark:to-[#000000]">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-4">
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
            Lista De Comandos Disponível
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Deseja conhecer todos os comandos disponóvel e como utilizá-los? Você está no lugar correto, aqui você encontra todos que possa utilizar!
          </p>
        </div>

        {/* Seção principal */}
        <div className="max-w-7xl mx-auto">
          {/* Categorias - Desktop */}
          <div className="hidden md:flex justify-center gap-4 mb-8">
            {commandCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setIsExpanded(false); // Resetar expansão ao mudar categoria
                }}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300
                  ${activeCategory === category.id
                    ? `${category.bgColor} ${category.color} border-2 ${category.color.replace('text', 'border')}`
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }
                `}
              >
                {category.icon}
                <span className="font-semibold">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Categorias - Mobile (Horizontal Scroll) */}
          <div className="md:hidden mb-6">
            <div className="flex space-x-3 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-hide">
              {commandCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setIsExpanded(false); // Resetar expansão ao mudar categoria
                  }}
                  className={`
                    flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                    ${activeCategory === category.id
                      ? `${category.bgColor} ${category.color} border ${category.color.replace('text', 'border')}`
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                    }
                  `}
                >
                  {category.icon}
                  <span className="font-medium whitespace-nowrap">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Comandos da Categoria Ativa */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg ${activeCategoryData?.bgColor}`}>
                <div className={activeCategoryData?.color}>
                  {activeCategoryData?.icon}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white">
                  {activeCategoryData?.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {activeCategoryData?.commands.length} comandos disponíveis
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(isExpanded ? activeCategoryData?.commands : activeCategoryData?.commands?.slice(0, 8))?.map((command, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-600 dark:text-blue-400">
                      {command.name}
                    </code>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {index + 1}
                    </span>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 space-y-1">
                    {Array.isArray(command.description)
                      ? command.description.map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < command.description.length - 1 && <br />}
                        </React.Fragment>
                      ))
                      : command.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Mostrar mais/menos - AGORA FUNCIONA EM TODOS OS DISPOSITIVOS */}
            {activeCategoryData && activeCategoryData.commands.length > 8 && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      Ver menos comandos
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      Ver todos os {activeCategoryData.commands.length} comandos
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Aviso sobre comando expandido */}
          {isExpanded && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Mostrando todos os {activeCategoryData?.commands.length} comandos da categoria {activeCategoryData?.name}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}