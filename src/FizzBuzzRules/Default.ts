import IFizzBuzzRules from "./IFizzBuzzRules";

export default class Default implements IFizzBuzzRules {

    validate(value: number): boolean {
        return value % 2 > 0 && value % 3 > 0 && value % 5 > 0
    }

    perform(value: number): string {
        return this.validate(value) ? value.toString() : ''
    }
}