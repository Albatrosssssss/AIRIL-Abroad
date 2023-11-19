import { Controller, Get } from '@nestjs/common';
import { consultantService } from './consultant.service';

@Controller('/consultant')
export class consultantcontroller{
constructor (private readonly consultantService: consultantService){}
@Get('/hello')
getHello(): string {
    return this.consultantService.getHello();
}}