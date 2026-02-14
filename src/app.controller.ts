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
    const dbName = this.configService.get('DB_NAME');
    console.log('🚀 ~ getHello ~ db: ', dbName);
    return this.appService.getHello();
  }
}
