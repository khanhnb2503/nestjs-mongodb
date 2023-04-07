import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Clients } from 'src/schema/client.schema';
import { CreateProgramDto } from './dto/create-program.dto';
import { ProgramDocument, Programs } from 'src/schema/program.schema';

@Injectable()
export class ProgramsService {
   constructor(
      @InjectModel(Programs.name) 
      private programModel: Model<ProgramDocument>
   ) { }

   async createProgram(
      dataProgram: CreateProgramDto,
   ) {
      try {
         const createdPost = new this.programModel(dataProgram);
         await createdPost.save()
         return createdPost;
      } catch (error) {
         throw new ConflictException('Add program error');
      }
   }

   async listAllProgram() {
      try {
         const program = await this.programModel.find().populate('clients');
         var result = {
            error: 1,
            data: program,
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

   async findOneProgram(id: string) {
      try {
         const programs = await this.programModel.findOne({ _id: id }).exec();
         var result = {
            error: 1,
            data: programs,
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

   async updatePrograms(id: string, data: CreateProgramDto, files) {
      try {
         const programs = await this.programModel.findOneAndUpdate(
            { _id: id }, data, { programs: true }
         );
         // return await this.bookModel.findByIdAndUpdate(id, book, {new: true})
         return programs;

      } catch (error) {
         var results = {
            error: 0,
            message: error.message
         };
         return results;
      }
   }

   async removeProgram(id: string) {
      try {
         const programs = await this.programModel.findOneAndDelete({ _id: id });
         return programs;
      } catch (error) {
         var results = {
            error: 0,
            message: error.message
         };
         return results;
      }
   }
}