import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { Clients, ClientsSchema } from 'src/schema/client.schema';

@Module({
   imports:[MongooseModule.forFeature([
      {name: Clients.name, schema: ClientsSchema}
   ])],
   controllers: [ClientsController],
   providers: [ClientsService]
})
export class ClientsModule { }
