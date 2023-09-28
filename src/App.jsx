import "./App.css";
import { SeccionPrincipal } from "./components/otras-secciones/SeccionPrincipal";
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <SeccionPrincipal />
    </ThemeProvider>
  );
}

export default App;
