import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
<<<<<<< HEAD
=======
import CompanyProfile from "./pages/CompanyProfile";
import Template1 from "./pages/landing/Template1";
import Template2 from "./pages/landing/Template2";
>>>>>>> 6f99e52eb04604e85f891dc78deb0ded18e762fe
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
<<<<<<< HEAD
=======
          <Route path="/company/:companyId" element={<CompanyProfile />} />
          <Route path="/template-1" element={<Template1 />} />
          <Route path="/template-2" element={<Template2 />} />
>>>>>>> 6f99e52eb04604e85f891dc78deb0ded18e762fe
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
