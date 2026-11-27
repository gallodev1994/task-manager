import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/trpc/routers/_app';
import { Task } from '@/server/domain/task';
import { taskRepository } from '@/server/repositories/task.repository';

const createContext = async () => ({
   createTask: async (data: Omit<Task, 'id' | 'dataCriacao'>) => {
      return await taskRepository.create(data);
   },
   deleteTask: async (id: string) => {
      return await taskRepository.delete(id);
   }
});

const handler = (req: Request) =>
   fetchRequestHandler({
      endpoint: '/api/trpc',
      req,
      router: appRouter,
      createContext,
   });

export { handler as GET, handler as POST };