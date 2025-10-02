import React, { createContext, useContext, useState } from "react";

// Create context for sidebar state
const SidebarContext = createContext({
  isOpen: false,
  setIsOpen: () => {}
});

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({ className = "", children }) => {
  const { isOpen } = useContext(SidebarContext);
  
  return (
    <aside className={`w-64 md:block ${isOpen ? "block" : "hidden"} ${className}`}>
      {children}
    </aside>
  );
};

export const SidebarHeader = ({ className = "", children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export const SidebarContent = ({ className = "", children }) => {
  return (
    <div className={`flex-1 overflow-auto ${className}`}>
      {children}
    </div>
  );
};

export const SidebarFooter = ({ className = "", children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export const SidebarGroup = ({ className = "", children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export const SidebarGroupLabel = ({ className = "", children }) => {
  return (
    <h3 className={className}>
      {children}
    </h3>
  );
};

export const SidebarGroupContent = ({ className = "", children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export const SidebarMenu = ({ className = "", children }) => {
  return (
    <nav className={className}>
      {children}
    </nav>
  );
};

export const SidebarMenuItem = ({ className = "", children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export const SidebarMenuButton = ({ className = "", asChild = false, children }) => {
  if (asChild) {
    return React.cloneElement(children, {
      className: `${children.props.className || ""} ${className}`
    });
  }
  
  return (
    <button className={className}>
      {children}
    </button>
  );
};

export const SidebarTrigger = ({ className = "" }) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  
  return (
    <button 
      className={className}
      onClick={() => setIsOpen(!isOpen)}
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {isOpen ? (
          <>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </>
        ) : (
          <>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </>
        )}
      </svg>
    </button>
  );
};