import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

// import {Block} from 

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;
    
    @Column()
    is_active: boolean = false;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    // @OneToMany((type) => Block, (block) => user.parent)
    // children: User[]

    // @OneToMany((type) => Block, (block) => user.parent)
    // children: User[]
    
    // @OneToMany((type) => Block, (block) => user.parent)
    // children: User[]

    // @OneToMany((type) => Block, (block) => user.parent)
    // children: User[]
}   