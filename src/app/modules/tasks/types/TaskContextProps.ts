import { Task } from "@/server/domain/task"

export type TaskContextProps = {
   task: Partial<Task>,
   updateTask: (task: Partial<Task>) => void,
   isTaskFormOpened: boolean,
   setIsTaskFormOpened: (open: boolean) => void,
}