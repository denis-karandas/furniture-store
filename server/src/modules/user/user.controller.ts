import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'guards';
import { CreateUserDto } from './dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    // @UseGuards(JwtGuard)
    @HttpCode(201)
    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.userService.create(dto);
    }
}