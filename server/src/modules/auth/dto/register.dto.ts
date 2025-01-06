import { IsString } from 'class-validator';

export class RegisterDto {
    @IsString()
    first_name: string;

    @IsString()
    last_name: string;

    @IsString()
    email: string;

    @IsString()
    phone: string;

    @IsString()
    password: string;
}