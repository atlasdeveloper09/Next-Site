import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-white dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#02040d] dark:to-[#000000]">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <div className="space-y-4 mt-8">
        <h2 className="text-2xl font-semibold">Página não encontrada</h2>
        <p className="text-muted-foreground max-w-md">
          Desculpe, mas parece que esse recurso que você está solicitando não exista, por favor tente novamente mais tarde ou volte para a página principal
        </p>
        <Button onClick={() => navigate("/")} size="lg">
          Voltar para página inicial
        </Button>
      </div>
    </div>
  );
}