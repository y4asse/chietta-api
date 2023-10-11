import { Test, TestingModule } from '@nestjs/testing';
import { OkController } from './ok.controller';

describe('OkController', () => {
  let controller: OkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OkController],
    }).compile();

    controller = module.get<OkController>(OkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
