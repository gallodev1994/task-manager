import { router, publicProcedure } from '../init';
import { taskRepository } from '@/server/repositories/task.repository';

export const taskRouter = router({
   list: publicProcedure.query(() => {
      return taskRepository.findAll();
   })
})