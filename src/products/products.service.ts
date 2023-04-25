import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ProductDocument, Products } from 'src/schema/product.schema';
import { CategoryDocument, Categories } from 'src/schema/category.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
   constructor(
      @InjectModel(Products.name)
      @InjectModel(Categories.name)
      private productModel: Model<ProductDocument>,
   ) { }

   async createProducts(
      data: CreateProductDto
   ) {
      try {
         const createdProducts = new this.productModel(data);
         await createdProducts.save();
         const { _id } = createdProducts;

         return createdProducts;
      } catch (error) {
         throw new ConflictException('Add products error');
      }
   }

   async listAllProducts() {
      try {
         const products = await this.productModel
            .find()
            // .sort({name: 1})
         // .populate('categoryId')
         var result = {
            error: 1,
            data: products,
            status: HttpStatus.OK
         }
         return result;
      } catch (error) {
         var results = {
            error: 0,
            message: error.message
         };
         return results;
      }
   }

   async listOneProduct(id: string) {
      try {
         const products = await this.productModel
            .findOne({ _id: id })
         // .populate('categoryId')
         var result = {
            error: 1,
            data: products,
            status: HttpStatus.OK
         }
         return result;
      } catch (error) {
         var results = {
            error: 0,
            message: error.message
         };
         return results;
      }
   }

   async updateProducts(id: string, data: UpdateProductDto) {
      try {
         const products = await this.productModel
            .findOneAndUpdate(
               { _id: id }, data, { new: true }
            );
         return products;
      } catch (error) {
         return error.message;
      }
   }

   async removeProducts(id: string) {
      try {
         const products = await this.productModel
            .findByIdAndDelete({ _id: id });
         return products;
      } catch (error) {
         return error.message;
      }
   }

   async paging(
      pageSize: number,
      pageIndex: number,
   ) {
      // limit: Giới hạn số lượng kết quả trả về
      // skip: Vị trị record bắt đầu lấy trong 1 collections;
      try {
         const products = await this.productModel
            .find()
            .limit(pageSize)
            .skip(pageIndex)
            // .sort({ name: -1 })

         // .populate('categoryId');
         var result = {
            error: 1,
            data: products,
            status: HttpStatus.OK
         }
         return result;
      } catch (error) {
         var results = {
            error: 0,
            message: error.message
         };
         return results;
      }
   };

   async searchProducts(keyword: string) {
      try {
         const products = await this.productModel
            .find({$text: {$search: keyword}})
         var result = {
            error: 1,
            data: products,
            status: HttpStatus.OK
         };
         return result;
      } catch (error) {
         return error.message;
      }
   }
}
