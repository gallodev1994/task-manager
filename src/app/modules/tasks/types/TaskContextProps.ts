import { Task } from "@/server/domain/task"

export type TaskContextProps = {
   tasks: Task[],
   setTasks: (tasks: Task[]) => void,
   newTask: Task | null,
   setNewTask: (task: Task) => void,
}