import { IsString } from 'class-validator';

export class RegistrationDto {
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