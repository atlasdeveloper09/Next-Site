import { WebhookData } from "@/types/webhook";

interface WebhookPreviewProps {
  data: WebhookData;
}

export default function WebhookPreview({ data }: WebhookPreviewProps) {
  return (
    <div className="space-y-4 font-sans">
      {data.username && (
        <div className="flex items-center gap-2">
          {data.avatar_url && (
            <img
              src={data.avatar_url}
              alt="Webhook Avatar"
              className="w-8 h-8 rounded-full"
            />
          )}
          <span className="font-semibold">{data.username}</span>
        </div>
      )}

      {data.content && (
        <div className="whitespace-pre-wrap break-words">{data.content}</div>
      )}

      {data.embeds.map((embed, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden"
          style={{
            borderLeft: `4px solid #${embed.color?.toString(16).padStart(6, '0')}`,
          }}
        >
          <div className="p-4 bg-accent/50">
            {embed.title && (
              <div className="font-semibold text-lg mb-2">{embed.title}</div>
            )}
            {embed.description && (
              <div className="whitespace-pre-wrap mb-4">{embed.description}</div>
            )}

            {embed.fields && embed.fields.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {embed.fields.map((field, fieldIndex) => (
                  <div
                    key={fieldIndex}
                    className={field.inline ? "col-span-1" : "col-span-full"}
                  >
                    <div className="font-semibold">{field.name}</div>
                    <div>{field.value}</div>
                  </div>
                ))}
              </div>
            )}

            {embed.footer?.text && (
              <div className="text-sm text-muted-foreground">
                {embed.footer.text}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}