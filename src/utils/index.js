/**
 * Utility functions for the application
 */

/**
 * Creates a URL for a page based on its name
 * @param {string} pageName - The name of the page
 * @returns {string} - The URL for the page
 */
export const createPageUrl = (pageName) => {
  const routes = {
    Home: "/",
    Research: "/research",
    Migration: "/migration",
    Portugal: "/portugal",
    Resources: "/resources"
  };
  
  return routes[pageName] || "/";
};

/**
 * Toggles the theme between light and dark
 */
export const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "base44" : "dark";
  
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
};

/**
 * Initializes the theme based on user preference or system preference
 */
export const initializeTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "base44");
  }
};

/**
 * Formats a currency value
 * @param {number} value - The value to format
 * @param {string} currency - The currency code
 * @returns {string} - The formatted currency value
 */
export const formatCurrency = (value, currency = "EUR") => {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency
  }).format(value);
};