import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Products, ProductsSchema } from 'src/schema/product.schema';
import { Categories, CategoriesSchema } from 'src/schema/category.schema';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
   imports: [MongooseModule.forFeature([
      {name: Products.name, schema: ProductsSchema},
      {name: Categories.name, schema: CategoriesSchema}
   ])],
   controllers: [ProductsController],
   providers: [ProductsService]
})
export class ProductsModule { }
