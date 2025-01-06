import { Injectable, UnauthorizedException } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserService } from 'modules/user/user.service';
import { User } from 'modules/user/user.entity';
import { RegisterDto } from './dto';
import { TokenService } from 'modules/token/token.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly tokenService: TokenService,
    ) {}

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

    async validateUserById(id: number): Promise<User> {
        const user = await this.userService.findById(id);
        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }

    async login(
        user: User
    ): Promise<{ user: User; accessToken: string; refreshToken: string; }> {
        const tokenPayload = TokenService.getTokenPayload(user);
        const accessToken = this.tokenService.generateAccessToken(tokenPayload);
        const refreshToken = this.tokenService.generateRefreshToken(tokenPayload);

        await this.tokenService.saveRefreshToken(user, refreshToken);

        return {
            user,
            accessToken,
            refreshToken,
        };
    }

    logout(refreshToken: string): Promise<DeleteResult> {
        if (!refreshToken) {
            throw new UnauthorizedException();
        }

        return this.tokenService.deleteTokenByValue(refreshToken);
    }

    async register(
        dto: RegisterDto
    ): Promise<{ user: User; accessToken: string; refreshToken: string; }> {
        const user = await this.userService.create(dto);

        const tokenPayload = TokenService.getTokenPayload(user);
        const accessToken = this.tokenService.generateAccessToken(tokenPayload);
        const refreshToken = this.tokenService.generateRefreshToken(tokenPayload);

        await this.tokenService.saveRefreshToken(user, refreshToken);

        return {
            user,
            accessToken,
            refreshToken,
        };
    }

    async refresh(
        user: User,
        refreshToken: string
    ): Promise<{ user: User; accessToken: string; refreshToken: string; }> {
        const token = await this.tokenService.findOne({
            where: { value: refreshToken },
            relations: { user: true },
        });
        if (!token || token.user?.id !== user.id) {
            throw new UnauthorizedException();  
        }

        const tokenPayload = TokenService.getTokenPayload(user);
        const accessToken = this.tokenService.generateAccessToken(tokenPayload);
        const newRefreshToken = this.tokenService.generateRefreshToken(tokenPayload);

        await this.tokenService.saveRefreshToken(user, newRefreshToken);

        return {
            user,
            accessToken,
            refreshToken: newRefreshToken,
        };
    }
}
