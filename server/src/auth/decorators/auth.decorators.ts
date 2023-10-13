// Служит для защиты контроллеров. Проверка на валидный токен
// Указывая этот декоратор, зайти по энтпоинтам в контроллерах -
// смогут только залогиненные пользователи

import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

export const Auth = () => UseGuards(AuthGuard('jwt'))
