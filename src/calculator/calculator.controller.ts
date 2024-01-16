import { Controller, Get, Query } from '@nestjs/common';
import { CalculatorService } from "./calculator.service";


// Interface for query input
type Numbers = {
    numberOne: number,
    numberTwo: number
};

// This is a controller class that will be used to handle the requests
@Controller('calculator')
export class CalculatorController {
    // Inject CalculatorService
    constructor(private readonly calculator: CalculatorService) {}

    // Add numbers given in query input
    @Get('add')
    addNumbers(@Query() query: Numbers) {
        // Convert query string to number ( + is used to convert string to number )
        const numberOne = +query.numberOne; // Number one
        const numberTwo = +query.numberTwo; // Number two

        return this.calculator.add(numberOne, numberTwo);
    }

    // Subtract numbers given in query input
    @Get('subtract')
    subtractNumbers(@Query() query: Numbers) {
        // Convert query string to number ( + is used to convert string to number )
        const numberOne = +query.numberOne; // Number one
        const numberTwo = +query.numberTwo; // Number two

        return this.calculator.subtract(numberOne, numberTwo);
    }

    // Multiply numbers given in query input
    @Get('multiply')
    multiplyNumbers(@Query() query: Numbers) {
        // Convert query string to number ( + is used to convert string to number )
        const numberOne = +query.numberOne; // Number one
        const numberTwo = +query.numberTwo; // Number two

        return this.calculator.multiply(numberOne, numberTwo);
    }

    // Divide numbers given in query input
    @Get('divide')
    divideNumbers(@Query() query: Numbers) {
        // Convert query string to number ( + is used to convert string to number )
        const numberOne = +query.numberOne; // Number one
        const numberTwo = +query.numberTwo; // Number two

        return this.calculator.divide(numberOne, numberTwo);
    }

    // Find the power of numbers given in query input
    @Get('power')
    powerNumbers(@Query() query: Numbers) {
        // Convert query string to number ( + is used to convert string to number )
        const numberOne = +query.numberOne; // Number one
        const numberTwo = +query.numberTwo; // Number two

        return this.calculator.power(numberOne, numberTwo);
    }

    // Find the root of numbers given in query input
    @Get('root')
    rootNumbers(@Query() query: Numbers) {
        // Convert query string to number ( + is used to convert string to number )
        const numberOne = +query.numberOne; // Number one
        const numberTwo = +query.numberTwo; // Number two

        return this.calculator.root(numberOne, numberTwo);
    }
}
