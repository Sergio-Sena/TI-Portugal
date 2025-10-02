import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { InvokeLLM } from "../integrations/Core";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  MapPin, 
  Users, 
  Briefcase, 
  Globe,
  CheckCircle,
  ExternalLink
} from "lucide-react";

// Design Pattern: Skeleton Component
const Skeleton = ({ className = "" }) => (
  <div className={`animate-pulse bg-secondary rounded ${className}`}></div>
);

// Design Pattern: Feature Card Component
const FeatureCard = ({ title, description, icon: Icon, color }) => (
  <Card className="card-hover border-0 shadow-sm">
    <CardHeader className="pb-4">
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

// Design Pattern: Stat Card Component
const StatCard = ({ title, value, subtitle, icon: Icon, color, bgClass }) => (
  <Card className={`card-hover border-0 shadow-sm ${bgClass}`}>
    <CardHeader className="pb-3">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <CardTitle>{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold mb-2">{value}</div>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </CardContent>
  </Card>
);

// Design Pattern: Page Component with Data Fetching
export default function Home() {
  // Design Pattern: State Management
  const [researchSummary, setResearchSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  // Design Pattern: Data Fetching
  useEffect(() => {
    fetchResearchSummary();
  }, []);

  const fetchResearchSummary = async () => {
    try {
      const response = await InvokeLLM({
        prompt: `Pesquise o estado atual da discriminação por idade no setor de TI de Portugal, especificamente para engenheiros de nuvem e desenvolvedores de software. Foque em dados de 2024-2025.`,
        add_context_from_internet: true
      });
      setResearchSummary(response);
    } catch (error) {
      console.error("Erro ao buscar pesquisa:", error);
    } finally {
      setLoading(false);
    }
  };

  // Design Pattern: Configuration Object
  const features = [
    {
      title: "Pesquisa Abrangente",
      description: "Dados mais recentes sobre discriminação por idade no setor de TI português",
      icon: TrendingUp,
      color: "bg-primary"
    },
    {
      title: "Roteiro de Migração",
      description: "Guia passo a passo para transição de carreira para Portugal",
      icon: MapPin,
      color: "bg-accent"
    },
    {
      title: "Proteção Legal",
      description: "Entenda seus direitos e proteções em Portugal",
      icon: Shield,
      color: "bg-purple-500"
    },
    {
      title: "Histórias de Sucesso",
      description: "Experiências reais de profissionais que fizeram a mudança",
      icon: Users,
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Design Pattern: Hero Section */}
      <section className="bg-card rounded-xl overflow-hidden shadow-sm">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
          <div className="relative p-6 md:p-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-primary/10 text-primary px-4 py-2 text-sm font-medium">
                Pesquisa Atualizada Janeiro 2025
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Carreiras TI Inclusivas em{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Portugal
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Pesquisa abrangente e guia de migração para desenvolvedores e profissionais de nuvem experientes 
                buscando oportunidades no próspero ecossistema tecnológico de Portugal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={createPageUrl("Research")}>
                  <Button size="lg" className="btn btn-primary px-8 py-3 text-lg">
                    Ver Resultados da Pesquisa
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to={createPageUrl("Migration")}>
                  <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                    Iniciar Guia de Migração
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Pattern: Research Summary Section */}
      <section className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Insights Mais Recentes da Pesquisa</h2>
          <p className="text-lg text-muted-foreground">Estado atual da discriminação por idade no setor de TI português</p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1,2,3,4].map(i => (
              <Card key={i} className="p-6">
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-16 w-full mb-4" />
                <Skeleton className="h-4 w-3/4" />
              </Card>
            ))}
          </div>
        ) : researchSummary ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Profissionais TI 40+"
              value={`${researchSummary.statistics?.professionals_over_40 || 32}%`}
              subtitle="da força de trabalho TI portuguesa"
              icon={Users}
              color="bg-primary"
              bgClass="bg-primary/5"
            />
            
            <StatCard
              title="Crescimento de Mercado"
              value={`+${researchSummary.statistics?.job_market_growth || 18}%`}
              subtitle="crescimento anual empregos TI"
              icon={TrendingUp}
              color="bg-accent"
              bgClass="bg-accent/5"
            />
            
            <StatCard
              title="Prêmio Salarial"
              value={`+${researchSummary.statistics?.salary_gap_percentage || 25}%`}
              subtitle="para profissionais sêniores"
              icon={Briefcase}
              color="bg-purple-500"
              bgClass="bg-purple-500/5"
            />
            
            <StatCard
              title="Proteção Legal"
              value="Forte"
              subtitle="leis anti-discriminação"
              icon={Shield}
              color="bg-orange-500"
              bgClass="bg-orange-500/5"
            />
          </div>
        ) : null}

        {researchSummary && (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Principais Descobertas da Pesquisa</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-accent mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Tendências Positivas
                  </h4>
                  <ul className="space-y-2">
                    {researchSummary.positive_trends?.slice(0, 4).map((trend, index) => (
                      <li key={index} className="text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-1" />
                        <span>{trend}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-500 mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Desenvolvimentos Recentes
                  </h4>
                  <ul className="space-y-2">
                    {researchSummary.recent_developments?.slice(0, 4).map((dev, index) => (
                      <li key={index} className="text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-1" />
                        <span>{dev}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Design Pattern: Features Section */}
      <section className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Tudo que Você Precisa Saber</h2>
          <p className="text-lg text-muted-foreground">Recursos abrangentes para sua migração de carreira TI</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* Design Pattern: CTA Section */}
      <section>
        <Card className="bg-gradient-to-r from-primary to-accent border-0 shadow-md text-white">
          <CardContent className="p-8 md:p-12 text-center">
            <Globe className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Pronto para Começar sua Jornada?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de profissionais de TI experientes que migraram com sucesso para o 
              próspero ecossistema tecnológico de Portugal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Migration")}>
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-slate-50 px-8 py-3">
                  Ver Guia de Migração
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl("Resources")}>
                <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 px-8 py-3">
                  Explorar Recursos
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}