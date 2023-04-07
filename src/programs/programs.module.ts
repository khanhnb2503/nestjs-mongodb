import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Programs, ProgramSchema } from 'src/schema/program.schema';
import { ProgramsService } from './programs.service';
import { ProgramsController } from './programs.controller';

@Module({
   imports: [MongooseModule.forFeature([
      {name: Programs.name, schema: ProgramSchema}
   ])],
   controllers: [ProgramsController],
   providers: [ProgramsService]
})
export class ProgramsModule { }
