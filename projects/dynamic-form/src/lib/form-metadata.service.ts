import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormControlMetadata, OptionMetadata, RadioGroupControlMetadata } from './form-controls.models';
import {
    formContentIsType,
    FormContentMetadata,
    FormMetadata,
    FormQuestionMetadata,
    FormSectionMetadata
} from './form-metadata.models';

@Injectable({
    providedIn: 'root'
})
export class FormMetadataService {
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
        } else if (formContentIsType(content, 'control')) {
            return this.processFormControlMetadata(content);
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

    private processFormQuestionMetadata(question: FormQuestionMetadata): FormGroup {
        if (!question.id) {
            throw new FormMetadataError(FormMetadataErrors.FM005);
        } else if (!question.controls || question.controls.length < 2) {
            throw new FormMetadataError(FormMetadataErrors.FM006);
        }

        const group: any = {};

        for (const control of question.controls) {
            if (!control.id) {
                throw new FormMetadataError(FormMetadataErrors.FM007);
            }

            group[control.id] = this.processFormControlMetadata(control);
        }

        return new FormGroup(group);
    }

    private processFormControlMetadata(control: FormControlMetadata): FormControl {
        let initialValue: string | boolean | number | undefined = control.initialValue;

        if (control.controlType === 'checkbox' && control.checked) {
            initialValue = true;
        }

        if (control.controlType === 'radio-group') {
            const selectedOption = control.options.filter(this.isOptionMetadata).find((option) => option.selected);
            initialValue = selectedOption?.value || selectedOption?.label;
        }

        const formControl = new FormControl(initialValue || '');
        formControl.setValidators(this.getControlValidators(control));

        return formControl;
    }

    private isOptionMetadata(option: RadioGroupControlMetadata['options'][number]): option is OptionMetadata {
        return typeof option !== 'string';
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
    FM006 = 'Form question must have at least two controls',
    FM007 = 'Form control has no ID',
    FM008 = 'Form contents have an invalid type'
}
