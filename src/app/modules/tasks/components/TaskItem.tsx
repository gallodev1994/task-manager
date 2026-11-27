'use client';

import { Task } from "@/server/domain/task"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { useTask } from "../hooks/useTask";

interface TaskItemProps {
   task: Omit<Task, 'dataCriacao'>
}

export const TaskItem = ({ task }: TaskItemProps) => {
   const { updateTask, setIsTaskFormOpened } = useTask();

   const handleUpdateTask = () => {
      updateTask(task);
      setIsTaskFormOpened(true);
   }

   const handleDeleteTask = (id: string) => {
      const canDelete = confirm("Deseja excluir a tarefa?");

      if (canDelete) {
         alert(id);
      }
   }


   return (
      <div key={task.id} className='w-[97%] flex justify-between border border-zinc-200 p-5'>
         <div className='flex flex-col gap-3'>
            <h2 className="flex flex-col">Tarefa: <strong >{task.titulo}</strong></h2>
            <p className="flex flex-col">Descrição:  <strong>{task.descricao}</strong></p>
         </div>
         <div className='flex gap-3 controls'>
            <AiFillEdit size={25} cursor={'pointer'} onClick={handleUpdateTask} />
            <AiFillDelete size={25} cursor={'pointer'} onClick={() => handleDeleteTask(task.id)} />
         </div>
      </div>
   )
}