import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Categories, CategoryDocument } from 'src/schema/category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
   constructor(
      @InjectModel(Categories.name) 
      private categoryModel: Model<CategoryDocument>,
   ) { }

   async createCategory(data: CreateCategoryDto) {
      try {
         const categories = new this.categoryModel(data);
         await categories.save();
         return categories;
      } catch (error) {
         return error.message;
      }
   }

   async findAll() {
      try {
         const categories = await this.categoryModel.find();
         return {
            error: 1,
            data: categories,
            success: HttpStatus.OK
         }
      } catch (error) {
         return error.message;
      }
   }

   findOne(id: number) {
      return `This action returns a #${id} category`;
   }

   update(id: number, updateCategoryDto: UpdateCategoryDto) {
      return `This action updates a #${id} category`;
   }

   remove(id: number) {
      return `This action removes a #${id} category`;
   }
}
