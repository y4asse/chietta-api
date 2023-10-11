import { Controller, Get } from '@nestjs/common';

@Controller('ok')
export class OkController {
  @Get()
  ok(): string {
    return 'ok';
  }
}
