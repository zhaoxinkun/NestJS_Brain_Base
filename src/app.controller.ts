import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly configService: ConfigService,
  ) {
  }

  @Get()
  getHello(): string {
    const dbPort = this.configService.get('DB_PORT');
    console.log('🚀 ~ getHello ~ db: ', dbPort);
    return this.appService.getHello();
  }
}
