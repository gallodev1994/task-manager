import { Task } from "@/server/domain/task";
import { taskRepository } from "@/server/repositories/task.repository";

export const createContext = async () => ({
   createTask: async (data: Omit<Task, 'id' | 'dataCriacao'>): Promise<Task> => {
      return taskRepository.create(data);
   },
});