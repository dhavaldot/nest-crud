import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCustomResponse(): any {
    const res = {
      success: true,
      message: 'Custom Response.',
    };
    return res;
  }

  getData(): any {}
}
