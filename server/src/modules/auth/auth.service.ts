import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from 'modules/user/user.service';
import { User } from 'modules/user/user.entity';
import { SignUpDto } from './dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async validateUser(email: string, password: string): Promise<User> {
        const user = await this.userService.findByEmail(email);
        if (!user) {
            throw new UnauthorizedException();
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new UnauthorizedException();
        }

        return user;
    }

    async validateUserByEmail(email: string): Promise<User> {
        const user = await this.userService.findByEmail(email);
        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }

    async signUp(dto: SignUpDto): Promise<User> {
        return this.userService.create(dto);
    }
}
