import { router, publicProcedure } from '../init';
import { taskRepository } from '@/server/repositories/task.repository';
import { z } from "zod";

export const taskRouter = router({
   list: publicProcedure.query(() => {
      return taskRepository.findAll();
   }),
   create: publicProcedure
      .input(
         z.object({
            titulo: z.string().min(3, { error: "Titulo precisa ter no mínimo 3 caracteres" }),
            descricao: z.string().optional(),
         })
      )
      .mutation(async ({ input, ctx }) => {
         return ctx.createTask(input);
      }),

})