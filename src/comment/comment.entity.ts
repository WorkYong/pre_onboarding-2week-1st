import { PrimaryGeneratedColumn, Column, PrimaryColumn, Entity } from "typeorm";

@Entity()
export class Comments {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  content!: string;

  @Column()
  post_id!: number;

  @Column()
  user_id!: number;
}
