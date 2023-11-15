import { IResume } from '@/core/types/resume.interface'
import { IWorkExperience } from '@/core/types/work-experience.interface'

import { EducationType, UpdateAbout } from './jobseeker.helper'
import { instance } from '@/api/api.interceptor'

export const JobseekerService = {
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
  },

  //======= Education =================================================

  async getAllEducationById(id: number | undefined) {
    const response = await instance({
      url: `jobseeker/getAllEducationById/${id}`,
      method: 'GET'
    })

    return response.data
  },

  async getEducationById(id: number | undefined) {
    const response = await instance({
      url: `jobseeker/getEducationById/${id}`,
      method: 'GET'
    })

    return response.data
  },

  async createEducation(id: number | undefined, data: EducationType) {
    const response = await instance({
      url: `jobseeker/createEducation/${id}`,
      method: 'POST',
      data
    })

    return response.data
  },

  async updateEducation(id: number | undefined, data: EducationType) {
    const response = await instance({
      url: `jobseeker/updateEducation/${id}`,
      method: 'PUT',
      data
    })

    return response.data
  },

  async deleteEducation(id: number | undefined) {
    const response = await instance({
      url: `jobseeker/deleteEducation/${id}`,
      method: 'DELETE'
    })

    return response.data
  },

  //======= WorkExperience =================================================

  async getAllExperienceById(id: number | undefined) {
    const response = await instance({
      url: `jobseeker/getAllExperienceById/${id}`,
      method: 'GET'
    })

    return response.data
  },

  async createExperience(id: number | undefined, data: IWorkExperience) {
    const response = await instance({
      url: `jobseeker/createExperience/${id}`,
      method: 'POST',
      data
    })

    return response.data
  },

  async updateExperience(id: number | undefined, data: IWorkExperience) {
    const response = await instance({
      url: `jobseeker/updateExperience/${id}`,
      method: 'PUT',
      data
    })

    return response.data
  },

  async getExperienceById(id: number | undefined) {
    const response = await instance({
      url: `jobseeker/getExperienceById/${id}`,
      method: 'GET'
    })

    return response.data
  },

  async deleteExperience(id: number | undefined) {
    const response = await instance({
      url: `jobseeker/deleteExperience/${id}`,
      method: 'DELETE'
    })

    return response.data
  }
}
