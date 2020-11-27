import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormControlMetadata } from 'src/app/model/form-controls';
import FORM_METADATA_SCHEMA from '../../../../schemas/form-metadata.schema.json';
import {
    formContentIsType,
    FormContentMetadata,
    FormMetadata,
    FormQuestionMetadata,
    FormSectionMetadata
} from '../../model/form';
import { AjvService } from '../ajv/ajv.service';

@Injectable({
    providedIn: 'root'
})
export class FormMetadataService {
    constructor(private parser: AjvService) {}

    getMetadata(data: any): FormMetadata {
        return this.parser.validate(FORM_METADATA_SCHEMA, data);
    }

    getFormFromMetadata(metadata: FormMetadata): FormGroup {
        if (!metadata || !metadata.contents || metadata.contents.length === 0) {
            throw new FormMetadataError(FormMetadataErrors.FM001, metadata.id);
        }

        const group: any = {};

        for (const content of metadata.contents) {
            if (!content.id) {
                throw new FormMetadataError(FormMetadataErrors.FM002);
            }

            group[content.id] = this.processFormContentMetadata(content);
        }

        return new FormGroup(group);
    }

    private processFormContentMetadata(content: FormContentMetadata): FormGroup | FormControl {
        if (formContentIsType(content, 'section')) {
            return this.processFormGroupMetadata(content);
        } else if (formContentIsType(content, 'question')) {
            return this.processFormQuestionMetadata(content);
        } else {
            throw new FormMetadataError(FormMetadataErrors.FM008);
        }
    }

    private processFormGroupMetadata(section: FormSectionMetadata): FormGroup {
        if (!section.id) {
            throw new FormMetadataError(FormMetadataErrors.FM003);
        }

        if (!section.contents || section.contents.length === 0) {
            throw new FormMetadataError(FormMetadataErrors.FM004, section.id);
        }

        const group: any = {};

        for (const content of section.contents) {
            if (!content.id) {
                throw new FormMetadataError(FormMetadataErrors.FM002);
            }

            group[content.id] = this.processFormContentMetadata(content);
        }

        return new FormGroup(group);
    }

    private processFormQuestionMetadata(question: FormQuestionMetadata): FormGroup | FormControl {
        if (!question.id) {
            throw new FormMetadataError(FormMetadataErrors.FM005);
        } else if (!question.controls || question.controls.length === 0) {
            throw new FormMetadataError(FormMetadataErrors.FM006);
        }

        if (question.controls.length === 1) {
            return this.processFormControlMetadata(question.controls[0]);
        } else {
            const group: any = {};

            for (const control of question.controls) {
                if (!control.id) {
                    throw new FormMetadataError(FormMetadataErrors.FM007);
                }

                group[control.id] = this.processFormControlMetadata(control);
            }

            return new FormGroup(group);
        }
    }

    private processFormControlMetadata(control: FormControlMetadata): FormControl {
        const formControl = new FormControl(control.initialValue || '');
        formControl.setValidators(this.getControlValidators(control));

        return formControl;
    }

    private getControlValidators(control: FormControlMetadata): ValidatorFn[] {
        const validators = [];

        if (control.required) {
            validators.push(Validators.required);
        }

        return validators;
    }
}

class FormMetadataError extends Error {
    constructor(message: FormMetadataErrors, id?: string) {
        const messageWithId = id ? `${message} [ID: ${id}]` : message;
        super(messageWithId);

        this.name = 'FormMetadataError';
    }
}

const enum FormMetadataErrors {
    FM001 = 'Form has no contents',
    FM002 = 'Form contents have no ID',
    FM003 = 'Form section has no ID',
    FM004 = 'Form section has no contents',
    FM005 = 'Form question has no ID',
    FM006 = 'Form question has no controls',
    FM007 = 'Form control has no ID',
    FM008 = 'Form contents have an invalid type'
}
