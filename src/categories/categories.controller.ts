import {
   Controller,
   Get,
   Post,
   Body,
   Patch,
   Param,
   Delete
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@ApiTags('Categories')
@Controller('api')
export class CategoriesController {
   constructor(private readonly categoriesService: CategoriesService) { }

   @Post('addCategory')
   createCategory(@Body() data: CreateCategoryDto) {
      return this.categoriesService.createCategory(data);
   }

   @Get('listAllCategory')
   findAll() {
      return this.categoriesService.findAll();
   }

   @Get('listOneCategory:id')
   findOne(@Param('id') id: string) {
      return this.categoriesService.findOne(+id);
   }

   @Patch('updateCategory:id')
   update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
      return this.categoriesService.update(+id, updateCategoryDto);
   }

   @Delete('deleteCategory:id')
   remove(@Param('id') id: string) {
      return this.categoriesService.remove(+id);
   }
}
