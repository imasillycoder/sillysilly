import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";

export default function StatsCard({ title, value, subtitle, icon: Icon, gradient }) {
  return (
    <Card className={`bg-gradient-to-br ${gradient} text-white border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white text-sm font-medium">{title}</CardTitle>
          <Icon className="w-8 h-8 opacity-80" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold mb-1">{value}</p>
        {subtitle && <p className="text-sm opacity-90">{subtitle}</p>}
      </CardContent>
    </Card>
  );
}