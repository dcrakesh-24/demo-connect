import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2, Plus } from "lucide-react";

// This is a temporary interface - you'll replace this with your Supabase types later
interface Task {
  id: string;
  title: string;
  description: string;
  created_at?: string;
}

const CrudDemo = () => {
  // Temporary state - you'll replace this with Supabase queries later
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Sample Task 1", description: "This is a sample task description" },
    { id: "2", title: "Sample Task 2", description: "Another sample task" },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [formData, setFormData] = useState({ title: "", description: "" });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Open dialog for creating new task
  const handleCreateClick = () => {
    setEditingTask(null);
    setFormData({ title: "", description: "" });
    setIsDialogOpen(true);
  };

  // Open dialog for editing existing task
  const handleEditClick = (task: Task) => {
    setEditingTask(task);
    setFormData({ title: task.title, description: task.description });
    setIsDialogOpen(true);
  };

  // Handle form submission (Create or Update)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingTask) {
      // Update existing task - Replace this with Supabase update later
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editingTask.id
            ? { ...task, title: formData.title, description: formData.description }
            : task
        )
      );
    } else {
      // Create new task - Replace this with Supabase insert later
      const newTask: Task = {
        id: Date.now().toString(),
        title: formData.title,
        description: formData.description,
      };
      setTasks((prev) => [...prev, newTask]);
    }

    // Reset form and close dialog
    setFormData({ title: "", description: "" });
    setIsDialogOpen(false);
    setEditingTask(null);
  };

  // Handle delete task
  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      // Delete task - Replace this with Supabase delete later
      setTasks((prev) => prev.filter((task) => task.id !== id));
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-6xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Supabase CRUD Demo</CardTitle>
          <CardDescription>
            A simple CRUD interface to learn Supabase operations. This UI is ready for you to integrate with Supabase API.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Create Button */}
          <div className="mb-6 flex justify-end">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={handleCreateClick} className="gap-2">
                  <Plus className="h-4 w-4" />
                  Create New Task
                </Button>
              </DialogTrigger>
              <DialogContent>
                <form onSubmit={handleSubmit}>
                  <DialogHeader>
                    <DialogTitle>{editingTask ? "Edit Task" : "Create New Task"}</DialogTitle>
                    <DialogDescription>
                      {editingTask
                        ? "Update the task details below."
                        : "Fill in the details to create a new task."}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <label htmlFor="title" className="text-sm font-medium">
                        Title
                      </label>
                      <Input
                        id="title"
                        name="title"
                        placeholder="Enter task title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="description" className="text-sm font-medium">
                        Description
                      </label>
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Enter task description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setIsDialogOpen(false);
                        setFormData({ title: "", description: "" });
                        setEditingTask(null);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">{editingTask ? "Update" : "Create"}</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Tasks Table */}
          {tasks.length === 0 ? (
            <div className="text-center py-10 text-muted-foreground">
              <p>No tasks found. Create your first task to get started!</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell className="font-medium">{task.id}</TableCell>
                    <TableCell>{task.title}</TableCell>
                    <TableCell className="max-w-md truncate">{task.description}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleEditClick(task)}
                          className="h-8 w-8"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => handleDelete(task.id)}
                          className="h-8 w-8"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

          {/* Instructions Section */}
          <div className="mt-8 p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Next Steps:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Replace the state management with Supabase queries</li>
              <li>Use <code className="bg-background px-1 rounded">supabase.from('tasks').select()</code> for READ</li>
              <li>Use <code className="bg-background px-1 rounded">supabase.from('tasks').insert()</code> for CREATE</li>
              <li>Use <code className="bg-background px-1 rounded">supabase.from('tasks').update()</code> for UPDATE</li>
              <li>Use <code className="bg-background px-1 rounded">supabase.from('tasks').delete()</code> for DELETE</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CrudDemo;

