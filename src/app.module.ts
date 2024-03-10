import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { MAdminModule } from './m-admin/m-admin.module';
import { ConfigModule } from '@nestjs/config';
import { MBanks } from './m-admin/m-list/m-banks/m-banks.model';

@Module({
  imports: [    
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    models: [MBanks],
    autoLoadModels: true,
    synchronize: true
  }), MAdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  

  
}
