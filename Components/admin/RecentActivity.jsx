import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ListChecks, Package } from "lucide-react";
import { format } from "date-fns";

export default function RecentActivity({ lists, services }) {
  const recentItems = [
    ...lists.slice(0, 5).map(l => ({ type: 'list', data: l })),
    ...services.slice(0, 5).map(s => ({ type: 'service', data: s }))
  ]
    .sort((a, b) => new Date(b.data.created_date) - new Date(a.data.created_date))
    .slice(0, 8);

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        {recentItems.length === 0 ? (
          <p className="text-center text-slate-500 py-8">No activity yet</p>
        ) : (
          <div className="space-y-3">
            {recentItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  item.type === 'list' ? 'bg-blue-100' : 'bg-emerald-100'
                }`}>
                  {item.type === 'list' ? (
                    <ListChecks className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Package className="w-5 h-5 text-emerald-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-900 truncate">
                    {item.type === 'list' ? item.data.name : item.data.description}
                  </p>
                  <p className="text-sm text-slate-500">
                    {format(new Date(item.data.created_date), 'MMM d, yyyy')}
                  </p>
                </div>
                <Badge variant="outline" className={
                  item.type === 'list' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                }>
                  {item.type === 'list' ? 'List' : 'Service'}
                </Badge>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}