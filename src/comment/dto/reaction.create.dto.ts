import { IsNotEmpty } from "class-validator";

export class ReactionCreateDto {
  @IsNotEmpty()
  post_id: number;

  @IsNotEmpty()
  user_id: number;

  @IsNotEmpty()
  type_id: number;
}
