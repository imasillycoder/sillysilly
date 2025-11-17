import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { DollarSign, Package, Trash2, Edit2, Check, X } from "lucide-react";
import { format } from "date-fns";
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
} from "@/Components/ui/alert-dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";

export default function ServiceItem({ service, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    description: service.description,
    cost: service.cost,
    status: service.status,
  });

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
    completed: "bg-green-100 text-green-700 border-green-200",
    cancelled: "bg-red-100 text-red-700 border-red-200",
  };

  const handleSave = () => {
    onUpdate({
      ...editData,
      cost: parseFloat(editData.cost),
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      description: service.description,
      cost: service.cost,
      status: service.status,
    });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="p-4 bg-slate-50 border border-slate-300 rounded-xl space-y-3">
        <Textarea
          value={editData.description}
          onChange={(e) => setEditData({ ...editData, description: e.target.value })}
          rows={2}
        />
        <div className="grid grid-cols-2 gap-3">
          <Input
            type="number"
            step="0.01"
            value={editData.cost}
            onChange={(e) => setEditData({ ...editData, cost: e.target.value })}
            placeholder="Cost"
          />
          <Select
            value={editData.status}
            onValueChange={(value) => setEditData({ ...editData, status: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <Button size="sm" onClick={handleSave} className="bg-green-600 hover:bg-green-700">
            <Check className="w-4 h-4 mr-1" />
            Save
          </Button>
          <Button size="sm" variant="outline" onClick={handleCancel}>
            <X className="w-4 h-4 mr-1" />
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-shadow duration-200 group">
      <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
        <Package className="w-6 h-6 text-slate-600" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-slate-900">{service.description}</h3>
          <Badge variant="outline" className={statusColors[service.status]}>
            {service.status}
          </Badge>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            <span className="font-semibold text-slate-900">${service.cost.toLocaleString()}</span>
          </div>
          <span>•</span>
          <span>Added {format(new Date(service.created_date), 'MMM d, yyyy')}</span>
        </div>
      </div>
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsEditing(true)}
          className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
        >
          <Edit2 className="w-4 h-4" />
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-red-50 hover:text-red-600 hover:border-red-200"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Service?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete this service. This action cannot be undone.
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
    </div>
  );
}