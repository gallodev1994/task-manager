'use client';

import { AiFillPlusSquare } from "react-icons/ai"
import { EmptyTask } from "./EmptyTask"
import { TaskItem } from "./TaskItem"
import { TaskForm } from "./TaskForm"
import { useTRPC } from "@/app/api/trpc/client"
import { useQuery } from "@tanstack/react-query"

export const TaskList = () => {
   const trpc = useTRPC();

   const { data, isLoading, error } = useQuery(
      trpc.task.list.queryOptions(),
   );

   if (isLoading) return <p>Carregando...</p>;
   if (error) return <p>{error.message}</p>;

   return (
      <main className="flex justify-center bg-zinc-200 h-dvh">
         <div className='flex flex-col gap-5 w-200 h-3/4  bg-zinc-300 p-5 mt-20'>
            <h1 className="text-4xl font-bold pb-5 border-b border-b-zinc-200 text-center tracking-wider">
               <span className='text-indigo-700'>T</span>ask <span className='text-indigo-700 ml-2'>M</span>anager
            </h1>
            {data?.length === 0 && (
               <EmptyTask />
            )}
            <div className='flex justify-end'>
               <AiFillPlusSquare size={35} cursor={'pointer'} />
            </div>
            <TaskForm id="" />
            {data?.map((task) => (
               <TaskItem task={task} key={task.id} />
            ))}
         </div>
      </main>
   )
}