import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Redirect components for external pages
const AboutRedirect = () => {
  window.location.href = "https://www.arzhost.com/about-us/";
  return <div>Redirecting to About Us...</div>;
};

const ContactRedirect = () => {
  window.location.href = "https://www.arzhost.com/contact-us/";
  return <div>Redirecting to Contact Us...</div>;
};

const TermsRedirect = () => {
  window.location.href = "https://www.arzhost.com/terms-conditions/";
  return <div>Redirecting to Terms and Conditions...</div>;
};

const PrivacyRedirect = () => {
  window.location.href = "https://www.arzhost.com/privacy-policy/";
  return <div>Redirecting to Privacy Policy...</div>;
};

const DisclaimerRedirect = () => {
  window.location.href = "https://www.arzhost.com/disclaimer/";
  return <div>Redirecting to Disclaimer...</div>;
};

const DedicatedRedirect = () => {
  window.location.href = "https://arzhost.com/dedicated-servers/";
  return <div>Redirecting to Dedicated Servers...</div>;
};

const LifetimeRedirect = () => {
  window.location.href = "https://arzhost.com/lifetime-web-hosting/";
  return <div>Redirecting to Lifetime Web Hosting...</div>;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutRedirect />} />
          <Route path="/contact" element={<ContactRedirect />} />
          <Route path="/terms" element={<TermsRedirect />} />
          <Route path="/privacy" element={<PrivacyRedirect />} />
          <Route path="/disclaimer" element={<DisclaimerRedirect />} />
          <Route path="/dedicated-servers" element={<DedicatedRedirect />} />
          <Route path="/lifetime-hosting" element={<LifetimeRedirect />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
