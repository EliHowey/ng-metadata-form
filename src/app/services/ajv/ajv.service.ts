import { Injectable } from '@angular/core';
import Ajv, { AnySchemaObject } from 'ajv';

@Injectable({
    providedIn: 'root'
})
export class AjvService {
    private ajv: Ajv;

    constructor() {
        this.ajv = new Ajv({ allErrors: true });
    }

    validate<T>(schema: AnySchemaObject, data: any): T {
        const isValid = this.ajv.validate(schema, data as T);

        if (!isValid) {
            const errorMessages = this.ajv.errorsText();
            throw new Error(`AJV validation error: ${errorMessages}`);
        }

        return data;
    }
}
