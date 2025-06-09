import { useState } from "react";
import { Plus, Trash2, Send, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoadingScreen } from "@/components/ui/loading-screen";
import WebhookEmbed from "@/components/webhook/WebhookEmbed";
import WebhookPreview from "@/components/webhook/WebhookPreview";
import { WebhookData, EmbedData } from "@/types/webhook";
import { useToast } from "@/components/ui/use-toast";

export function Webhook() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("");
  const [webhookData, setWebhookData] = useState<WebhookData>({
    content: "",
    username: "",
    avatar_url: "",
    embeds: [],
  });
  const [copied, setCopied] = useState(false);

  const addEmbed = () => {
    setWebhookData(prev => ({
      ...prev,
      embeds: [
        ...prev.embeds,
        {
          title: "",
          description: "",
          color: 0x5865F2,
          fields: [],
          footer: { text: "" },
          timestamp: new Date().toISOString(),
        },
      ],
    }));
  };

  const removeEmbed = (index: number) => {
    setWebhookData(prev => ({
      ...prev,
      embeds: prev.embeds.filter((_, i) => i !== index),
    }));
  };

  const updateEmbed = (index: number, embed: EmbedData) => {
    setWebhookData(prev => ({
      ...prev,
      embeds: prev.embeds.map((e, i) => (i === index ? embed : e)),
    }));
  };

  const copyWebhookData = () => {
    navigator.clipboard.writeText(JSON.stringify(webhookData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: "Copiado!",
      description: "JSON da webhook copiados para a área de transferência",
    });
  };

  const validateWebhookData = () => {
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Por favor, insira uma URL de webhook",
        variant: "destructive",
      });
      return false;
    }

    if (!webhookData.content && webhookData.embeds.length === 0) {
      toast({
        title: "Error",
        description: "Por favor, adicione conteúdo ou pelo menos uma incorporação",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const sendWebhook = async () => {
    if (!validateWebhookData()) return;

    setIsLoading(true);
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookData),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || "Falha ao enviar webhook");
      }

      toast({
        title: "Sucesso",
        description: "Webhook enviado com sucesso!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Falha ao enviar webhook",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearForm = () => {
    setWebhookData({
      content: "",
      username: "",
      avatar_url: "",
      embeds: [],
    });
    toast({
      title: "Concluído",
      description: "Todos os campos foram redefinidos",
    });
  };

  return (
    <>
      <div className="bg-white dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#02040d] dark:to-[#000000]">
        {isLoading && <LoadingScreen />}
        <div className="container mx-auto px-4 py-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Criação de Webhook</h1>
            <p className="text-muted-foreground">
              Crie e envie webhooks personalizados do Discord com incorporações avançadas e visualização
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Configuração da Webhook</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="webhook-url">Webhook URL</Label>
                    <Input
                      id="webhook-url"
                      value={webhookUrl}
                      onChange={(e) => setWebhookUrl(e.target.value)}
                      placeholder="https://discord.com/api/webhooks/..."
                      className="font-mono text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={webhookData.username}
                      onChange={(e) =>
                        setWebhookData(prev => ({ ...prev, username: e.target.value }))
                      }
                      placeholder="@NextStudios"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="avatar">Avatar URL</Label>
                    <Input
                      id="avatar"
                      value={webhookData.avatar_url}
                      onChange={(e) =>
                        setWebhookData(prev => ({ ...prev, avatar_url: e.target.value }))
                      }
                      placeholder="https://example.com/avatar.png"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content">Mensagem</Label>
                    <Textarea
                      id="content"
                      value={webhookData.content}
                      onChange={(e) =>
                        setWebhookData(prev => ({ ...prev, content: e.target.value }))
                      }
                      placeholder="Conteúdo da mensagem..."
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Embeds</h3>
                  <Button onClick={addEmbed} size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Embed
                  </Button>
                </div>

                {webhookData.embeds.map((embed, index) => (
                  <WebhookEmbed
                    key={index}
                    embed={embed}
                    onUpdate={(updated) => updateEmbed(index, updated)}
                    onRemove={() => removeEmbed(index)}
                  />
                ))}
              </div>

              <div className="flex gap-4">
                <Button onClick={sendWebhook} className="flex-1" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Webhook
                </Button>
                <Button onClick={clearForm} variant="outline" size="lg">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Limpar Webhook
                </Button>
              </div>
            </div>

            <div className="lg:sticky lg:top-4 space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle>Preview</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyWebhookData}
                    className="flex items-center gap-2"
                  >
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    {copied ? "Copiado!" : "Copiar JSON"}
                  </Button>
                </CardHeader>
                <CardContent>
                  <WebhookPreview data={webhookData} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}