
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { CRMDashboard } from "@/components/CRMDashboard";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 to-blue-50">
        <AppSidebar />
        <main className="flex-1 overflow-hidden">
          <CRMDashboard />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
