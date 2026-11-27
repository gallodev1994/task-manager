'use client';

import { Task } from "@/server/domain/task"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { useTask } from "../hooks/useTask";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTRPC } from "@/app/api/trpc/client";

interface TaskItemProps {
   task: Task
}

export const TaskItem = ({ task }: TaskItemProps) => {
   const trpc = useTRPC();
   const queryClient = useQueryClient();

   const { updateTask, setIsTaskFormOpened } = useTask();

   const deleteTask = useMutation(
      trpc.task.delete.mutationOptions({
         onSuccess: async (data) => {
            await queryClient.invalidateQueries({
               queryKey: trpc.task.list.queryKey(),
            })
         }
      })
   );

   const handleUpdateTask = () => {
      updateTask(task);
      setIsTaskFormOpened(true);
   }

   const handleDeleteTask = async () => {
      const canDelete = confirm("Deseja excluir a tarefa?");

      if (canDelete) {
         await deleteTask.mutateAsync({ id: task.id });
      }
   }




   return (
      <div key={task.id} className='w-[97%] flex justify-between border border-zinc-200 p-5'>
         <div className='flex flex-col gap-3'>
            <h2 className="flex flex-col">
               <span>Tarefa:</span>
               <strong >{task.titulo}</strong>
            </h2>
            <p className="flex flex-col">
               <span>Descrição:</span>
               <strong>{task.descricao}</strong>
            </p>
            <p className="flex flex-col">
               <span>Data Criação</span>
               <strong>
                  {
                     task.dataCriacao.toLocaleString('pt-BR', {
                        dateStyle: 'short',
                        timeStyle: 'short',
                     })
                  }
               </strong>
            </p>
         </div>
         <div className='flex gap-3 controls'>
            <AiFillEdit size={25} cursor={'pointer'} onClick={handleUpdateTask} />
            <AiFillDelete size={25} cursor={'pointer'} onClick={handleDeleteTask} />
         </div>
      </div>
   )
}