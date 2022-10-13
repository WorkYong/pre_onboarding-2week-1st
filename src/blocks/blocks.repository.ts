import { EntityRepository, Repository } from "typeorm";
import { Blocks } from "./blocks.entity";

@EntityRepository(Blocks)
export class BlocksRepository extends Repository<Blocks> {

}