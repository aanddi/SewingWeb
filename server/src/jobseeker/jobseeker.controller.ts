import { Param, Put, Body, Controller, HttpCode, Post, Get } from '@nestjs/common';
import { JobseekerService } from './jobseeker.service';
import { createInstitutionalInfoDto, createWorkExperienceDto } from './dto/create-jobseeker-info.dto';
import { updateInstitutionalInfoDto, updateJobseekerDto, updateWorkExperienceDto } from './dto/update-jobseeker-info.dto';

@Controller('jobseeker')
export class JobseekerController {
  constructor(private readonly jobseekerService: JobseekerService) {}

  // @Put('update/:id')
  // async createJobSeeker(@Body() dto: updateJobseekerDto, @Param('id') id: string) {
  //   return this.jobseekerService.updateJobSeeker(dto, id)
  // }

  // @Get(':id')
  // getJobSeekerById(@Param('id') id: string) {
  //   return this.jobseekerService.getById(id)
  // }

  // @Post('create/institut-info')
  // @HttpCode(200)
  // async createInstitutionalInfo(@Body() dto: createInstitutionalInfoDto) {
  //   return this.jobseekerService.createInstitutionalInfo(dto)
  // }

  // // @Put('update/institut-info/:id')
  // // async updateInstitutionalInfo(@Body() dto: updateInstitutionalInfoDto, @Param('id') id: string) {
  // //   return this.jobseekerService.updateJobSeeker(dto, id)
  // // }

  // @Post('create/work-experience')
  // @HttpCode(200)
  // async createWorkexperience(@Body() dto: createWorkExperienceDto) {
  //   return this.jobseekerService.createWorkExperience(dto)
  // }

  // // @Put('update/work-experience/:id')
  // // async updateWorkexpErience(@Body() dto: updateWorkExperienceDto, @Param('id') id: string) {
  // //   return this.jobseekerService.updateWorkExperience(dto, id)
  // // }
}
