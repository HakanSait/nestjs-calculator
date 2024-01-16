import { Injectable } from '@nestjs/common';


@Injectable()
export class CalculatorService {
    // Add numbers
    add(numberOne: number, numberTwo: number): number {
        return numberOne + numberTwo;
    }

    // Subtract numbers
    subtract(numberOne: number, numberTwo: number): number {
        return numberOne - numberTwo;
    }

    // Multiply numbers
    multiply(numberOne: number, numberTwo: number): number {
        return numberOne * numberTwo;
    }

    // Divide numbers
    divide(numberOne: number, numberTwo: number): number {
        return numberOne / numberTwo;
    }
}
