import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Users, ListChecks } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function QuickActions() {
  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Link to={createPageUrl("AllLists")} className="block">
          <Button variant="outline" className="w-full justify-start hover:bg-slate-50">
            <Plus className="w-5 h-5 mr-3" />
            Create New List
          </Button>
        </Link>
        <Link to={createPageUrl("ManageUsers")} className="block">
          <Button variant="outline" className="w-full justify-start hover:bg-slate-50">
            <Users className="w-5 h-5 mr-3" />
            Manage Users
          </Button>
        </Link>
        <Link to={createPageUrl("AllLists")} className="block">
          <Button variant="outline" className="w-full justify-start hover:bg-slate-50">
            <ListChecks className="w-5 h-5 mr-3" />
            View All Lists
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}