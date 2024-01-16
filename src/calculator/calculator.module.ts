import { Module } from '@nestjs/common';
import { CalculatorController } from './calculator.controller';
import { CalculatorService } from './calculator.service';


// New CalculatorModule module
@Module({
    controllers: [CalculatorController], // import CalculatorController
    providers: [CalculatorService], // import CalculatorService
    exports: [CalculatorService] // export CalculatorService
})
export class CalculatorModule { } // export CalculatorModule
