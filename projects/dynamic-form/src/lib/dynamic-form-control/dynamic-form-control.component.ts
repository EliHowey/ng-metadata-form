import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormControlMetadata } from '../form-controls.models';

@Component({
    selector: 'lib-dynamic-form-control',
    templateUrl: './dynamic-form-control.component.html',
    styleUrls: ['./dynamic-form-control.component.scss']
})
export class DynamicFormControlComponent implements OnInit {
    @Input() form!: FormGroup;

    /**
     * Metadata of the form control to render.
     */
    @Input() control!: FormControlMetadata;

    /**
     * ID of the control to render.
     */
    @HostBinding('attr.data-control-id')
    get controlId(): string {
        return this.control.id;
    }

    get helpTextId(): string {
        return this.controlId + '-help-text';
    }

    get errorMessageId(): string {
        return this.controlId + '-error';
    }

    /**
     * Type of the control to render.
     */
    @HostBinding('attr.data-control-type')
    get type(): string {
        return this.control.controlType;
    }

    formControl: FormControl | null = null;

    get invalid(): boolean | undefined {
        return (this.formControl?.touched || this.formControl?.dirty) && this.formControl.invalid;
    }

    ngOnInit(): void {
        this.formControl = this.form.get(this.controlId) as FormControl;

        if (!this.formControl) {
            throw new Error(`Control ${this.control.id} has no associated FormControl`);
        }
    }
}
