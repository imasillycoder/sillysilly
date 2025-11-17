import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";

export default function AssignUserDialog({ open, onOpenChange, user, lists, onSubmit, isLoading }) {
  const [selectedListId, setSelectedListId] = useState("");

  useEffect(() => {
    if (user?.list_id) {
      setSelectedListId(user.list_id);
    } else {
      setSelectedListId("");
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && selectedListId) {
      onSubmit(user.id, selectedListId);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {user?.list_id ? 'Change' : 'Assign'} List Access
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {user && (
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm font-medium text-slate-900 mb-1">{user.full_name}</p>
              <p className="text-xs text-slate-600">{user.email}</p>
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="list">Select List *</Label>
            <Select
              value={selectedListId}
              onValueChange={setSelectedListId}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose a list" />
              </SelectTrigger>
              <SelectContent>
                {lists.map(list => (
                  <SelectItem key={list.id} value={list.id}>
                    {list.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading || !selectedListId}
              className="bg-slate-900 hover:bg-slate-800"
            >
              {isLoading ? "Assigning..." : user?.list_id ? "Change Assignment" : "Assign"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}