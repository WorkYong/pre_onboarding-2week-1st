import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentService } from "./comment.service";
import { CommentController } from "./comment.controller";
import { CommentRepository, ReactionRepository } from "./comment.repository";

@Module({
  imports: [TypeOrmModule.forFeature([CommentRepository, ReactionRepository])],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
