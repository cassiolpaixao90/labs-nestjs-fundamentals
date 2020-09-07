import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Public } from 'src/common/decorators/public.decorator';
import { CoffeesService } from './coffees.service';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import { Protocol } from 'src/common/decorators/protocol.decorator';

@Controller('coffees')
export class CoffeesController {

  constructor(private readonly coffeesService: CoffeesService) {}

  @Public()
  @Get()
  findAll(@Protocol('https') protocol: string, @Query() paginationQuery: PaginationQueryDto) {
    console.log('protocol', protocol);    
    return this.coffeesService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.coffeesService.findOne(String(id));
  }

  @Post()
  create(@Body() body) {
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}