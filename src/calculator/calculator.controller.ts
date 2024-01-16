import { Controller, Get, Query } from '@nestjs/common';
import { CalculatorService } from "./calculator.service";


type Numbers = {
    numberOne: number,
    numberTwo: number
}

@Controller('calculator')
export class CalculatorController {
    constructor(private readonly calculator: CalculatorService) {}

    // Add numbers given in query input
    @Get('add')
    addNumbers(@Query() query: Numbers) {
        const numberOne = +query.numberOne;
        const numberTwo = +query.numberTwo;

        const result = this.calculator.add(numberOne, numberTwo);

        return result;
    }

    // Subtract numbers given in query input
    @Get('subtract')
    subtractNumbers(@Query() query: Numbers) {
        const numberOne = +query.numberOne;
        const numberTwo = +query.numberTwo;

        const result = this.calculator.subtract(numberOne, numberTwo);

        return result;
    }

    // Multiply numbers given in query input
    @Get('multiply')
    multiplyNumbers(@Query() query: Numbers) {
        const numberOne = +query.numberOne;
        const numberTwo = +query.numberTwo;

        const result = this.calculator.multiply(numberOne, numberTwo);

        return result;
    }

    // Divide numbers given in query input
    @Get('divide')
    divideNumbers(@Query() query: Numbers) {
        const numberOne = +query.numberOne;
        const numberTwo = +query.numberTwo;

        const result = this.calculator.divide(numberOne, numberTwo);

        return result;
    }
}
