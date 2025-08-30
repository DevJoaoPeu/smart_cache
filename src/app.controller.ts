import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateProcedureDto } from './dto/create-procedure.dto';
import { ProceduresEntity } from './entity/procedure.entity';
import type { ICreatedProcedure } from './interface/created-procedure.interface';

@Controller('procedure')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create')
  createProcedure(@Body() { name }: CreateProcedureDto): ICreatedProcedure {
    return this.appService.createProcedure(name);
  }

  @Get('get')
  async getProcedure(): Promise<ProceduresEntity[]> {
   return await this.appService.getProcedure();
  }
}
