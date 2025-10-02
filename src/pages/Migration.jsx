import React, { useState, useEffect } from "react";
import { MigrationStep } from "../entities/MigrationStep";
import { InvokeLLM } from "../integrations/Core";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { 
  CheckCircle, 
  Clock, 
  FileText, 
  MapPin, 
  Briefcase, 
  Users, 
  ExternalLink, 
  ArrowRight,
  Euro,
  Filter,
  Download,
  ChevronDown,
  ChevronUp
} from "lucide-react";

// Componente de esqueleto para carregamento
const Skeleton = ({ className = "" }) => (
  <div className={`animate-pulse bg-secondary rounded ${className}`}></div>
);

// Componente de progresso
const Progress = ({ value, className = "" }) => (
  <div className={`w-full bg-secondary rounded-full overflow-hidden ${className}`}>
    <div 
      className="bg-primary h-full rounded-full transition-all duration-500 ease-out"
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

// Componente de abas
const Tabs = ({ value, onValueChange, children, className = "" }) => (
  <div className={className}>
    {children}
  </div>
);

const TabsList = ({ children, className = "" }) => (
  <div className={`flex flex-wrap gap-2 ${className}`}>
    {children}
  </div>
);

const TabsTrigger = ({ value, children, ...props }) => {
  const { value: selectedValue, onValueChange } = props.parent || {};
  const isActive = value === selectedValue;
  
  return (
    <button
      className={`px-4 py-2 rounded-md transition-colors ${
        isActive 
          ? "bg-primary text-white" 
          : "bg-white/80 backdrop-blur-sm text-foreground hover:bg-secondary"
      }`}
      onClick={() => onValueChange && onValueChange(value)}
    >
      {children}
    </button>
  );
};

// Componente de passo de migração
const MigrationStepCard = ({ 
  step, 
  isCompleted, 
  onToggleCompletion, 
  Icon, 
  categoryColor 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <Card className={`border-0 shadow-sm transition-all duration-200 ${isCompleted ? 'bg-green-50/50 border-green-200' : ''}`}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isCompleted ? 'bg-green-500' : 'bg-secondary'}`}>
              {isCompleted ? (
                <CheckCircle className="w-4 h-4 text-white" />
              ) : (
                <span className="text-muted-foreground font-semibold text-sm">{step.step_number}</span>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <CardTitle className={`text-xl ${isCompleted ? 'line-through text-muted-foreground' : ''}`}>
                  {step.title}
                </CardTitle>
                <Badge className={categoryColor}>
                  <Icon className="w-3 h-3 mr-1" />
                  {step.category.replace('_', ' ')}
                </Badge>
              </div>
              <p className="text-muted-foreground mb-3">{step.description}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {step.timeline}
                </div>
                {step.cost_estimate && (
                  <div className="flex items-center gap-1">
                    <Euro className="w-4 h-4" />
                    €{step.cost_estimate.min}-{step.cost_estimate.max}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              variant={isCompleted ? "outline" : "default"}
              size="sm"
              onClick={() => onToggleCompletion(step.id)}
            >
              {isCompleted ? "Concluído" : "Marcar como Concluído"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1"
            >
              {isExpanded ? "Menos" : "Mais"} detalhes
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Required Documents */}
            {step.required_documents && step.required_documents.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  Documentos Necessários
                </h4>
                <ul className="space-y-1">
                  {step.required_documents.map((doc, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tips */}
            {step.tips && step.tips.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Dicas Profissionais
                </h4>
                <ul className="space-y-1">
                  {step.tips.slice(0, 3).map((tip, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Resources */}
            {step.resources && step.resources.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-primary" />
                  Recursos
                </h4>
                <div className="space-y-2">
                  {step.resources.slice(0, 3).map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <ArrowRight className="w-3 h-3" />
                      {resource.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default function MigrationPage() {
  const [migrationSteps, setMigrationSteps] = useState([]);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    loadMigrationGuide();
  }, []);

  const loadMigrationGuide = async () => {
    try {
      // Verificar se já existem passos armazenados
      const existingSteps = await MigrationStep.list("step_number");
      
      if (existingSteps.length === 0) {
        const response = await InvokeLLM({
          prompt: `Crie um guia de migração abrangente passo a passo para profissionais de TI (especialmente aqueles 40+) se mudando para Portugal para cargos de engenharia de nuvem ou desenvolvimento de software.`,
          add_context_from_internet: true
        });

        // Store the migration steps
        if (response.migration_steps) {
          for (const step of response.migration_steps) {
            await MigrationStep.create(step);
          }
        }
        
        // Carregar os passos criados
        const steps = await MigrationStep.list("step_number");
        setMigrationSteps(steps);
      } else {
        // Usar os passos existentes
        setMigrationSteps(existingSteps);
      }
    } catch (error) {
      console.error("Erro ao carregar guia de migração:", error);
      
      // Dados de fallback em caso de erro
      const fallbackSteps = [
        {
          id: "1",
          step_number: 1,
          title: "Avaliação de Habilidades e Portfólio",
          description: "Avalie suas habilidades técnicas e prepare seu portfólio para o mercado português",
          category: "preparation",
          timeline: "1-2 meses",
          required_documents: [
            "CV atualizado em formato europeu",
            "Portfólio de projetos",
            "Certificações técnicas"
          ],
          cost_estimate: {
            min: 0,
            max: 300,
            currency: "EUR"
          },
          tips: [
            "Destaque experiência com tecnologias em alta demanda em Portugal",
            "Adapte seu CV ao formato europeu (Europass)",
            "Inclua projetos que demonstrem habilidades de colaboração"
          ],
          resources: [
            {
              name: "Europass CV Builder",
              url: "https://europa.eu/europass/",
              type: "website"
            },
            {
              name: "LinkedIn Learning - Cursos de Português",
              url: "https://www.linkedin.com/learning/",
              type: "service"
            }
          ]
        },
        {
          id: "2",
          step_number: 2,
          title: "Pesquisa do Mercado Português",
          description: "Pesquise empresas, salários e demanda por habilidades no mercado tech português",
          category: "preparation",
          timeline: "2-4 semanas",
          required_documents: [],
          cost_estimate: {
            min: 0,
            max: 0,
            currency: "EUR"
          },
          tips: [
            "Foque em hubs tecnológicos: Lisboa, Porto, Braga e Coimbra",
            "Pesquise empresas que oferecem relocation package",
            "Identifique comunidades de expatriados em tecnologia"
          ],
          resources: [
            {
              name: "Landing.Jobs",
              url: "https://landing.jobs",
              type: "website"
            },
            {
              name: "AICEP - Invest in Portugal",
              url: "https://www.portugalglobal.pt/",
              type: "website"
            }
          ]
        },
        {
          id: "3",
          step_number: 3,
          title: "Preparação de Documentos para Visto",
          description: "Reúna todos os documentos necessários para o processo de visto",
          category: "documentation",
          timeline: "1-3 meses",
          required_documents: [
            "Passaporte válido",
            "Certidão de antecedentes criminais",
            "Comprovante de acomodação",
            "Seguro de saúde",
            "Comprovante de meios de subsistência"
          ],
          cost_estimate: {
            min: 200,
            max: 500,
            currency: "EUR"
          },
          tips: [
            "Inicie o processo de antecedentes criminais com antecedência",
            "Contrate seguro de viagem que cubra requisitos de visto",
            "Apostile todos os documentos necessários"
          ],
          resources: [
            {
              name: "Consulado Português",
              url: "https://portaldascomunidades.mne.gov.pt/",
              type: "website"
            }
          ]
        }
      ];
      
      setMigrationSteps(fallbackSteps);
    } finally {
      setLoading(false);
    }
  };

  const toggleStepCompletion = (stepId) => {
    setCompletedSteps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(stepId)) {
        newSet.delete(stepId);
      } else {
        newSet.add(stepId);
      }
      return newSet;
    });
  };

  const filteredSteps = activeCategory === "all" 
    ? migrationSteps 
    : migrationSteps.filter(step => step.category === activeCategory);

  const completionPercentage = migrationSteps.length > 0 
    ? (completedSteps.size / migrationSteps.length) * 100 
    : 0;

  const categoryIcons = {
    preparation: FileText,
    documentation: FileText,
    job_search: Briefcase,
    relocation: MapPin,
    integration: Users
  };

  const categoryColors = {
    preparation: "bg-blue-100 text-blue-800",
    documentation: "bg-purple-100 text-purple-800",
    job_search: "bg-emerald-100 text-emerald-800",
    relocation: "bg-orange-100 text-orange-800",
    integration: "bg-pink-100 text-pink-800"
  };

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="mb-8">
          <Skeleton className="h-10 w-96 mb-4" />
          <Skeleton className="h-6 w-full max-w-2xl" />
        </div>
        <div className="space-y-4">
          {[1,2,3,4,5].map(i => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-48" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">
          Guia de Migração para TI Portugal
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Guia completo passo a passo para profissionais de TI experientes 
          se mudando para o próspero ecossistema tecnológico de Portugal.
        </p>

        {/* Progress Tracking */}
        <Card className="border-0 shadow-sm mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Seu Progresso</h3>
              <span className="text-sm text-muted-foreground">
                {completedSteps.size} de {migrationSteps.length} passos concluídos
              </span>
            </div>
            <Progress value={completionPercentage} className="h-3 mb-2" />
            <p className="text-sm text-muted-foreground">
              {Math.round(completionPercentage)}% completo
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Category Filter */}
      <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
        <TabsList className="bg-white/80 backdrop-blur-sm border border-border p-1 rounded-lg">
          <TabsTrigger value="all" parent={{ value: activeCategory, onValueChange: setActiveCategory }}>
            Todos os Passos
          </TabsTrigger>
          <TabsTrigger value="preparation" parent={{ value: activeCategory, onValueChange: setActiveCategory }}>
            Preparação
          </TabsTrigger>
          <TabsTrigger value="documentation" parent={{ value: activeCategory, onValueChange: setActiveCategory }}>
            Documentação
          </TabsTrigger>
          <TabsTrigger value="job_search" parent={{ value: activeCategory, onValueChange: setActiveCategory }}>
            Busca de Emprego
          </TabsTrigger>
          <TabsTrigger value="relocation" parent={{ value: activeCategory, onValueChange: setActiveCategory }}>
            Relocação
          </TabsTrigger>
          <TabsTrigger value="integration" parent={{ value: activeCategory, onValueChange: setActiveCategory }}>
            Integração
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Migration Steps */}
      <div className="space-y-6">
        {filteredSteps.map((step) => {
          const Icon = categoryIcons[step.category];
          const isCompleted = completedSteps.has(step.id);
          
          return (
            <MigrationStepCard
              key={step.id}
              step={step}
              isCompleted={isCompleted}
              onToggleCompletion={toggleStepCompletion}
              Icon={Icon}
              categoryColor={categoryColors[step.category]}
            />
          );
        })}
        
        {filteredSteps.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Nenhum passo encontrado nesta categoria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setActiveCategory("all")}
            >
              Ver Todos os Passos
            </Button>
          </div>
        )}
      </div>

      {/* Summary Card */}
      <Card className="bg-gradient-to-r from-primary to-accent border-0 shadow-md text-white">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Pronto para Começar sua Jornada?</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            O processo médio de migração leva 6-12 meses. Comece com a fase de preparação 
            e trabalhe sistematicamente através de cada passo para obter os melhores resultados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-slate-50">
              <Download className="mr-2 w-5 h-5" />
              Baixar Checklist
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
              <Users className="mr-2 w-5 h-5" />
              Juntar-se à Comunidade
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}