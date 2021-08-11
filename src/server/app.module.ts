import { Module } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../client'),
      exclude: ['/api/*'],
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
