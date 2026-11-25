
import { getTasksQuery } from '@/app/api/trpc/server';
import { HydrationBoundary } from '@tanstack/react-query';
import { TaskList } from './modules/tasks/components/TaskList';

export default async function Home() {
  const { dehydratedState } = await getTasksQuery();

  return (
    <HydrationBoundary state={dehydratedState}>
      <TaskList />
    </HydrationBoundary>
  );
}