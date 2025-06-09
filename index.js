// index.js
import { createServer } from 'http';
import handler from 'serve-handler';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const server = createServer((req, res) =>
  handler(req, res, {
    public: join(__dirname, 'dist'),
    cleanUrls: true, // remove .html da URL
    rewrites: [{ source: "**", destination: "/index.html" }], // suporte SPA (React Router etc.)
  })
);

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`✅ Servindo em http://localhost:${port}`);
});
