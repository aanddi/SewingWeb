import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService
  ) {}

  // получение юзера по id
  getUserById(dto: User) {
    const user = this.prisma.user.findUnique({
      where: {
        id: dto.id
      },
      select: {
        name: true,
        surname: true,
        patronymic: true,
        phone: true,
        email: true,
        roleId: true,
        password: false 
      }
    })

    if(!user) throw new NotFoundException('Пользователь не найден')

    return user
  }
}
