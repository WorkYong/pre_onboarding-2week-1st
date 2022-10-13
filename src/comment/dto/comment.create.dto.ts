import { IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class CommentCreateDto {
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @Type(() => Number)
  post_id: number;

  @IsNotEmpty()
  @Type(() => Number)
  user_id: number;
}
