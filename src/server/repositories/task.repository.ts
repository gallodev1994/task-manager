import 'server-only';

import { randomUUID } from 'node:crypto';
import type { Task } from '../domain/task';
import { sortedTasks } from '../helper/sortDate';

class TaskRepository {
  private tasks: Task[] = [];


  findAll(): Task[] {
    return sortedTasks(this.tasks);
  }

  create(data: Omit<Task, 'id' | 'dataCriacao'>): Task {
    const task: Task = {
      id: randomUUID(),
      ...data,
      dataCriacao: new Date(),
    };

    this.tasks.push(task);

    return task;
  }

  delete(id: string) {
    const index = this.tasks.findIndex(
      task => task.id === id
    );

    if (index === -1) {
      throw new Error('Task não encontrada');
    }

    const [deletedTask] = this.tasks.splice(index, 1);

    return deletedTask;
  }

  update(id: string, data: Partial<Task>) {
    const index = this.tasks.findIndex(
      task => task.id === id
    );
  }

}

export const taskRepository = new TaskRepository();