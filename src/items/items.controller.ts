import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param
} from '@nestjs/common';
// Req, Res
import { CreateItemDto } from './dto/create-item.dto';
// import { Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interfaces';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
    // return 'Get all Items';
  }
  // findAll(@Req() req: Request, @Res() res: Response): Response {
  //   console.log(req.url);
  //   return res.send('Hello World');
  // }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }
  // findOne(@Param() param): string {
  // return `Item ${param.id}`;
  // }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} Desc:${createItemDto.desc}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Update ${id} - Name: ${updateItemDto.name}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }
}
