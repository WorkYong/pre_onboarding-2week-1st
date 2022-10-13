import { EntityRepository, Repository } from "typeorm";
import { Comments } from "./comment.entity";
import { Reactions } from "./reaction.entity";
import { CommentCreateDto } from "./dto/comment.create.dto";
import { ReactionCreateDto } from "./dto/reaction.create.dto";

@EntityRepository(Comments)
export class CommentRepository extends Repository<Comments> {
  async createComment(commentCreateDto: CommentCreateDto): Promise<Comments> {
    const { content, post_id, user_id } = commentCreateDto;

    const comment = this.create({
      content,
      post_id,
      user_id,
    });

    await this.save(comment);
    return comment;
  }
}

@EntityRepository(Reactions)
export class ReactionRepository extends Repository<Reactions> {
  async createReaction(
    reactionCreateDto: ReactionCreateDto
  ): Promise<Reactions> {
    const { type_id, post_id, user_id } = reactionCreateDto;

    const reaction = this.create({
      type_id,
      post_id,
      user_id,
    });

    await this.save(reaction);
    return reaction;
  }
}
