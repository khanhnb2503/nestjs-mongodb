import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   app.enableCors();

   const config = new DocumentBuilder()
      .setTitle('TEST_API')
      .setVersion('1.0')
      .build();
   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('api', app, document);

   console.log('http://localhost:3000')
   await app.listen(3000);
}
bootstrap();
