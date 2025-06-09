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
}

export default function WebhookEmbed({ embed, onUpdate, onRemove }: WebhookEmbedProps) {
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
        <div className="space-y-2">
          <Label>Title</Label>
          <Input
            value={embed.title}
            onChange={(e) => onUpdate({ ...embed, title: e.target.value })}
            placeholder="Embed title"
          />
        </div>
        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea
            value={embed.description}
            onChange={(e) => onUpdate({ ...embed, description: e.target.value })}
            placeholder="Embed description"
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

        <div className="space-y-2">
          <Label>Footer</Label>
          <Input
            value={embed.footer?.text}
            onChange={(e) =>
              onUpdate({ ...embed, footer: { text: e.target.value } })
            }
            placeholder="Footer text"
          />
        </div>
      </CardContent>
    </Card>
  );
}