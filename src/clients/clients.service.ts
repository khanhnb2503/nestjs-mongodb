import { Injectable,HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Clients, ClientsDocument } from 'src/schema/client.schema';

@Injectable()
export class ClientsService {
   constructor(
      @InjectModel(Clients.name) private clientModel: Model<ClientsDocument>
   ){}
   async create(clientData: CreateClientDto): Promise<ClientsDocument> {
      try {
         const clients = new this.clientModel(clientData);
         await clients.save();
         return clients;
      } catch (error) {
         return error.message;
      }
   }

   async findAll() {
      try {
         const clients = await this.clientModel.find().exec();
         var result = {
            error: 1,
            data: clients,
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

   findOne(id: string) {
      return `This action returns a #${id} client`;
   }

   update(id: string, updateClientDto: UpdateClientDto) {
      return `This action updates a #${id} client`;
   }

   remove(id: string) {
      return `This action removes a #${id} client`;
   }
}
