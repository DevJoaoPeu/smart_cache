import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProceduresEntity } from './entity/procedure.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  @Inject(CACHE_MANAGER) 
  private cacheManager: Cache;

  constructor(
    @InjectRepository(ProceduresEntity) 
    private readonly procedureRepository: Repository<ProceduresEntity>
  ) {}

  createProcedure(name: string): void {
    this.procedureRepository.save({ name });
  }

  async getProcedure(): Promise<ProceduresEntity[]> {
    return await this.procedureRepository.find();
  }
}
