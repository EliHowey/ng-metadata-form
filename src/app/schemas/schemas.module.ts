import { NgModule } from '@angular/core';
import FormControlSchema from '../../../schemas/form-control.schema.json';
import FormMetadataSchema from '../../../schemas/form-metadata.schema.json';
import FormQuestionSchema from '../../../schemas/form-question.schema.json';
import FormSectionSchema from '../../../schemas/form-section.schema.json';
import IdSchema from '../../../schemas/properties/id.schema.json';
import { ALL_SCHEMAS, ENTRY_SCHEMA } from './schemas.token';

const schemas = [FormMetadataSchema, FormSectionSchema, FormQuestionSchema, FormControlSchema, IdSchema];

@NgModule({
    providers: [
        { provide: ALL_SCHEMAS, useValue: schemas },
        { provide: ENTRY_SCHEMA, useValue: FormMetadataSchema }
    ]
})
export class SchemasModule {}
