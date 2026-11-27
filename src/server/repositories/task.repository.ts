import 'server-only';

import { randomUUID } from 'node:crypto';
import type { Task } from '../domain/task';

class TaskRepository {
  private tasks: Task[] = [{
    id: randomUUID(),
    titulo: 'teste',
    dataCriacao: new Date(),
    descricao: 'teste'
  },
  {
    id: randomUUID(),
    titulo: 'teste2',
    dataCriacao: new Date(),
    descricao: 'teste'
  },
  {
    id: randomUUID(),
    titulo: 'teste3',
    dataCriacao: new Date(),
    descricao: 'teste'
  },
  {
    id: randomUUID(),
    titulo: 'teste4',
    dataCriacao: new Date(),
    descricao: 'teste'
  },
  {
    id: randomUUID(),
    titulo: 'teste5',
    dataCriacao: new Date(),
    descricao: 'teste'
  }
  ];

  findAll(): Task[] {
    return [...this.tasks];
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
    const task = this.tasks.find((task) => task.id === id);


  }

}

export const taskRepository = new TaskRepository();