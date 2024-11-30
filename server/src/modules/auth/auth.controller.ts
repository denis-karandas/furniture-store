import { Body, Controller, Get, HttpCode, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtGuard, JwtRefreshGuard, LocalGuard } from 'guards';
import { AuthService } from './auth.service';
import { RegistrationDto } from './dto';
import { UserService } from 'modules/user/user.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {}

    @UseGuards(JwtGuard)
    @HttpCode(200)
    @Get('user')
    async loginByAccessToken(@Req() req: Request) {
        return {
            user: UserService.format(req.user),
        };
    }

    @UseGuards(LocalGuard)
    @HttpCode(200)
    @Post('login')
    async signIn(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response
    ) {
        const { user, accessToken, refreshToken } = await this.authService.login(req.user);

        res.cookie('accessToken', accessToken, {
            maxAge: Number(process.env.JWT_ACCESS_TOKEN_MAX_AGE),
            httpOnly: true,
        });
        res.cookie('refreshToken', refreshToken, {
            maxAge: Number(process.env.JWT_REFRESH_TOKEN_MAX_AGE),
            httpOnly: true,
        });

        return {
            user: UserService.format(user),
        };
    }

    @HttpCode(200)
    @Post('logout')
    async logout(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response
    ) {
        const { refreshToken } = req.cookies;

        await this.authService.logout(refreshToken);

        res.clearCookie('refreshToken');

        return {
            message: 'The user has successfully logged out',
            statusCode: 200,
        };
    }

    @HttpCode(201)
    @Post('registration')
    async registration(
        @Res({ passthrough: true }) res: Response,
        @Body() dto: RegistrationDto
    ) {
        const { user, accessToken, refreshToken } = await this.authService.registration(dto);

        res.cookie('accessToken', accessToken, {
            maxAge: Number(process.env.JWT_ACCESS_TOKEN_MAX_AGE),
            httpOnly: true,
        });
        res.cookie('refreshToken', refreshToken, {
            maxAge: Number(process.env.JWT_REFRESH_TOKEN_MAX_AGE),
            httpOnly: true,
        });

        return {
            user: UserService.format(user),
        };
    }

    @UseGuards(JwtRefreshGuard)
    @HttpCode(200)
    @Post('refresh')
    async refresh(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response
    ) {
        const { refreshToken } = req.cookies;

        const {
            user,
            accessToken,
            refreshToken: newRefreshToken
        } = await this.authService.refresh(req.user, refreshToken);

        res.cookie('accessToken', accessToken, {
            maxAge: Number(process.env.JWT_ACCESS_TOKEN_MAX_AGE),
            httpOnly: true,
        });
        res.cookie('refreshToken', newRefreshToken, {
            maxAge: Number(process.env.JWT_REFRESH_TOKEN_MAX_AGE),
            httpOnly: true,
        });

        return {
            user: UserService.format(user),
        };
    }
}
