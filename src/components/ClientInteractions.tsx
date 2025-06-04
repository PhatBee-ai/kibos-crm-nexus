
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarContent, AvatarFallback } from "@/components/ui/avatar";
import {
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
} from "lucide-react";

const recentInteractions = [
  {
    id: 1,
    client: "Sarah Mthembu",
    avatar: "SM",
    type: "call",
    subject: "Policy renewal discussion",
    time: "2 hours ago",
    status: "completed",
    priority: "high",
    notes: "Discussed renewal options, client interested in upgrade",
  },
  {
    id: 2,
    client: "David Nkomo",
    avatar: "DN",
    type: "email",
    subject: "Stokvel group inquiry",
    time: "4 hours ago",
    status: "pending",
    priority: "medium",
    notes: "Sent information about group policies",
  },
  {
    id: 3,
    client: "Maria Santos",
    avatar: "MS",
    type: "meeting",
    subject: "Family consultation",
    time: "1 day ago",
    status: "completed",
    priority: "high",
    notes: "In-person meeting went well, expect policy purchase",
  },
  {
    id: 4,
    client: "John van der Merwe",
    avatar: "JV",
    type: "whatsapp",
    subject: "Document submission",
    time: "2 days ago",
    status: "follow-up",
    priority: "medium",
    notes: "Client needs to submit additional FICA documents",
  },
];

const upcomingTasks = [
  {
    id: 1,
    task: "Follow up with Sarah Mthembu",
    time: "Today, 2:00 PM",
    type: "call",
    priority: "high",
  },
  {
    id: 2,
    task: "Send policy quotes to David Nkomo",
    time: "Tomorrow, 9:00 AM",
    type: "email",
    priority: "medium",
  },
  {
    id: 3,
    task: "Review Maria Santos application",
    time: "Friday, 10:00 AM",
    type: "review",
    priority: "high",
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "call":
      return <Phone className="w-4 h-4" />;
    case "email":
      return <Mail className="w-4 h-4" />;
    case "meeting":
      return <Calendar className="w-4 h-4" />;
    case "whatsapp":
      return <MessageSquare className="w-4 h-4" />;
    case "review":
      return <CheckCircle className="w-4 h-4" />;
    default:
      return <User className="w-4 h-4" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800";
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "follow-up":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "border-l-red-400";
    case "medium":
      return "border-l-yellow-400";
    case "low":
      return "border-l-green-400";
    default:
      return "border-l-gray-400";
  }
};

export function ClientInteractions() {
  return (
    <div className="space-y-6 h-full">
      {/* Recent Interactions */}
      <Card className="border border-slate-200 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            Recent Interactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-64 overflow-auto">
            {recentInteractions.map((interaction) => (
              <div
                key={interaction.id}
                className={`p-3 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 transition-colors cursor-pointer border-l-4 ${getPriorityColor(
                  interaction.priority
                )}`}
              >
                <div className="flex items-start gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="text-xs bg-blue-100 text-blue-700">
                      {interaction.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm text-slate-800">
                        {interaction.client}
                      </h4>
                      <div className="flex items-center gap-2">
                        <div className="text-blue-600">
                          {getTypeIcon(interaction.type)}
                        </div>
                        <Badge className={`text-xs ${getStatusColor(interaction.status)}`}>
                          {interaction.status}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mb-1">
                      {interaction.subject}
                    </p>
                    <p className="text-xs text-slate-500 mb-2">
                      {interaction.notes}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3 h-3" />
                      <span>{interaction.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Tasks */}
      <Card className="border border-slate-200 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            Upcoming Tasks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingTasks.map((task) => (
              <div
                key={task.id}
                className={`p-3 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 transition-colors cursor-pointer border-l-4 ${getPriorityColor(
                  task.priority
                )}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="text-blue-600">
                      {getTypeIcon(task.type)}
                    </div>
                    <h4 className="font-medium text-sm text-slate-800">
                      {task.task}
                    </h4>
                  </div>
                  <Badge
                    className={`text-xs ${
                      task.priority === "high"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {task.priority}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>{task.time}</span>
                  </div>
                  <Button size="sm" variant="outline" className="h-6 text-xs">
                    Mark Done
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
