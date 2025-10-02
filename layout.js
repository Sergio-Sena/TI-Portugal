import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { BarChart3, MapPin, FileText, Users, Home, Globe } from "lucide-react";
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
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Visão Geral",
    url: createPageUrl("Home"),
    icon: Home,
  },
  {
    title: "Pesquisa",
    url: createPageUrl("Research"),
    icon: BarChart3,
  },
  {
    title: "Guia de Migração",
    url: createPageUrl("Migration"),
    icon: MapPin,
  },
  {
    title: "Guia de Portugal",
    url: createPageUrl("Portugal"),
    icon: Globe,
  },
  {
    title: "Recursos",
    url: createPageUrl("Resources"),
    icon: FileText,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <>
      <style>{`
        :root {
          --primary: 220 85% 57%;
          --primary-foreground: 210 40% 98%;
          --secondary: 220 14.3% 95.9%;
          --secondary-foreground: 220.9 39.3% 11%;
          --accent: 142 76% 36%;
          --accent-foreground: 355.7 100% 97.3%;
          --background: 0 0% 100%;
          --foreground: 220.9 39.3% 11%;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          letter-spacing: -0.01em;
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }
      `}</style>
      
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-slate-50">
          <Sidebar className="border-r border-slate-200 bg-white">
            <SidebarHeader className="border-b border-slate-100 p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900 text-lg">TI Portugal</h2>
                  <p className="text-xs text-slate-500">Migração de Carreira Inclusiva</p>
                </div>
              </div>
            </SidebarHeader>
            
            <SidebarContent className="p-3">
              <SidebarGroup>
                <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 py-2">
                  Navegação
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {navigationItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                          asChild 
                          className={`hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 rounded-lg mb-1 ${
                            location.pathname === item.url ? 'bg-blue-50 text-blue-700 border-blue-200' : ''
                          }`}
                        >
                          <Link to={item.url} className="flex items-center gap-3 px-3 py-3">
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarGroup className="mt-8">
                <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 py-2">
                  Estatísticas Rápidas
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <div className="px-3 py-2 space-y-3">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg">
                      <div className="text-sm font-medium text-slate-700">Profissionais TI 40+</div>
                      <div className="text-lg font-bold text-blue-600">32%</div>
                      <div className="text-xs text-slate-500">em Portugal</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg">
                      <div className="text-sm font-medium text-slate-700">Aumento Médio Salário</div>
                      <div className="text-lg font-bold text-emerald-600">25%</div>
                      <div className="text-xs text-slate-500">após migração</div>
                    </div>
                  </div>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t border-slate-100 p-4">
              <div className="text-center">
                <p className="text-xs text-slate-500">
                  Pesquisa atualizada Janeiro 2025
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Dados de fontes portuguesas e europeias
                </p>
              </div>
            </SidebarFooter>
          </Sidebar>

          <main className="flex-1 flex flex-col">
            <header className="bg-white border-b border-slate-200 px-6 py-4 md:hidden">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-slate-100 p-2 rounded-lg transition-colors duration-200" />
                <h1 className="text-xl font-bold text-slate-900">TI Portugal</h1>
              </div>
            </header>

            <div className="flex-1 overflow-auto">
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </>
  );
}