// забираем все actions для нашего хука
import * as userActions from './user/user.actions'

export const rootAction = {
  ...userActions
}
