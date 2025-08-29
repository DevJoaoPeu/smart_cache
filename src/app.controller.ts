import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateProcedureDto } from './dto/create-procedure.dto';
import { ProceduresEntity } from './entity/procedure.entity';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create')
  createProcedure(@Body() { name }: CreateProcedureDto): void {
    return this.appService.createProcedure(name);
  }

  @Get('get')
  async getProcedure(): Promise<ProceduresEntity[]> {
   return await this.appService.getProcedure();
  }
}
