import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculatorModule } from './calculator/calculator.module';


// The @Module() decorator provides metadata that Nest makes use of to organize the application structure
@Module({
    imports: [CalculatorModule], // import the CalculatorModule
    controllers: [AppController], // declare the AppController
    providers: [AppService], // declare the AppService
})
export class AppModule { } // export the AppModule class
