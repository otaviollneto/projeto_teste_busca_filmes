import { useNavigate } from "react-router-dom";

export function NavButton({ text, link }: { text?: string; link?: string }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(link || "/favoritos")}
      style={{ marginBottom: "1rem", float: "right" }}
    >
      {text || "Favoritos"}
    </button>
  );
}
