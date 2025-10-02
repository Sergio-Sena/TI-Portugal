import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  FileText, 
  Link as LinkIcon, 
  BookOpen, 
  Video, 
  Users, 
  Building, 
  GraduationCap,
  Globe,
  Search,
  ExternalLink,
  Download,
  Check,
  Bookmark
} from "lucide-react";

// Componente de Card de Recurso
const ResourceCard = ({ title, description, type, url, tags, icon: Icon }) => {
  const [saved, setSaved] = useState(false);
  
  // Cores por tipo de recurso
  const typeColors = {
    website: "bg-blue-100 text-blue-800",
    document: "bg-purple-100 text-purple-800",
    community: "bg-green-100 text-green-800",
    tool: "bg-orange-100 text-orange-800",
    course: "bg-pink-100 text-pink-800",
    video: "bg-red-100 text-red-800"
  };
  
  // Ícones por tipo de recurso
  const typeIcons = {
    website: Globe,
    document: FileText,
    community: Users,
    tool: Search,
    course: GraduationCap,
    video: Video
  };
  
  const ResourceIcon = typeIcons[type] || Icon || LinkIcon;
  
  return (
    <Card className="card-hover h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge className={`mb-2 ${typeColors[type] || "bg-gray-100 text-gray-800"}`}>
            <ResourceIcon className="w-3 h-3 mr-1" />
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0 rounded-full"
            onClick={() => setSaved(!saved)}
          >
            {saved ? (
              <Check className="h-4 w-4 text-primary" />
            ) : (
              <Bookmark className="h-4 w-4" />
            )}
          </Button>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-secondary/50 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mt-auto"
        >
          <ExternalLink className="w-4 h-4" />
          Acessar Recurso
        </a>
      </CardContent>
    </Card>
  );
};

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Categorias de recursos
  const categories = [
    { id: "all", name: "Todos" },
    { id: "visa", name: "Vistos" },
    { id: "jobs", name: "Empregos" },
    { id: "housing", name: "Moradia" },
    { id: "language", name: "Idioma" },
    { id: "community", name: "Comunidade" },
    { id: "legal", name: "Legal" }
  ];
  
  // Dados dos recursos
  const resources = [
    {
      id: 1,
      title: "Portal SEF - Serviço de Estrangeiros e Fronteiras",
      description: "Site oficial do SEF com informações sobre vistos, autorizações de residência e agendamentos.",
      type: "website",
      url: "https://www.sef.pt/",
      category: "visa",
      tags: ["Vistos", "Oficial", "Documentação"]
    },
    {
      id: 2,
      title: "Landing.Jobs",
      description: "Plataforma de empregos focada em tecnologia em Portugal e Europa, com filtros para trabalho remoto e relocation.",
      type: "website",
      url: "https://landing.jobs/",
      category: "jobs",
      tags: ["Empregos", "Tech", "Relocation"]
    },
    {
      id: 3,
      title: "Idealista",
      description: "Principal portal imobiliário em Portugal para alugar ou comprar imóveis.",
      type: "website",
      url: "https://www.idealista.pt/",
      category: "housing",
      tags: ["Moradia", "Aluguel", "Imóveis"]
    },
    {
      id: 4,
      title: "Guia Completo do Visto D2 (Empreendedor)",
      description: "Documento detalhado sobre o processo de obtenção do visto D2 para empreendedores e freelancers.",
      type: "document",
      url: "#",
      category: "visa",
      tags: ["Visto D2", "Empreendedor", "Freelancer"]
    },
    {
      id: 5,
      title: "Brasileiros em Portugal",
      description: "Maior grupo no Facebook para brasileiros vivendo ou planejando se mudar para Portugal.",
      type: "community",
      url: "https://www.facebook.com/groups/brasileirosemportugaloficial/",
      category: "community",
      tags: ["Brasileiros", "Networking", "Dicas"]
    },
    {
      id: 6,
      title: "Duolingo - Português Europeu",
      description: "Curso gratuito de português europeu para iniciantes.",
      type: "course",
      url: "https://www.duolingo.com/",
      category: "language",
      tags: ["Português", "Curso", "Gratuito"]
    },
    {
      id: 7,
      title: "Portal das Finanças",
      description: "Site oficial da autoridade tributária portuguesa para obtenção de NIF e declaração de impostos.",
      type: "website",
      url: "https://www.portaldasfinancas.gov.pt/",
      category: "legal",
      tags: ["Impostos", "NIF", "Oficial"]
    },
    {
      id: 8,
      title: "IT Jobs in Portugal",
      description: "Grupo no LinkedIn focado em oportunidades de TI em Portugal.",
      type: "community",
      url: "https://www.linkedin.com/groups/8693487/",
      category: "jobs",
      tags: ["LinkedIn", "Empregos", "Networking"]
    },
    {
      id: 9,
      title: "Segurança Social Direta",
      description: "Portal da Segurança Social portuguesa para registro e contribuições.",
      type: "website",
      url: "https://app.seg-social.pt/",
      category: "legal",
      tags: ["Segurança Social", "Oficial", "Contribuições"]
    },
    {
      id: 10,
      title: "Checklist de Documentos para Visto D7",
      description: "Lista completa de documentos necessários para o visto D7 (renda passiva).",
      type: "document",
      url: "#",
      category: "visa",
      tags: ["Visto D7", "Documentos", "Checklist"]
    },
    {
      id: 11,
      title: "Uniplaces",
      description: "Plataforma para encontrar acomodação estudantil e de curto prazo em Portugal.",
      type: "website",
      url: "https://www.uniplaces.com/",
      category: "housing",
      tags: ["Moradia", "Estudantes", "Curto Prazo"]
    },
    {
      id: 12,
      title: "Practice Portuguese",
      description: "Podcast e recursos para aprender português europeu com foco na conversação.",
      type: "course",
      url: "https://www.practiceportuguese.com/",
      category: "language",
      tags: ["Português", "Podcast", "Conversação"]
    }
  ];
  
  // Filtrar recursos por categoria e termo de pesquisa
  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === "all" || resource.category === activeCategory;
    const matchesSearch = searchTerm === "" || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Recursos</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Links úteis, documentos e ferramentas para auxiliar no processo de migração para Portugal.
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
            placeholder="Pesquisar recursos..."
            className="w-full px-4 py-2 rounded-md border border-border bg-white/80 backdrop-blur-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-2.5 w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      {/* Lista de Recursos */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map(resource => (
          <ResourceCard key={resource.id} {...resource} />
        ))}
      </div>
      
      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">Nenhum recurso encontrado para sua pesquisa.</p>
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

      {/* Seção de Downloads */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Documentos para Download</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="card-hover">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">Checklist de Documentos</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Lista completa de documentos necessários para diferentes tipos de vistos.
              </p>
              <Button variant="outline" className="mt-auto">
                <Download className="mr-2 w-4 h-4" />
                Download PDF
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">Guia de Impostos</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explicação detalhada sobre o sistema tributário português para expatriados.
              </p>
              <Button variant="outline" className="mt-auto">
                <Download className="mr-2 w-4 h-4" />
                Download PDF
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">Modelo de CV Europeu</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Template de currículo no formato Europass adaptado para o mercado português.
              </p>
              <Button variant="outline" className="mt-auto">
                <Download className="mr-2 w-4 h-4" />
                Download DOCX
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA - Comunidade */}
      <Card className="bg-gradient-to-r from-primary to-accent border-0 shadow-md text-white">
        <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Junte-se à Nossa Comunidade</h2>
            <p className="opacity-90">
              Conecte-se com outros profissionais de TI que já migraram ou estão planejando migrar para Portugal.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-slate-50">
              <Users className="mr-2 w-5 h-5" />
              Discord
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
              <Users className="mr-2 w-5 h-5" />
              LinkedIn
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}