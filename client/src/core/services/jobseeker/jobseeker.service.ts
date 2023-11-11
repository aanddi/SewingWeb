import { IResume } from '@/core/types/resume.interface'

import { UpdateAbout } from './jobseeker.helper'
import { instance } from '@/api/api.interceptor'

export const jobseekerService = {
  async getResumeByIdUser(id: number | undefined) {
    const response = await instance<IResume>({
      url: `jobseeker/getResume/${id}`,
      method: 'GET'
    })

    return response.data
  },

  async updateResumeByIdUser(id: number | undefined, data: IResume) {
    const response = await instance({
      url: `jobseeker/updateResume/${id}`,
      method: 'PUT',
      data
    })

    return response.data
  },

  async updateAboutResume(id: number | undefined, data: UpdateAbout) {
    const response = await instance({
      url: `jobseeker/updateResumeAbout/${id}`,
      method: 'PATCH',
      data
    })

    return response.data
  }
}
