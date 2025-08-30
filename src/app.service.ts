import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProceduresEntity } from './entity/procedure.entity';
import { Repository } from 'typeorm';
import { ICreatedProcedure } from './interface/created-procedure.interface';

@Injectable()
export class AppService {
  @Inject(CACHE_MANAGER) 
  private cacheManager: Cache;

  constructor(
    @InjectRepository(ProceduresEntity) 
    private readonly procedureRepository: Repository<ProceduresEntity>
  ) {}

  createProcedure(name: string): ICreatedProcedure {
    this.procedureRepository.save({ name });

    return {
      status: HttpStatus.CREATED,
      message: 'Procedure created successfully',
    }
  }

  async getProcedure(): Promise<ProceduresEntity[]> {
    return await this.procedureRepository.find({
      where: { active: true },
      select: ['id', 'name', 'createdAt', 'active'],
    });
  }

  inactivateProcedure(id: number): ICreatedProcedure {
    this.procedureRepository.update({ id }, { active: false });

    return {
      status: HttpStatus.OK,
      message: 'Procedure inactivate successfully',
    }
  }
}
