import { Global, Module } from '@nestjs/common';
// 导入包并重命名,防止冲突
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import Joi from 'joi';

/*
 *
 *  这里是封装的使用@nestjs/config模块的配置模块
 *
 *  使用Joi进行环境变量校验
 *  使用cross-env设置环境变量
 *  使用validationSchema对环境变量进行校验
 * */

const envFilePath = `.env.${process.env.NODE_ENV || 'development'}`;

// 使用Joi做校验
const schema = Joi.object({
  DB_NAME: Joi.string().required(),
  DB_PORT: Joi.number(),
  DB_HOST: Joi.string().required().default('localhost'),
});


@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true, //全局使用
      envFilePath, //配置路径
      validationSchema: schema, //配置校验
    }),
  ],
  exports: [NestConfigModule],
})
export class ConfigModule {
}
