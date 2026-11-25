import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const useTask = () => {
   const ctx = useContext(TaskContext)

   if (!ctx) {
      throw new Error("useTasks deve ser usado dentro do TaskProvider");
   }
   return ctx;
}