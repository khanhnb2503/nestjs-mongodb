import {
   Controller,
   Get,
   Post,
   Body,
   Patch,
   Param,
   Delete,
   Res,
   UploadedFile,
   UseInterceptors,
   Put
} from '@nestjs/common';
import { ApiTags, ApiConsumes } from '@nestjs/swagger';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';

import { ProgramsService } from './programs.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';

@ApiTags('Programs')
@Controller('api')
export class ProgramsController {
   constructor(private readonly programsService: ProgramsService) { }

   @Post('addProgram')
   @ApiConsumes('multipart/form-data')
   @UseInterceptors(FileInterceptor('image', {
      storage: diskStorage({
         destination: './uploads',
         filename: (req, file, cb) => {
            const fileNameSplit = file.originalname.split('.');
            const fileExt = fileNameSplit[fileNameSplit.length - 1];
            cb(null, `${Date.now()}.${fileExt}`)
         }
      })
   }
   ))
   createProgram(
      @Body() dataProgram: CreateProgramDto,
      @UploadedFile() file: Express.Multer.File
   ) {
      var clientIds:any = dataProgram.clients;
      if(!Array.isArray(clientIds) && clientIds.indexOf(",") !== -1){
         dataProgram.clients = clientIds.split(",");
      }
      dataProgram.image = file.originalname;
      return this.programsService.createProgram(dataProgram);
   }

   @Get('listAllProgram')
   findAll() {
      return this.programsService.listAllProgram();
   }

   @Get('listOneProgram:id')
   async findOneProgram(@Param('id') id: string, @Res() res: Response) {
      try {
         const programs = await this.programsService.findOneProgram(id);
         res.send(programs);
      } catch (error) {
         res.send(error.message);
      }
   }

   // @Put('updateProgram:id')
   // @ApiConsumes('multipart/form-data')
   // @UseInterceptors(FileInterceptor('image'))
   // async updatePrograms(
   //    @Param('id') id: string,
   //    @Body() data: CreateProgramDto,
   //    @UploadedFile() file: Express.Multer.File,
   // ) {
   //    return await this.programsService.updatePrograms(id, data, file);
   // }

   @Delete('deleteProgram:id')
   removeProgram(@Param('id') id: string) {
      return this.programsService.removeProgram(id);
   }
}
