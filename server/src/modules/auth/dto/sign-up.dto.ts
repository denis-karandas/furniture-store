import { IsString } from 'class-validator';

export class SignUpDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    email: string;

    @IsString()
    phone: string;

    @IsString()
    password: string;
}