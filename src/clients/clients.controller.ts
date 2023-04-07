import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Clients')
@Controller('api')
export class ClientsController {
	constructor(private readonly clientsService: ClientsService) { }

	@Post('addClients')
	create(@Body() clientData: CreateClientDto) {
		return this.clientsService.create(clientData);
	}

	@Get('listAllClients')
	findAll() {
		return this.clientsService.findAll();
	}

	@Get('listOneClients:id')
	findOne(@Param('id') id: string) {
		return this.clientsService.findOne(id);
	}

	@Patch('updateClient:id')
	update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
		return this.clientsService.update(id, updateClientDto);
	}

	@Delete('deleteClient:id')
	remove(@Param('id') id: string) {
		return this.clientsService.remove(id);
	}
}
