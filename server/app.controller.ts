import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  public showHome() {
    const user = this.appService.showHome('NestJS');
    return { user };
  }
}
