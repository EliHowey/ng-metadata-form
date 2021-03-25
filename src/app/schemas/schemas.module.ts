import { NgModule } from '@angular/core';
import FormControlSchema from '../../../projects/dynamic-form/schemas/form-control.schema.json';
import FormMetadataSchema from '../../../projects/dynamic-form/schemas/form-metadata.schema.json';
import FormQuestionSchema from '../../../projects/dynamic-form/schemas/form-question.schema.json';
import FormSectionSchema from '../../../projects/dynamic-form/schemas/form-section.schema.json';
import IdSchema from '../../../projects/dynamic-form/schemas/properties/id.schema.json';
import { ALL_SCHEMAS, ENTRY_SCHEMA } from './schemas.token';

const schemas = [FormMetadataSchema, FormSectionSchema, FormQuestionSchema, FormControlSchema, IdSchema];

@NgModule({
    providers: [
        { provide: ALL_SCHEMAS, useValue: schemas },
        { provide: ENTRY_SCHEMA, useValue: FormMetadataSchema }
    ]
})
export class SchemasModule {}
