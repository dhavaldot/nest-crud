import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('custom')
  getCustomResponse(): any {
    return JSON.stringify(this.appService.getCustomResponse());
  }

  @Get('getData')
  getData(): any {}

  @Get('users')
  @Redirect('user')
  redirect() {}
}
