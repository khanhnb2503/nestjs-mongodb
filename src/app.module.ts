import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';

console.log(ConfigModule)
@Module({
   
   imports: [
      MongooseModule.forRoot('mongodb://127.0.0.1:27017/test-api'),
      MulterModule.register({dest: './uploads',}),
      ProductsModule,
      CategoriesModule,
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule { }
