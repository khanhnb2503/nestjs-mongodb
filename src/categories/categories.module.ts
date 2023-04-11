import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Categories, CategoriesSchema } from 'src/schema/category.schema';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';

@Module({
   imports: [MongooseModule.forFeature([
      { name: Categories.name, schema: CategoriesSchema }
   ])],
   controllers: [CategoriesController],
   providers: [CategoriesService]
})
export class CategoriesModule { }
