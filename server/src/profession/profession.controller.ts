import { Controller, Get } from '@nestjs/common';
import { ProfessionService } from './profession.service';

@Controller('profession')
export class ProfessionController {
  constructor(private readonly professionService: ProfessionService) {}

  @Get()
  getAllProfession() {
    return this.professionService.getAll()
  }
}
