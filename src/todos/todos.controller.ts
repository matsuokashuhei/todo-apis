import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTodoDTO } from './create-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}
  @Post()
  createTodo(@Body() body: CreateTodoDTO) {
    this.todosService.create(body);
  }
  @Get()
  findTodos() {
    return this.todosService.find();
  }
  @Get('/:id')
  findTodoById(@Param('id') id: string) {
    return this.todosService.findOne(parseInt(id));
  }
  @Patch('/:id')
  updateTodoStatus(@Param('id') id: string) {
    return this.todosService.update(parseInt(id));
  }
}
