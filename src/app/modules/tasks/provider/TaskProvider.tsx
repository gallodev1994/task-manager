'use client';

import { useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Task } from "@/server/domain/task"

export const TaskProvider = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const [task, setTask] = useState<Partial<Task>>(
      {
         titulo: "",
      }
   );
   const [isTaskFormOpened, setIsTaskFormOpened] = useState<boolean>(false);

   const updateTask = (data: Partial<Task>) => {
      setTask((prev) => ({
         ...prev,
         ...data
      }));
   }


   return (
      <TaskContext.Provider value={{
         task,
         updateTask,
         isTaskFormOpened,
         setIsTaskFormOpened
      }}>
         {children}
      </TaskContext.Provider>
   )
}