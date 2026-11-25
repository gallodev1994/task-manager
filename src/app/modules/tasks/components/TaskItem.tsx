'use client';

import { Task } from "@/server/domain/task"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
//import { useState } from 'react';

interface TaskItemProps {
   task: Omit<Task, 'dataCriacao'>
}

export const TaskItem = ({ task }: TaskItemProps) => {
   //const [isUpdate, setIsUpdate] = useState<boolean>(false); SETA O ID

   const fillableTask = (
      <div className='flex flex-col gap-3'>
         <h2 className="flex flex-col">Tarefa: <strong >{task.titulo}</strong></h2>
         <p className="flex flex-col">Descrição:  <strong>{task.descricao}</strong></p>
      </div>
   )

   return (
      <div key={task.id} className='flex justify-between border border-zinc-200 p-5'>
         {fillableTask}
         <div className='flex gap-3 controls'>
            <AiFillEdit size={25} cursor={'pointer'} />
            <AiFillDelete size={25} cursor={'pointer'} />
         </div>
      </div>
   )
}