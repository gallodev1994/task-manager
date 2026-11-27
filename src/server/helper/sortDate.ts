import { Task } from "../domain/task";

export const sortedTasks = (tasks: Task[]): Task[] => {
   return [...tasks].sort(
      (a, b) => new Date(b.dataCriacao).getTime() - new Date(a.dataCriacao).getTime()
   )
}