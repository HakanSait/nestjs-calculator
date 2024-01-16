import { Injectable } from '@nestjs/common';


// This is a service class that will be used to perform the calculations
@Injectable()
export class CalculatorService {
    // Add numbers
    add(numberOne: number, numberTwo: number): number {
        return numberOne + numberTwo; // Return the sum of the two numbers
    }

    // Subtract numbers
    subtract(numberOne: number, numberTwo: number): number {
        return numberOne - numberTwo; // Return the difference of the two numbers
    }

    // Multiply numbers
    multiply(numberOne: number, numberTwo: number): number {
        return numberOne * numberTwo; // Return the product of the two numbers
    }

    // Divide numbers
    divide(numberOne: number, numberTwo: number): number {
        return numberOne / numberTwo; // Return the quotient of the two numbers
    }

    // Find the power of numbers
    power(numberOne: number, numberTwo: number): number {
        return numberOne ** numberTwo; // Return the power of the two numbers
    }

    // Find the root of numbers
    root(numberOne: number, numberTwo: number): number {
        return numberOne ** (1 / numberTwo); // Return the root of the two numbers
    }
}
