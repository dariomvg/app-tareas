import FunctionsProvider from "./context/FunctionsContext";
import ThemeProvider from "./context/ThemeContext";
import { SeccionPrincipal } from "./components/otras-secciones/SeccionPrincipal";
import "./App.css";

function App() {
  return (
    <FunctionsProvider>
      <ThemeProvider>
        <SeccionPrincipal />
      </ThemeProvider>
    </FunctionsProvider>
  );
}

export default App;
