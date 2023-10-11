import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OkModule } from './ok/ok.module';

@Module({
  imports: [OkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
