import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./layout";
import { Footer } from "./layout";
import Home from "./pages/Home";
import Makeat from "./pages/Makeat";
import Customer from "./pages/Customer";
import Franchise from "./pages/Franchise";
import Inquiry from "./pages/FranchiseInquiry";
import LeSik from "./pages/LeSik";
import * as theme from "./theme";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {!location.pathname === "/makeat" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/lesik" element={<LeSik />} />
        <Route path="/makeat" element={<Makeat />} />
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
      {!location.pathname === "/makeat" && <Footer />}
    </ThemeProvider>
  );
}

export default App;
