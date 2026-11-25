import { Task } from "@/server/domain/task"

export type TaskFormProps = Pick<Task, "id">;

export const TaskForm = ({ id }: TaskFormProps) => { 
   return <></>
}

/*
export const TaskForm = ({ id }: TaskFormProps) => {
   return 1
   const editableTask = (
      <div className='flex flex-col gap-3'>
         <h2 className="flex flex-col">Tarefa: <input type=" text" value={task.titulo} onChange={() => { }} className="bg-white indent-2 mt-2"></input></h2>
         <p className="flex flex-col">Descrição:  <textarea value={task.descricao} onChange={() => { }} className="bg-white indent-2 mt-2"></textarea></p>
      </div >
   )

   const taskContent = (isUpdate) ? editableTask : fillableTask
      < div className = 'flex justify-between border border-zinc-200 p-5' >
         <div className='flex flex-col gap-3'>
            <h3 className='text-xl font-bold'>Nova tarefa (salvo automatico)</h3>
            <h2 className="flex flex-col">Tarefa: <input type=" text" value={""} onChange={() => { }} className="bg-white indent-2 mt-2"></input></h2>
            <p className="flex flex-col">Descrição:  <textarea value={""} onChange={() => { }} className="bg-white indent-2 mt-2"></textarea></p>
         </div >
          </div >
}
*/
