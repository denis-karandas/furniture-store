import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    findById(id: number): Promise<User> {
        return this.userRepository.findOneBy({ id });
    }

    findByEmail(email: string): Promise<User> {
        return this.userRepository.findOneBy({ email });
    }

    async create(dto: CreateUserDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(dto.password, 10);

        return this.userRepository.save({ ...dto, password: hashedPassword });
    }

    static format(user: User) {
        const { password, ...anotherFields } = user;

        return anotherFields;
    };
}