import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);

  await app.listen(config.get('app.port'), () => {
    console.log(`Server start on port ${config.get('app.port')}`);
  });
}

bootstrap();
