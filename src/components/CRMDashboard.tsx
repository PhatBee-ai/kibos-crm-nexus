
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  TrendingUp,
  FileText,
  AlertCircle,
  Phone,
  Mail,
  Plus,
  Search,
  Filter,
  Bell,
} from "lucide-react";
import { LeadsKanban } from "./LeadsKanban";
import { ClientInteractions } from "./ClientInteractions";

export function CRMDashboard() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-slate-600 hover:text-slate-800" />
          <div>
            <h1 className="text-2xl font-bold text-slate-800">CRM Dashboard</h1>
            <p className="text-sm text-slate-500">
              Manage your client relationships and sales pipeline
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Search className="w-4 h-4" />
            Search
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Lead
          </Button>
          <div className="relative">
            <Bell className="w-5 h-5 text-slate-600" />
            <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-red-500" />
          </div>
        </div>
      </header>

      {/* KPI Widgets */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                Total Clients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">1,247</div>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +12% this month
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <FileText className="w-4 h-4 text-green-600" />
                Active Policies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">892</div>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +8% this month
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-orange-600" />
                Pending Claims
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">23</div>
              <p className="text-xs text-orange-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                4 urgent
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-purple-600" />
                Monthly Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">R 284K</div>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +15% vs last month
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-slate-50 overflow-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
          {/* Leads Kanban */}
          <div className="lg:col-span-2">
            <LeadsKanban />
          </div>

          {/* Client Interactions */}
          <div className="lg:col-span-1">
            <ClientInteractions />
          </div>
        </div>
      </div>
    </div>
  );
}
