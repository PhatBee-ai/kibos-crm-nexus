
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
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Users,
  FileText,
  ShoppingCart,
  PiggyBank,
  TrendingUp,
  MessageSquare,
  Package,
  BarChart3,
  Phone,
  Settings,
  CreditCard,
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", url: "#", icon: LayoutDashboard, active: true },
  { title: "Policy Administration", url: "#", icon: FileText },
  { title: "Claims", url: "#", icon: CreditCard },
  { title: "CRM", url: "#", icon: Users },
  { title: "Sales Management", url: "#", icon: TrendingUp },
  { title: "Marketplace", url: "#", icon: ShoppingCart },
  { title: "Stokvels", url: "#", icon: PiggyBank },
  { title: "Messaging", url: "#", icon: MessageSquare },
  { title: "Products", url: "#", icon: Package },
  { title: "Reports", url: "#", icon: BarChart3 },
  { title: "User Access", url: "#", icon: Settings },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-slate-200 bg-white">
      <SidebarHeader className="border-b border-slate-200 p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <div>
            <h1 className="font-bold text-lg text-slate-800">KibOS</h1>
            <p className="text-xs text-slate-500">Funeral CRM</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-600 font-medium mb-2">
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                      item.active
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                    }`}
                  >
                    <a href={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
