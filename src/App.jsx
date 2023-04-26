import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import { Header } from "./layout";
import * as theme from "./theme";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
