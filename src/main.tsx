import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./styles/global.ts";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
}
