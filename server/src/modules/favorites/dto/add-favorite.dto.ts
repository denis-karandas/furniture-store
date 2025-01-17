import { Type } from 'class-transformer';
import { IsNumber, Min } from 'class-validator';

export class AddFavoriteDto {
    @Type(() => Number)
    @Min(1)
    @IsNumber()
    product_id: number;
}
