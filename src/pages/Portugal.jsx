import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  MapPin, 
  Home, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Coffee, 
  Sun, 
  Umbrella,
  Euro,
  Bus,
  Utensils,
  Wifi,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from "lucide-react";

// Componente de Acordeão
const Accordion = ({ title, children, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-border rounded-lg overflow-hidden mb-4">
      <button
        className="w-full p-4 flex items-center justify-between bg-white/80 backdrop-blur-sm hover:bg-secondary/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-5 h-5 text-primary" />}
          <h3 className="font-medium text-lg">{title}</h3>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="p-4 bg-white/60 backdrop-blur-sm">
          {children}
        </div>
      )}
    </div>
  );
};

// Componente de Card de Cidade
const CityCard = ({ name, description, image, highlights }) => (
  <Card className="card-hover overflow-hidden">
    <div className="h-48 overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform hover:scale-105"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/400x200?text=Imagem+de+" + name;
        }}
      />
    </div>
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {highlights.map((highlight, index) => (
          <Badge key={index} variant="outline" className="bg-secondary/50">
            {highlight}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

// Componente de Estatística
const StatItem = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-lg">
    <Icon className="w-8 h-8 text-primary mb-2" />
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm text-muted-foreground text-center">{label}</div>
  </div>
);

export default function Portugal() {
  // Dados das cidades
  const cities = [
    {
      name: "Lisboa",
      description: "Capital e maior hub tecnológico de Portugal, com uma vibrante cena de startups e escritórios de grandes empresas tech.",
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
      highlights: ["Hub Tech", "Startups", "Multinacionais", "Vida Cultural"]
    },
    {
      name: "Porto",
      description: "Segunda maior cidade e em rápido crescimento como centro tecnológico, com custo de vida mais acessível que Lisboa.",
      image: "https://images.unsplash.com/photo-1555881400-6daf11d5b0f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
      highlights: ["Tech em Crescimento", "Custo Acessível", "Qualidade de Vida", "Cultura"]
    },
    {
      name: "Braga",
      description: "Emergente hub tecnológico no norte, com forte presença universitária e crescente ecossistema de startups.",
      image: "https://images.unsplash.com/photo-1559078058-0a19edf5c5f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
      highlights: ["Universidade", "Startups", "Custo Baixo", "Qualidade de Vida"]
    },
    {
      name: "Coimbra",
      description: "Cidade universitária histórica com crescente presença tech e excelente qualidade de vida.",
      image: "https://images.unsplash.com/photo-1559078058-0a19edf5c5f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
      highlights: ["Universidade", "Histórica", "Qualidade de Vida", "Crescimento Tech"]
    }
  ];

  // Estatísticas sobre Portugal
  const stats = [
    { icon: Sun, label: "Dias de Sol por Ano", value: "300+" },
    { icon: Euro, label: "Salário Médio TI (Sênior)", value: "€45-70k" },
    { icon: Home, label: "Aluguel Médio (T1)", value: "€700-1200" },
    { icon: Wifi, label: "Velocidade Internet", value: "500Mbps+" }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Guia de Portugal</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Informações essenciais sobre a vida em Portugal, cultura, custo de vida e mais para profissionais de TI.
        </p>
      </div>

      {/* Estatísticas Rápidas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>

      {/* Principais Cidades */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Principais Cidades Tech</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <CityCard key={index} {...city} />
          ))}
        </div>
      </section>

      {/* Informações Detalhadas */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Informações Essenciais</h2>
        
        <Accordion title="Custo de Vida" icon={Euro}>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Portugal oferece um custo de vida mais acessível comparado a outros países da Europa Ocidental, 
              embora Lisboa seja significativamente mais cara que outras cidades.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Despesas Mensais (Estimativa)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Aluguel (T1 - Centro)</span>
                      <span className="font-medium">€700-1200</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Aluguel (T1 - Periferia)</span>
                      <span className="font-medium">€500-800</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Utilidades (Eletricidade, Água, etc)</span>
                      <span className="font-medium">€80-150</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Internet + Celular</span>
                      <span className="font-medium">€40-70</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Alimentação (Supermercado)</span>
                      <span className="font-medium">€200-300</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Transporte Público</span>
                      <span className="font-medium">€30-40</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Lazer</span>
                      <span className="font-medium">€100-200</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Comparação entre Cidades</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Lisboa</span>
                      <span className="font-medium">100% (Referência)</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Porto</span>
                      <span className="font-medium">80-85%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Braga</span>
                      <span className="font-medium">70-75%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Coimbra</span>
                      <span className="font-medium">75-80%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Aveiro</span>
                      <span className="font-medium">70-75%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Faro</span>
                      <span className="font-medium">75-85%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Accordion>
        
        <Accordion title="Mercado de Trabalho" icon={Briefcase}>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              O mercado de TI em Portugal está em forte crescimento, com demanda por profissionais qualificados 
              e salários competitivos para padrões europeus, embora inferiores aos do norte da Europa.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Faixas Salariais (Anual Bruto)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Desenvolvedor Júnior</span>
                      <span className="font-medium">€18k-28k</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Desenvolvedor Pleno</span>
                      <span className="font-medium">€28k-45k</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Desenvolvedor Sênior</span>
                      <span className="font-medium">€45k-70k</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tech Lead / Arquiteto</span>
                      <span className="font-medium">€60k-90k+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Product Manager</span>
                      <span className="font-medium">€45k-80k</span>
                    </li>
                    <li className="flex justify-between">
                      <span>DevOps / SRE</span>
                      <span className="font-medium">€40k-75k</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Principais Empregadores</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Multinacionais</h4>
                      <p className="text-sm text-muted-foreground">
                        Microsoft, Google, Amazon, Siemens, Bosch, Volkswagen Digital Solutions, Natixis, BNP Paribas
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Empresas Portuguesas</h4>
                      <p className="text-sm text-muted-foreground">
                        Farfetch, Talkdesk, Feedzai, OutSystems, Critical Software, Unbabel, Defined.ai
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Centros de Serviços</h4>
                      <p className="text-sm text-muted-foreground">
                        Altice Labs, Teleperformance, Webhelp, Concentrix, Sitel
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Accordion>
        
        <Accordion title="Saúde e Educação" icon={Heart}>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Portugal oferece um sistema de saúde público universal (SNS) e um sistema educacional de qualidade, 
              com opções públicas e privadas.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sistema de Saúde</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Serviço Nacional de Saúde (SNS)</h4>
                    <p className="text-sm text-muted-foreground">
                      Acesso universal para residentes legais. Consultas e tratamentos básicos têm taxas moderadoras 
                      baixas ou são gratuitos para crianças, idosos e pessoas com baixa renda.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Seguros de Saúde Privados</h4>
                    <p className="text-sm text-muted-foreground">
                      Muitas empresas oferecem seguros de saúde como benefício. Planos individuais custam entre 
                      €20-100 por mês, dependendo da cobertura e idade.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Farmácias</h4>
                    <p className="text-sm text-muted-foreground">
                      Bem distribuídas e com sistema de plantão 24h. Medicamentos prescritos têm subsídios 
                      do estado que podem cobrir 15% a 90% do custo.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sistema Educacional</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Escolas Públicas</h4>
                    <p className="text-sm text-muted-foreground">
                      Gratuitas e de boa qualidade. Ensino em português, com inglês como segunda língua 
                      a partir do 1º ano.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Escolas Internacionais</h4>
                    <p className="text-sm text-muted-foreground">
                      Disponíveis nas principais cidades. Mensalidades entre €500-1500, com currículos 
                      britânico, americano, francês ou IB.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Universidades</h4>
                    <p className="text-sm text-muted-foreground">
                      Portugal tem excelentes universidades públicas com propinas acessíveis (€700-1500/ano) 
                      e crescente oferta de cursos em inglês.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Accordion>
        
        <Accordion title="Clima e Estilo de Vida" icon={Sun}>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Portugal é conhecido pelo clima ameno, excelente gastronomia, segurança e ritmo de vida equilibrado, 
              fatores que contribuem para a alta qualidade de vida.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-yellow-500" />
                    <CardTitle className="text-lg">Clima</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Mais de 300 dias de sol por ano</li>
                    <li>Verões quentes (25-35°C) e secos</li>
                    <li>Invernos amenos (5-15°C) e chuvosos</li>
                    <li>Sul (Algarve) tem clima mais quente</li>
                    <li>Norte é mais chuvoso e fresco</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-orange-500" />
                    <CardTitle className="text-lg">Gastronomia</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Rica em frutos do mar e peixes</li>
                    <li>Vinhos de qualidade mundial</li>
                    <li>Pastelaria tradicional (Pastel de Nata)</li>
                    <li>Refeição em restaurante: €10-25</li>
                    <li>Café expresso (bica): €0.70-1.20</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-brown-500" />
                    <CardTitle className="text-lg">Estilo de Vida</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Ritmo de vida equilibrado</li>
                    <li>Forte cultura de café e esplanadas</li>
                    <li>Vida noturna vibrante nas cidades</li>
                    <li>Praias e natureza acessíveis</li>
                    <li>Um dos países mais seguros do mundo</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Accordion>
        
        <Accordion title="Transporte e Infraestrutura" icon={Bus}>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Portugal tem boa infraestrutura de transportes públicos nas áreas urbanas e excelente 
              conectividade digital em todo o país.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-3">Transporte Público</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Lisboa: Metro, ônibus, trem, bonde e ferry</li>
                  <li>Porto: Metro, ônibus e trem</li>
                  <li>Passe mensal urbano: €30-40</li>
                  <li>Táxi/Uber: Preços acessíveis comparados à Europa</li>
                  <li>Trens conectam principais cidades</li>
                  <li>Ônibus interurbanos frequentes e confortáveis</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Infraestrutura Digital</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Fibra ótica disponível em 90% do território</li>
                  <li>Velocidades de 100Mbps a 1Gbps comuns</li>
                  <li>Internet residencial: €25-40/mês</li>
                  <li>Excelente cobertura 4G/5G</li>
                  <li>Planos móveis acessíveis (€10-25/mês)</li>
                  <li>Muitos cafés e espaços públicos com Wi-Fi gratuito</li>
                </ul>
              </div>
            </div>
          </div>
        </Accordion>
      </section>

      {/* CTA */}
      <Card className="bg-gradient-to-r from-primary to-accent border-0 shadow-md text-white">
        <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Pronto para Explorar Portugal?</h2>
            <p className="opacity-90">
              Descubra mais sobre o processo de migração e oportunidades de carreira em TI.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-slate-50">
              Guia de Migração
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
              <ExternalLink className="mr-2 w-4 h-4" />
              Visit Portugal
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}