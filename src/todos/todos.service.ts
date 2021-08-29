import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDTO } from './create-todo.dto';
import { Todos } from './todos.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todos) private readonly repository: Repository<Todos>,
  ) {}

  create(body: CreateTodoDTO) {
    const todo = this.repository.create(body);
    return this.repository.save(todo);
  }

  find() {
    return this.repository.find();
  }

  findOne(id: number) {
    if (!id) return null;
    return this.repository.findOne(id);
  }

  async update(id: number) {
    const todo = await this.repository.findOne(id);
    if (!todo) {
      throw new NotFoundException('Todo not found');
    }
    return this.repository.save({ ...todo, isCompleted: true });
  }
}
