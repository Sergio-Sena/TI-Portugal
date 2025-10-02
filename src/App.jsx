import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { initializeTheme } from "./utils";

// Importação preguiçosa das páginas para melhor performance
const Home = React.lazy(() => import("./pages/Home"));
const Research = React.lazy(() => import("./pages/Research"));
const Migration = React.lazy(() => import("./pages/Migration"));
const Portugal = React.lazy(() => import("./pages/Portugal"));
const Resources = React.lazy(() => import("./pages/Resources"));

// Componente de fallback durante o carregamento
const PageLoading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  useEffect(() => {
    // Inicializa o tema baseado na preferência do usuário
    initializeTheme();
  }, []);

  return (
    <Router>
      <Layout>
        <React.Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/migration" element={<Migration />} />
            <Route path="/portugal" element={<Portugal />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </React.Suspense>
      </Layout>
    </Router>
  );
}

export default App;