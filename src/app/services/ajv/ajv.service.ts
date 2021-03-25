import { Inject, Injectable } from '@angular/core';
import Ajv, { AnySchemaObject } from 'ajv';
import { ALL_SCHEMAS, ENTRY_SCHEMA } from 'src/app/schemas/schemas.token';

@Injectable({
    providedIn: 'root'
})
export class AjvService {
    private ajv: Ajv;

    constructor(
        @Inject(ALL_SCHEMAS) allSchemas: AnySchemaObject[],
        @Inject(ENTRY_SCHEMA) private entrySchema: AnySchemaObject
    ) {
        this.ajv = new Ajv({ allErrors: true, allowUnionTypes: true, schemas: allSchemas });
    }

    validate<T>(data: any): T {
        const isValid = this.ajv.validate(this.entrySchema, data as T);

        if (!isValid) {
            const errorMessages = this.ajv.errorsText();
            throw new Error(`AJV validation error: ${errorMessages}`);
        }

        return data;
    }
}
