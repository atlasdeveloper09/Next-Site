import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
//import { Rules } from './pages/Rules';
import { Webhook } from './pages/Webhook';
import { Team } from './pages/Team'; // Importar a página de equipe quando estiver pronta
import { NotFound } from './pages/NotFound';
import { Commands } from './pages/Commands';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="webhook" element={<Webhook />} />
        <Route path="commands" element={<Commands />} />
        <Route path="team" element={<Team />} /> 
        {/* Rota para capturar páginas não encontradas<Route path="rules" element={<Rules />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}