import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoritesPage from "./components/pages/FavoritesPage";
import LiveSearchPage from "./components/pages/LiveSearchPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LiveSearchPage />} />
        <Route path="/favoritos" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
