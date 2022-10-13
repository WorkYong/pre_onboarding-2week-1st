import { IsNotEmpty, Max, MaxLength } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty()
  @MaxLength(100)
  title: string;

  @IsNotEmpty()
  @MaxLength(5000)
  content: string;

  @IsNotEmpty()
  user_id: number;

  @IsNotEmpty()
  status: boolean;

  createdAt: Date;

  updatedAt: Date;
}
