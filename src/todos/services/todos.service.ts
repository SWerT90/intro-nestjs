import { Injectable } from '@nestjs/common';
import { Todo } from '../controllers/todos.controller';
import { TodoDTO } from '../models/todo.dto';

@Injectable()
export class TodosService {
  private todos: Todo[] = [
    {
      id: 1,
      description: 'Learn TS',
      status: 'wip',
    },
    {
      id: 2,
      description: 'Learn NESTjs',
      status: 'just starting',
    },
    {
      id: 22,
      description: 'Learning',
      status: 'done 😎',
    },
  ];

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos.find((t) => t.id === id);
  }

  createTodo(todo: TodoDTO): number {
    const newTodoId = Math.max(...this.todos.map((t) => t.id)) + 1;
    const newTodo: Todo = {
      id: newTodoId,
      ...todo,
    };

    this.todos.push(newTodo);
    return newTodoId;
  }
}
