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
            <div className="relative min-h-[64px]">
              {embed.thumbnail?.url && (
                <img
                  src={embed.thumbnail.url}
                  alt="Thumbnail"
                  className="w-16 h-16 rounded object-cover border absolute right-0 top-0"
                  style={{ maxWidth: 64, maxHeight: 64 }}
                />
              )}
              <div className={embed.thumbnail?.url ? "pr-20" : ""}>
                {embed.title && (
                  <div className="font-semibold text-lg mb-2">{embed.title}</div>
                )}
                {embed.description && (
                  <div className="whitespace-pre-wrap break-words mb-4">{embed.description}</div>
                )}
              </div>
            </div>

            {embed.image?.url && (
              <img
                src={embed.image.url}
                alt="Embed"
                className="w-full max-h-64 object-contain rounded mt-2 border"
                style={{ maxHeight: 256 }}
              />
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

            {(embed.footer?.text || embed.footer?.icon_url) && (
              <div className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
                {embed.footer?.icon_url && (
                  <img
                    src={embed.footer.icon_url}
                    alt="Footer Icon"
                    className="w-5 h-5 rounded-full object-cover border"
                  />
                )}
                {embed.footer?.text}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}