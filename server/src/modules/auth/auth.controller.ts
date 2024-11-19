import { Body, Controller, Get, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { JwtGuard, LocalGuard } from 'guards';
import { AuthService } from './auth.service';
import { TokenService } from 'modules/token/token.service';
import { UserService } from 'modules/user/user.service';
import { SignUpDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly tokenService: TokenService
    ) {}

    @UseGuards(LocalGuard)
    @HttpCode(200)
    @Post('sign-in')
    async signIn(@Req() request) {
        const accessToken = this.tokenService.generateAccessToken({ email: request.user.email });
        
        return {
            user: UserService.format(request.user),
            accessToken,
        };
    }

    @HttpCode(201)
    @Post('sign-up')
    async signUp(@Body() dto: SignUpDto) {
        const user = await this.authService.signUp(dto);
        const accessToken = this.tokenService.generateAccessToken({ email: dto.email });

        return {
            user: UserService.format(user),
            accessToken,
        };
    }

    @UseGuards(JwtGuard)
    @HttpCode(200)
    @Get('user')
    async loginByAccessToken(@Req() request) {

        return {
            user: UserService.format(request.user),
        };
    }
}
