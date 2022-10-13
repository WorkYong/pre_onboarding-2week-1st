import { PrimaryGeneratedColumn, Column, PrimaryColumn, Entity } from "typeorm";

@Entity()
export class Reactions {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  post_id!: number;

  @Column()
  user_id!: number;

  @Column()
  type_id!: number;
}
