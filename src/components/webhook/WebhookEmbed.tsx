import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmbedData, EmbedField } from "@/types/webhook";

interface WebhookEmbedProps {
  embed: EmbedData;
  onUpdate: (embed: EmbedData) => void;
  onRemove: () => void;
  requiredDescription?: boolean;
}

export default function WebhookEmbed({ embed, onUpdate, onRemove, requiredDescription }: WebhookEmbedProps) {
  const addField = () => {
    onUpdate({
      ...embed,
      fields: [
        ...(embed.fields || []),
        { name: "", value: "", inline: false },
      ],
    });
  };

  const removeField = (index: number) => {
    onUpdate({
      ...embed,
      fields: embed.fields?.filter((_, i) => i !== index) || [],
    });
  };

  const updateField = (index: number, field: EmbedField) => {
    onUpdate({
      ...embed,
      fields: embed.fields?.map((f, i) => (i === index ? field : f)) || [],
    });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Embed Editor</CardTitle>
        <Button variant="ghost" size="sm" onClick={onRemove}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2 relative">
          <Label>Title</Label>
          <span className="absolute right-2 top-0 text-xs text-muted-foreground select-none">
            {embed.title?.length || 0} / 256
          </span>
          <Input
            value={embed.title}
            onChange={(e) => {
              if (e.target.value.length <= 256) {
                onUpdate({ ...embed, title: e.target.value });
              }
            }}
            placeholder="Embed title"
            maxLength={256}
          />
        </div>
        <div className="space-y-2 relative">
          <Label>Description {requiredDescription && <span className="text-red-500">*</span>}</Label>
          <span className="absolute right-2 top-0 text-xs text-muted-foreground select-none">
            {embed.description?.length || 0} / 4096
          </span>
          <textarea
            value={embed.description}
            onChange={(e) => {
              if (e.target.value.length <= 4096) {
                onUpdate({ ...embed, description: e.target.value });
              }
            }}
            placeholder="Embed description"
            style={{ minHeight: '120px', resize: 'none', overflowY: 'scroll' }}
            maxLength={4096}
            rows={6}
            required={!!requiredDescription}
            className="scrollbar-custom flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="space-y-2">
          <Label>Color</Label>
          <div className="flex gap-2">
            <Input
              type="color"
              value={`#${embed.color?.toString(16).padStart(6, '0')}`}
              onChange={(e) => onUpdate({ ...embed, color: parseInt(e.target.value.slice(1), 16) })}
              className="w-12 p-1 h-9"
            />
            <Input
              value={`#${embed.color?.toString(16).padStart(6, '0')}`}
              onChange={(e) => {
                const color = parseInt(e.target.value.replace('#', ''), 16);
                if (!isNaN(color)) {
                  onUpdate({ ...embed, color });
                }
              }}
              placeholder="#000000"
              className="font-mono"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Thumbnail</Label>
          <Input
            value={embed.thumbnail?.url || ""}
            onChange={e => onUpdate({ ...embed, thumbnail: { url: e.target.value } })}
            placeholder="URL da thumbnail"
          />
        </div>
        <div className="space-y-2">
          <Label>Imagem</Label>
          <Input
            value={embed.image?.url || ""}
            onChange={e => onUpdate({ ...embed, image: { url: e.target.value } })}
            placeholder="URL da imagem"
          />
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label>Fields</Label>
            <Button variant="outline" size="sm" onClick={addField}>
              Add Field
            </Button>
          </div>
          {embed.fields?.map((field, index) => (
            <Card key={index}>
              <CardContent className="pt-4 space-y-2">
                <div className="flex justify-between gap-2">
                  <Input
                    value={field.name}
                    onChange={(e) =>
                      updateField(index, { ...field, name: e.target.value })
                    }
                    placeholder="Field name"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeField(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <Textarea
                  value={field.value}
                  onChange={(e) =>
                    updateField(index, { ...field, value: e.target.value })
                  }
                  placeholder="Field value"
                />
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`inline-${index}`}
                    checked={field.inline}
                    onChange={(e) =>
                      updateField(index, { ...field, inline: e.target.checked })
                    }
                  />
                  <Label htmlFor={`inline-${index}`}>Inline field</Label>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-2 relative">
          <Label>Footer</Label>
          <span className="absolute right-2 top-0 text-xs text-muted-foreground select-none">
            {embed.footer?.text?.length || 0} / 2048
          </span>
          <Input
            value={embed.footer?.text}
            onChange={(e) => {
              if (e.target.value.length <= 2048) {
                onUpdate({ ...embed, footer: { ...embed.footer, text: e.target.value } });
              }
            }}
            placeholder="Footer text"
            maxLength={2048}
          />
          <Input
            value={embed.footer?.icon_url || ""}
            onChange={(e) => onUpdate({
              ...embed,
              footer: {
                text: embed.footer?.text || "",
                icon_url: e.target.value
              }
            })}
            placeholder="URL do ícone do footer (opcional)"
            className="mt-1"
          />
        </div>
      </CardContent>
    </Card>
  );
}