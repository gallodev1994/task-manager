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
            titulo: z.string().nonempty({ error: "Titulo não pode ser vazio." })
               .min(3, { error: "Titulo precisa ter no mínimo 3 caracteres" }),
            descricao: z.string().optional(),
         })
      )
      .mutation(async ({ input, ctx }) => {
         return ctx.createTask(input);
      }),
   delete: publicProcedure.input(
      z.object({
         id: z.uuidv4()
      })
   ).mutation(async ({ input }) => {
      return taskRepository.delete(input.id);
   }),
   update: publicProcedure.input(
      z.object({
         id: z.uuidv4().nonempty(),
         titulo: z.string().min(3).optional(),
         descricao: z.string().optional()
      })
   ).mutation(async ({ input }) => {
      return taskRepository.update(input.id, input)
   })
})