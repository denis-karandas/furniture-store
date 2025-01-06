import { Transform, Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class FindAllProductsDto {
    @Type(() => Number)
    @Min(1)
    @Max(10000)
    @IsInt()
    @IsOptional()
    @Transform(({ value }) => value ?? 10)
    limit?: number;

    @Type(() => Number)
    @Min(1)
    @Max(10000)
    @IsInt()
    @IsOptional()
    @Transform(({ value }) => value ?? 1)
    page?: number;
}
