'use client';

import { useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Task } from "@/server/domain/task"

export const TaskProvider = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const [tasks, setTasks] = useState<Task[]>([])
   const [newTask, setNewTask] = useState<Task | null>(null);


   return (
      <TaskContext.Provider value={{
         tasks,
         setTasks,
         newTask,
         setNewTask
      }}>
         {children}
      </TaskContext.Provider>
   )
}