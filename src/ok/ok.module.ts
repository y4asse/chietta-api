import { Module } from '@nestjs/common';
import { OkController } from './ok.controller';

@Module({
  controllers: [OkController]
})
export class OkModule {}
