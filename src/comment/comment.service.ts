import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CommentCreateDto } from "./dto/comment.create.dto";
import { CommentRepository, ReactionRepository } from "./comment.repository";
import { ReactionCreateDto } from "./dto/reaction.create.dto";

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentRepository)
    private commentRepository: CommentRepository,
    @InjectRepository(ReactionRepository)
    private reactionRepository: ReactionRepository
  ) {}

  async createComment(commentCreateDto: CommentCreateDto) {
    return this.commentRepository.create(commentCreateDto);
  }

  async updateComment(
    post_id: number,
    commentCreateDto: CommentCreateDto
  ): Promise<void> {
    await this.commentRepository.update(post_id, commentCreateDto);
  }

  async deleteComment(id: number): Promise<void> {
    await this.commentRepository.delete({ id: id });
  }

  async createReaction(reactionCreateDto: ReactionCreateDto) {
    await this.reactionRepository.create(reactionCreateDto);
  }

  async deleteReaction(id: number): Promise<void> {
    await this.reactionRepository.delete({ id: id });
  }
}
