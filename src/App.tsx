import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CompanyProfile from "./pages/CompanyProfile";
import Template1 from "./pages/landing/Template1";
import Template2 from "./pages/landing/Template2";
import Template3 from "./pages/landing/Template3";
import Template4 from "./pages/landing/Template4";
import Template5 from "./pages/landing/Template5";
import Template6 from "./pages/landing/Template6";
import CrudDemo from "./pages/CrudDemo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/company/:companyId" element={<CompanyProfile />} />
          <Route path="/template-1" element={<Template1 />} />
          <Route path="/template-2" element={<Template2 />} />
          <Route path="/template-3" element={<Template3 />} />
          <Route path="/template-4" element={<Template4 />} />
          <Route path="/template-5" element={<Template5 />} />
          <Route path="/template-6" element={<Template6 />} />
          <Route path="/crud-demo" element={<CrudDemo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
