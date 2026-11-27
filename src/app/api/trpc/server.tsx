import 'server-only';

import {
   dehydrate,
} from '@tanstack/react-query';

import { appRouter } from '@/server/trpc/routers/_app';
import { makeQueryClient } from './query-client';
import { createContext } from './context';

export async function getTasksQuery() {
   const queryClient = makeQueryClient();
   const ctx = await createContext();
   const caller = appRouter.createCaller(ctx);

   await queryClient.query({
      queryKey: [['task', 'list'], { type: 'query' }],
      queryFn: () => caller.task.list(),
   });

   return {
      queryClient,
      dehydratedState: dehydrate(queryClient),
   };
}