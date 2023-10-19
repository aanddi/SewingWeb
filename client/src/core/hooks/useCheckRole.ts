import { useTypedSelector } from './useTypedSelector'

export const useCheckRole = () =>
  useTypedSelector(state => {
    const roleId = state.user.user?.roleId
    if(roleId == 1) return '_JOBSEEKER_'
    else if (roleId == 2) return '_EMPLOYER_'
  })
