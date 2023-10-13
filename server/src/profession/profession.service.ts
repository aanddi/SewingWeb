import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class ProfessionService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.profession.findMany()
  }
}
