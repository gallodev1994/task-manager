import 'server-only';

import {
   dehydrate,
} from '@tanstack/react-query';

import { appRouter } from '@/server/trpc/routers/_app';
import { makeQueryClient } from './query-client';

export async function getTasksQuery() {
   const queryClient = makeQueryClient();

   await queryClient.query({
      queryKey: [['task', 'list'], { type: 'query' }],
      queryFn: () => appRouter.createCaller({}).task.list(),
   });

   return {
      queryClient,
      dehydratedState: dehydrate(queryClient),
   };
}