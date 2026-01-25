export interface EmbedField {
  name: string;
  value: string;
  inline?: boolean;
}

export interface EmbedFooter {
  text: string;
  icon_url?: string;
}

export interface EmbedImage {
  url: string;
}

export interface EmbedData {
  title?: string;
  description?: string;
  color?: number;
  fields?: EmbedField[];
  footer?: EmbedFooter;
  timestamp?: string;
  thumbnail?: EmbedImage;
  image?: EmbedImage;
}

export interface WebhookData {
  content: string;
  username: string;
  avatar_url: string;
  embeds: EmbedData[];
}