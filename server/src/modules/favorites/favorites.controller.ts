import { Body, Controller, Delete, Get, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from 'guards';
import { AddFavoriteDto, FindAllProductsDto } from './dto';
import { UserFavoritesService } from 'modules/user/user-favorites.service';

@UseGuards(JwtGuard)
@Controller('favorites')
export class FavoritesController {
    constructor(private readonly userFavoritesService: UserFavoritesService) {}

    @Get()
    findAll(
        @Req() req: Request,
        @Query() dto: FindAllProductsDto
    ) {
        return this.userFavoritesService.findAll(dto, req.user.id);
    }

    @Post()
    add(
        @Req() req: Request,
        @Body() dto: AddFavoriteDto
    ) {
        return this.userFavoritesService.add(req.user.id, dto.product_id);
    }

    @Delete(':product_id')
    deleteOne(
        @Req() req: Request,
        @Param('product_id') product_id: number
    ) {
        return this.userFavoritesService.deleteOne(req.user.id, product_id);
    }
}
