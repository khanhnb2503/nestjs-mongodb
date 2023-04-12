import {
   Controller,
   Get,
   Post,
   Body,
   Patch,
   Param,
   Delete,
   UploadedFile,
   UseInterceptors,
} from '@nestjs/common';
import { ApiTags, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@ApiTags('Products')
@Controller('api')
export class ProductsController {
   constructor(private readonly productsService: ProductsService) { }

   @Post('addProduct')
   @ApiConsumes('multipart/form-data')
   @UseInterceptors(FileInterceptor('image', {
      storage: diskStorage({
         destination: './products',
         filename: (req, file, cb) => {
            const fileNameSplit = file.originalname.split('.');
            const fileExt = fileNameSplit[fileNameSplit.length - 1];
            cb(null, `${Date.now()}.${fileExt}`)
         }
      })
   }))
   create(
      @Body() data: CreateProductDto,
      @UploadedFile() file: Express.Multer.File
   ) {
      data.image = file.originalname;
      return this.productsService.createProducts(data);
   }

   @Get('listAllProduct')
   findAll() {
      return this.productsService.listAllProducts();
   }

   @Get('listOneProduct/:id')
   findOne(@Param('id') id: string) {
      return this.productsService.listOneProduct(id);
   }

   @ApiConsumes('multipart/form-data')
   @UseInterceptors(FileInterceptor('image', {
      storage: diskStorage({
         destination: './products',
         filename: (req, file, cb) => {
            const fileNameSplit = file.originalname.split('.');
            const fileExt = fileNameSplit[fileNameSplit.length - 1];
            cb(null, `${Date.now()}.${fileExt}`)
         }
      })
   }))
   @Patch('updateProduct/:id')
   update(
      @Param('id') id: string,
      @Body() data: UpdateProductDto,
      @UploadedFile() file: Express.Multer.File
   ) {
      data.image = file.originalname;
      return this.productsService.updateProducts(id, data);
   }

   @Delete('deleteProduct/:id')
   remove(@Param('id') id: string) {
      return this.productsService.removeProducts(id);
   }

   @Get('paging/:pageIndex/:pageSize/:sortName/:sortType')
   paging(
      @Param('pageIndex') pageIndex: number,
      @Param('pageSize') pageSize: number,
   ) {
      return this.productsService
         .paging(
            pageSize,
            pageIndex,
         );
   };

   @Get('search/:keyword')
   search(@Param('keyword') keyword: string) {
      return this.productsService.searchProducts(keyword);
   }
}
