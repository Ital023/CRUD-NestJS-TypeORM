import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecadosModule } from './recados/recados.module';
import { PessoasModule } from './pessoas/pessoas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      database: "postgres",
      password: "123456",
      autoLoadEntities: true,
      synchronize: true,
    }),
    RecadosModule,
    PessoasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
