import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
      MongooseModule.forRoot(`mongodb+srv://Neox:neox1234@cluster0.ufaw7.mongodb.net/products?retryWrites=true&w=majority`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

