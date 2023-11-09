import { Controller, Post, HttpCode, Body, Get, Param, Delete } from '@nestjs/common'
import { ResumeService } from './resume.service'
import { createResumeDto } from './dto/create-resume.dto'

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  // @Post('create')
  // @HttpCode(200)
  // async createResume(@Body() dto: createResumeDto) {
  //   return this.resumeService.create(dto)
  // }

  // // @Get('all/:jobSeekerId')
  // // getAllJobSeekerResumes(@Param('jobSeekerId') jobSeekerId: string) {
  // //   return this.resumeService.getAllResumes(jobSeekerId)
  // // }

  // @Get(':id')
  // getResumeById(@Param('id') id: string) {
  //   return this.resumeService.getResumeById(id)
  // }

  // @Delete(':id')
  // removeResume(@Param('id') id: string) {
  //   return this.resumeService.removeResume(id)
  // }
}
