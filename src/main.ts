import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import setDefaultUser from './seeder/set-default-user';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configUser = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  setDefaultUser(configUser);

  const config = new DocumentBuilder()
    .setTitle('Video API')
    .addBearerAuth()
    .setDescription(
      'Esta es una API Creada con NestJS la cual brinda informacion acerca de videos y permite realizar comentarios`.',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();
