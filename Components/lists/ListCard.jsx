import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, DollarSign, Package, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function ListCard({ list, stats, onDelete }) {
  const navigate = useNavigate();

  const statusColors = {
    active: "bg-green-100 text-green-700 border-green-200",
    completed: "bg-blue-100 text-blue-700 border-blue-200",
    archived: "bg-gray-100 text-gray-700 border-gray-200",
  };

  return (
    <Card className="hover:shadow-xl transition-all duration-300 group">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{list.name}</CardTitle>
            {list.description && (
              <p className="text-sm text-slate-600 line-clamp-2">{list.description}</p>
            )}
          </div>
          <Badge variant="outline" className={statusColors[list.status]}>
            {list.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-50 rounded-xl p-3">
            <div className="flex items-center gap-2 text-slate-600 mb-1">
              <Package className="w-4 h-4" />
              <span className="text-xs font-medium">Services</span>
            </div>
            <p className="text-2xl font-bold text-slate-900">{stats.serviceCount}</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-3">
            <div className="flex items-center gap-2 text-slate-600 mb-1">
              <DollarSign className="w-4 h-4" />
              <span className="text-xs font-medium">Total</span>
            </div>
            <p className="text-2xl font-bold text-slate-900">${stats.totalCost.toLocaleString()}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            className="flex-1 bg-slate-900 hover:bg-slate-800"
            onClick={() => navigate(`${createPageUrl("ListDetails")}?id=${list.id}`)}
          >
            View Details
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="icon" className="hover:bg-red-50 hover:text-red-600 hover:border-red-200">
                <Trash2 className="w-4 h-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete List?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently delete "{list.name}" and all its services. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onDelete} className="bg-red-600 hover:bg-red-700">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardContent>
    </Card>
  );
}