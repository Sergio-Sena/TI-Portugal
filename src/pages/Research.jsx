import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Building, 
  Shield, 
  Download,
  Filter,
  ChevronDown,
  CheckCircle
} from "lucide-react";

// Componente de esqueleto para carregamento
const Skeleton = ({ className = "" }) => (
  <div className={`animate-pulse bg-secondary rounded ${className}`}></div>
);

export default function Research() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Dados de pesquisa
  const researchData = [
    {
      id: 1,
      title: "Análise de Diversidade Etária em TI",
      category: "age_discrimination",
      source: "Observatório do Emprego Digital Portugal",
      year: 2024,
      key_findings: [
        "32% dos profissionais de TI em Portugal têm mais de 40 anos",
        "Empresas com políticas de diversidade etária reportam 27% maior retenção de talentos",
        "Profissionais 40+ têm taxa de permanência no emprego 2.3x maior"
      ],
      statistics: {
        percentage: 32,
        sample_size: 1250,
        metric: "Profissionais TI 40+"
      },
      relevance_score: 5
    },
    {
      id: 2,
      title: "Tendências Salariais por Faixa Etária",
      category: "salary_data",
      source: "Portugal Tech Alliance",
      year: 2024,
      key_findings: [
        "Profissionais de TI 40+ recebem em média 25% mais que profissionais júnior",
        "Gap salarial entre faixas etárias diminuiu 5% desde 2022",
        "Especialistas em cloud computing com mais de 45 anos têm os salários mais altos"
      ],
      statistics: {
        percentage: 25,
        sample_size: 850,
        metric: "Prêmio salarial para profissionais seniores"
      },
      relevance_score: 4
    },
    {
      id: 3,
      title: "Crescimento do Mercado Tech Português",
      category: "market_trends",
      source: "AICEP Portugal Global",
      year: 2025,
      key_findings: [
        "Crescimento de 18% ao ano no setor de TI",
        "Lisboa, Porto e Braga são os principais hubs tecnológicos",
        "Aumento de 34% em investimento estrangeiro no setor tech desde 2023"
      ],
      statistics: {
        percentage: 18,
        sample_size: null,
        metric: "Crescimento anual do setor"
      },
      relevance_score: 5
    },
    {
      id: 4,
      title: "Políticas de Inclusão em Empresas Tech",
      category: "company_policies",
      source: "Associação Portuguesa para a Diversidade e Inclusão",
      year: 2024,
      key_findings: [
        "78% das empresas tech portuguesas têm políticas formais de diversidade etária",
        "Programas de mentoria reversa implementados em 42% das empresas",
        "Empresas com equipes multigeracionais reportam 31% mais inovação"
      ],
      statistics: {
        percentage: 78,
        sample_size: 320,
        metric: "Empresas com políticas de diversidade"
      },
      relevance_score: 4
    },
    {
      id: 5,
      title: "Proteções Legais contra Discriminação Etária",
      category: "legal_framework",
      source: "Ministério do Trabalho, Solidariedade e Segurança Social",
      year: 2024,
      key_findings: [
        "Nova legislação de 2024 fortaleceu proteções contra discriminação etária",
        "Multas por discriminação etária aumentaram 200% desde 2022",
        "Programa governamental de incentivos para contratação de profissionais 45+"
      ],
      statistics: {
        percentage: null,
        sample_size: null,
        metric: "Proteção legal"
      },
      relevance_score: 5
    },
    {
      id: 6,
      title: "Impacto da Experiência em Projetos de TI",
      category: "market_trends",
      source: "Portugal Digital Skills Observatory",
      year: 2024,
      key_findings: [
        "Projetos liderados por profissionais 40+ têm 28% menos falhas",
        "Equipes multigeracionais completam projetos 23% mais rápido",
        "Profissionais experientes reduzem em 35% o tempo de resolução de problemas complexos"
      ],
      statistics: {
        percentage: 28,
        sample_size: 450,
        metric: "Redução em falhas de projeto"
      },
      relevance_score: 4
    }
  ];

  // Filtrar por categoria e termo de pesquisa
  const filteredData = researchData.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = searchTerm === "" || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.key_findings.some(finding => finding.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Categorias para filtro
  const categories = [
    { id: "all", name: "Todas Categorias" },
    { id: "age_discrimination", name: "Discriminação Etária" },
    { id: "market_trends", name: "Tendências de Mercado" },
    { id: "salary_data", name: "Dados Salariais" },
    { id: "company_policies", name: "Políticas Empresariais" },
    { id: "legal_framework", name: "Estrutura Legal" }
  ];

  // Ícones por categoria
  const categoryIcons = {
    age_discrimination: Users,
    market_trends: TrendingUp,
    salary_data: BarChart3,
    company_policies: Building,
    legal_framework: Shield
  };

  // Cores por categoria
  const categoryColors = {
    age_discrimination: "bg-blue-100 text-blue-800",
    market_trends: "bg-emerald-100 text-emerald-800",
    salary_data: "bg-purple-100 text-purple-800",
    company_policies: "bg-orange-100 text-orange-800",
    legal_framework: "bg-pink-100 text-pink-800"
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Pesquisa sobre TI em Portugal</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Dados e análises sobre o mercado de TI em Portugal, com foco em oportunidades para profissionais experientes.
        </p>
      </div>

      {/* Filtros e Pesquisa */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === category.id 
                  ? 'bg-primary text-white' 
                  : 'bg-white/80 backdrop-blur-sm hover:bg-secondary'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="w-full px-4 py-2 rounded-md border border-border bg-white/80 backdrop-blur-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Filter className="absolute right-3 top-2.5 w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      {/* Resultados da Pesquisa */}
      {loading ? (
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map(i => (
            <Card key={i} className="card-hover">
              <CardHeader>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredData.map(item => {
              const Icon = categoryIcons[item.category] || BarChart3;
              
              return (
                <Card key={item.id} className="card-hover">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className={`mb-2 ${categoryColors[item.category]}`}>
                          <Icon className="w-3 h-3 mr-1" />
                          {categories.find(c => c.id === item.category)?.name}
                        </Badge>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        {Array(item.relevance_score).fill(0).map((_, i) => (
                          <CheckCircle key={i} className="w-4 h-4 text-primary" />
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center justify-between">
                      <span>{item.source}</span>
                      <span>{item.year}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium mb-2">Principais Descobertas:</h4>
                    <ul className="space-y-2">
                      {item.key_findings.map((finding, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {finding}
                        </li>
                      ))}
                    </ul>
                    
                    {item.statistics.metric && (
                      <div className="mt-4 p-3 bg-secondary/50 rounded-md">
                        <div className="text-sm font-medium">{item.statistics.metric}</div>
                        <div className="text-2xl font-bold text-primary">
                          {item.statistics.percentage !== null ? `${item.statistics.percentage}%` : "N/A"}
                        </div>
                        {item.statistics.sample_size && (
                          <div className="text-xs text-muted-foreground">
                            Amostra: {item.statistics.sample_size} participantes
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">Nenhum resultado encontrado para sua pesquisa.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchTerm("");
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          )}
        </>
      )}

      {/* Seção de Download */}
      <Card className="bg-gradient-to-r from-primary to-accent border-0 shadow-md text-white">
        <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Relatório Completo de Pesquisa</h2>
            <p className="opacity-90">
              Baixe nosso relatório completo com todas as estatísticas, metodologias e análises detalhadas.
            </p>
          </div>
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-slate-50 whitespace-nowrap">
            <Download className="mr-2 w-5 h-5" />
            Baixar Relatório
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}