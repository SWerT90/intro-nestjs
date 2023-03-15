import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TodoDTO } from '../models/todo.dto';
import { TodosService } from '../services/todos.service';

export interface Todo {
  id: number;
  description: string;
  status: string;
}

@Controller('/todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos(): Todo[] {
    return this.todosService.getAllTodos();
  }

  @Get('/:id')
  getTodo(@Param('id', ParseIntPipe) id: number): Todo {
    return this.todosService.getTodoById(id);
  }

  @Post()
  createTodo(@Body() todo: TodoDTO): number {
    return this.todosService.createTodo(todo);
  }
}
