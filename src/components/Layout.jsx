import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl, toggleTheme } from "../utils";
import { 
  BarChart3, 
  MapPin, 
  FileText, 
  Users, 
  Home, 
  Globe,
  Moon,
  Sun,
  Menu,
  X,
  ChevronRight,
  Settings,
  HelpCircle
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "./ui/sidebar";
import { Button } from "./ui/button";

// Design Pattern: Navigation Items Configuration
const navigationItems = [
  {
    title: "Visão Geral",
    url: createPageUrl("Home"),
    icon: Home,
    description: "Dashboard e informações principais"
  },
  {
    title: "Pesquisa",
    url: createPageUrl("Research"),
    icon: BarChart3,
    description: "Dados e estatísticas sobre o mercado"
  },
  {
    title: "Guia de Migração",
    url: createPageUrl("Migration"),
    icon: MapPin,
    description: "Passo a passo para migração"
  },
  {
    title: "Guia de Portugal",
    url: createPageUrl("Portugal"),
    icon: Globe,
    description: "Informações sobre o país"
  },
  {
    title: "Recursos",
    url: createPageUrl("Resources"),
    icon: FileText,
    description: "Links e materiais úteis"
  },
];

// Design Pattern: Secondary Navigation
const secondaryNavigation = [
  {
    title: "Configurações",
    url: "/settings",
    icon: Settings
  },
  {
    title: "Ajuda",
    url: "/help",
    icon: HelpCircle
  }
];

// Design Pattern: Component with Hooks
export default function Layout({ children }) {
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute("data-theme") || "light";
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Design Pattern: Side Effect Management
  useEffect(() => {
    // Close mobile menu when location changes
    setIsMobileMenuOpen(false);
  }, [location]);
  
  // Design Pattern: Event Handler
  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    toggleTheme();
  };
  
  // Design Pattern: Conditional Rendering Helper
  const isActive = (path) => location.pathname === path;
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {/* Design Pattern: Responsive Sidebar */}
        <Sidebar className="border-r border-border bg-white/80 backdrop-blur-md hidden md:block">
          <SidebarHeader className="border-b border-border p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-foreground text-lg">TI Portugal</h2>
                <p className="text-xs text-muted-foreground">Migração de Carreira Inclusiva</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-4">
            {/* Design Pattern: Grouped Navigation */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2">
                Navegação Principal
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`sidebar-item flex items-center gap-3 px-3 py-3 mb-1 ${
                          isActive(item.url) ? 'active' : ''
                        }`}
                      >
                        <Link to={item.url} className="w-full">
                          <div className="flex items-center gap-3">
                            <item.icon className="w-5 h-5" />
                            <div>
                              <span className="font-medium">{item.title}</span>
                              {item.description && (
                                <p className="text-xs text-muted-foreground mt-0.5 hidden lg:block">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>
                          {isActive(item.url) && (
                            <ChevronRight className="w-4 h-4 ml-auto" />
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Design Pattern: Stats Dashboard */}
            <SidebarGroup className="mt-8">
              <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2">
                Estatísticas Rápidas
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="px-3 py-2 space-y-3">
                  <div className="content-section p-3 rounded-lg">
                    <div className="text-sm font-medium text-foreground">Profissionais TI 40+</div>
                    <div className="text-lg font-bold text-primary">32%</div>
                    <div className="text-xs text-muted-foreground">em Portugal</div>
                  </div>
                  <div className="content-section p-3 rounded-lg">
                    <div className="text-sm font-medium text-foreground">Aumento Médio Salário</div>
                    <div className="text-lg font-bold text-accent">25%</div>
                    <div className="text-xs text-muted-foreground">após migração</div>
                  </div>
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
            
            {/* Design Pattern: Secondary Navigation */}
            <SidebarGroup className="mt-8">
              <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2">
                Suporte
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {secondaryNavigation.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className="sidebar-item flex items-center gap-3 px-3 py-2 mb-1"
                      >
                        <Link to={item.url} className="flex items-center gap-3">
                          <item.icon className="w-4 h-4" />
                          <span className="text-sm">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-border p-4">
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">
                <p>Atualizado: Janeiro 2025</p>
              </div>
              {/* Design Pattern: Theme Toggle */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="theme-toggle"
                onClick={handleThemeToggle}
                aria-label={theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"}
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Design Pattern: Responsive Layout */}
        <main className="flex-1 flex flex-col">
          {/* Design Pattern: Mobile Header */}
          <header className="bg-white/80 backdrop-blur-md border-b border-border px-4 py-3 flex items-center justify-between md:hidden">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md hover:bg-secondary"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-lg font-bold text-foreground">TI Portugal</h1>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="theme-toggle"
              onClick={handleThemeToggle}
              aria-label={theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
          </header>

          {/* Design Pattern: Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white/80 backdrop-blur-md border-b border-border">
              <nav className="p-4">
                <ul className="space-y-2">
                  {navigationItems.map((item) => (
                    <li key={item.title}>
                      <Link 
                        to={item.url} 
                        className={`flex items-center gap-3 p-3 rounded-md ${
                          isActive(item.url) 
                            ? 'bg-primary/10 text-primary' 
                            : 'hover:bg-secondary'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}

          {/* Design Pattern: Content Container */}
          <div className="flex-1 overflow-auto p-4 md:p-6">
            <div className="max-w-7xl mx-auto fade-in">
              {children}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}