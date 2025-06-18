import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CircleX } from "lucide-react"; // Certifique-se de importar o ícone corretamente

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-white dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#02040d] dark:to-[#000000]">
      <div className="flex items-center space-x-4">
        <CircleX className="h-32 w-32 text-primary" /> {/* Ícone grande ao lado */}
        <h1 className="text-9xl font-bold text-primary">404</h1>
      </div>
      <div className="space-y-4 mt-8">
        <h2 className="text-2xl font-semibold text-black dark:text-white">Página não encontrada</h2>
        <p className="text-muted-foreground max-w-md text-black dark:text-gray-300">
          Desculpe, mas parece que o recurso que você está solicitando não existe. Por favor, tente novamente mais tarde ou volte para a página principal.
        </p>
        <Button onClick={() => navigate("/")} size="lg">
          Voltar para página inicial
        </Button>
      </div>
    </div>
  );
}