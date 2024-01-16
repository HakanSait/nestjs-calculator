import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule); // create a Nest application instance
    await app.listen(7200); // 7200 is the port number
}

bootstrap(); // call the bootstrap function
