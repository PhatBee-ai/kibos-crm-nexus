
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  Calendar,
  MapPin,
  Star,
  Clock,
  User,
  DollarSign,
} from "lucide-react";

const leadStages = [
  {
    id: "new",
    title: "New Leads",
    color: "bg-blue-50 border-blue-200",
    count: 12,
    leads: [
      {
        id: 1,
        name: "Sarah Mthembu",
        company: "Private Client",
        value: "R 25,000",
        priority: "high",
        avatar: "SM",
        phone: "+27 82 123 4567",
        email: "sarah.m@email.com",
        location: "Johannesburg",
        lastContact: "2 hours ago",
        source: "Referral",
      },
      {
        id: 2,
        name: "David Nkomo",
        company: "Stokvel Group",
        value: "R 45,000",
        priority: "medium",
        avatar: "DN",
        phone: "+27 83 987 6543",
        email: "david.n@email.com",
        location: "Cape Town",
        lastContact: "1 day ago",
        source: "Website",
      },
    ],
  },
  {
    id: "contacted",
    title: "Contacted",
    color: "bg-yellow-50 border-yellow-200",
    count: 8,
    leads: [
      {
        id: 3,
        name: "Maria Santos",
        company: "Family Plan",
        value: "R 18,000",
        priority: "high",
        avatar: "MS",
        phone: "+27 84 555 1234",
        email: "maria.s@email.com",
        location: "Durban",
        lastContact: "3 hours ago",
        source: "Cold Call",
      },
    ],
  },
  {
    id: "qualified",
    title: "Qualified",
    color: "bg-purple-50 border-purple-200",
    count: 5,
    leads: [
      {
        id: 4,
        name: "John van der Merwe",
        company: "Corporate Plan",
        value: "R 85,000",
        priority: "high",
        avatar: "JV",
        phone: "+27 85 777 8889",
        email: "john.v@email.com",
        location: "Pretoria",
        lastContact: "5 hours ago",
        source: "Partnership",
      },
    ],
  },
  {
    id: "proposal",
    title: "Proposal Sent",
    color: "bg-green-50 border-green-200",
    count: 3,
    leads: [],
  },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-800 border-red-200";
    case "medium":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "low":
      return "bg-green-100 text-green-800 border-green-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export function LeadsKanban() {
  return (
    <Card className="h-full border border-slate-200 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-slate-800 flex items-center gap-2">
          <User className="w-5 h-5 text-blue-600" />
          Sales Pipeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-96 overflow-auto">
          {leadStages.map((stage) => (
            <div key={stage.id} className="flex flex-col">
              <div
                className={`p-3 rounded-lg border ${stage.color} mb-3 flex items-center justify-between`}
              >
                <h3 className="font-medium text-sm text-slate-700">
                  {stage.title}
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {stage.count}
                </Badge>
              </div>

              <div className="space-y-3 flex-1">
                {stage.leads.map((lead) => (
                  <Card
                    key={lead.id}
                    className="p-3 border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer bg-white"
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="text-xs bg-blue-100 text-blue-700">
                              {lead.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium text-sm text-slate-800">
                              {lead.name}
                            </h4>
                            <p className="text-xs text-slate-500">
                              {lead.company}
                            </p>
                          </div>
                        </div>
                        <Badge
                          className={`text-xs ${getPriorityColor(
                            lead.priority
                          )}`}
                        >
                          {lead.priority}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-slate-600">
                        <DollarSign className="w-3 h-3" />
                        <span className="font-medium">{lead.value}</span>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="w-3 h-3" />
                        <span>{lead.location}</span>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock className="w-3 h-3" />
                        <span>Last contact: {lead.lastContact}</span>
                      </div>

                      <div className="flex gap-1 pt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 h-7 text-xs"
                        >
                          <Phone className="w-3 h-3 mr-1" />
                          Call
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 h-7 text-xs"
                        >
                          <Mail className="w-3 h-3 mr-1" />
                          Email
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}

                {stage.leads.length === 0 && (
                  <div className="text-center text-slate-400 text-sm py-8">
                    No leads in this stage
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
