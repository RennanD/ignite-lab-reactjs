// import { Container } from './styles';

import { Route, Routes } from 'react-router-dom';
import { Event } from '../pages/Event';

export function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
