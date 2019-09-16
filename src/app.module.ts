import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    CatsModule,
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ApplicationModule {}
