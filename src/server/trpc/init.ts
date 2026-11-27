import { initTRPC } from '@trpc/server';
import { Task } from '../domain/task';
import { ZodError } from 'zod/v4';

const t = initTRPC.context<{
   createTask: (data: Omit<Task, 'id' | 'dataCriacao'>) => Promise<Task>
}>().create({
   errorFormatter(opts) {
      const { shape, error } = opts;
      return {
         ...shape,
         data: {
            ...shape.data,
            zodError:
               error.code === 'BAD_REQUEST' && error.cause instanceof ZodError
                  ? error.cause.message
                  : null,
         },
      };
   }
});

export const router = t.router;
export const publicProcedure = t.procedure;