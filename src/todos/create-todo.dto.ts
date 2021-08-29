import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDTO {
  @IsNotEmpty()
  @IsString()
  todo: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
