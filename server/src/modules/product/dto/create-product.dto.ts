import { Type } from 'class-transformer';
import { IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
    @IsString()
    name: string;

    @Type(() => Number)
    @Min(0)
    @IsNumber()
    price: number;
}
