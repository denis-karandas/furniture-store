import { IsNumberString } from 'class-validator';

export class CreateProductImageDto {
    @IsNumberString()
    order: number;
}