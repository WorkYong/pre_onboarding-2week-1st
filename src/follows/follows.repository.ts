import { EntityRepository, Repository } from "typeorm";
import { Follows } from "./follows.entity";

@EntityRepository(Follows)
export class FollowsRepository extends Repository<Follows> {

}