import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
  providers: [JwtService],
})
export class AppModule {}
