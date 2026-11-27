import { useTRPC } from "@/app/api/trpc/client";
import { useTask } from "../hooks/useTask";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TRPCClientError } from "@trpc/client";
import { useState } from "react";

export const TaskForm = () => {
   const trpc = useTRPC();
   const { updateTask, task } = useTask();
   const queryClient = useQueryClient();
   const [error, setError] = useState<string>('');

   const createTask = useMutation(
      trpc.task.create.mutationOptions({
         onSuccess: async (data) => {
            console.log(data);
            await queryClient.invalidateQueries({
               queryKey: trpc.task.list.queryKey(),
            })
         }
      }));

   const handleCreateTask = async (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError('');

      if (!task.titulo) {
         return;
      }
      try {
         await createTask.mutateAsync({
            titulo: task.titulo,
            descricao: task.descricao,
         });

         await queryClient.invalidateQueries({
            queryKey: trpc.task.list.queryKey(),
         });

      } catch (error) {
         if (error instanceof TRPCClientError) {
            const zodErr = JSON.parse(error.data.zodError);
            if (zodErr instanceof Array) {
               zodErr.map((err) => {
                  setError(err.message)
               })
            }
         }
      }
   }

   const clearFields = () => {
      updateTask({
         titulo: '',
         descricao: ''
      })
   }

   return (
      <form className="flex flex-col gap-5" onSubmit={handleCreateTask}>
         <h2 className="flex flex-col">Titulo da tarefa*:
            <input type=" text"
               className="bg-white indent-2 mt-2 h-10"
               value={(task) ? task.titulo : ''}
               onChange={(e) => { updateTask({ titulo: e.target.value }) }}>
            </input>
         </h2>
         <p className="flex flex-col">Descrição da tarefa:
            <textarea
               className="bg-white indent-2 mt-2 h-40 p-1.5"
               value={(task) ? task.descricao : ''}
               onChange={(e) => { updateTask({ descricao: e.target.value }) }}>
            </textarea>
         </p>
         {error &&
            <div className="error text-red-600">
               {error}
            </div>
         }
         <div className="flex justify-end gap-5">
            <button
               onClick={() => clearFields()}
               className="border border-bg-zinc-200 w-20 h-12 cursor-pointer rounded-xl font-bold hover:bg-zinc-200">
               Limpar
            </button>
            <button
               type="submit"
               className="bg-green-400 w-20 h-12 cursor-pointer rounded-xl font-bold hover:bg-green-300">
               Salvar
            </button>
         </div>
      </form>
   )
}




