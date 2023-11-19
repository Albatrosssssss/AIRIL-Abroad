import { Injectable } from '@nestjs/common';

@Injectable()
export class consultantService {
  getHello(): string {
    return 'Hello World! from consultant';
  }
}
