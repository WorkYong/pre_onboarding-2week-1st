import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";
import { UserCreateDto } from "./dto/user.create.dto";
import * as bcrypt from 'bcryptjs'
import { ConflictException, InternalServerErrorException } from "@nestjs/common";


@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(userCreateDto: UserCreateDto): Promise<void> {
        const { email, password} =
        userCreateDto;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = this.create({ email, password: hashedPassword });
        
        try {
            await this.save(user);
        } catch (error) {
            if(error.code === '23505') {
                throw new ConflictException('Existing email');
            } else {
                throw new InternalServerErrorException();
            }
        }

    }
}