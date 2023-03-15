import { IsString, MinLength } from 'class-validator';

export class TodoDTO {
  @IsString()
  @MinLength(5)
  description: string;

  status: string;
}
