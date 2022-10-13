import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Blocks extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  apply_user_id: number;

  @Column()
  receive_user_id: number;
  
}