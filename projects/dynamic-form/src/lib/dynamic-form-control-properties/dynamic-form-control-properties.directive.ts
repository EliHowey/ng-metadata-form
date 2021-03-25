import { Directive, HostBinding, Input, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormControlMetadata } from '../form-controls.models';

/**
 * Applies common HTML attributes to a form control based on its metadata.
 */
@Directive({
    selector: '[ngModel][libMetadata], [formControlName][libMetadata]'
})
export class DynamicFormControlPropertiesDirective {
    /**
     * Metadata for the form control. Used to apply common attributes to a form control.
     */
    // tslint:disable-next-line:no-input-rename
    @Input() libMetadata!: FormControlMetadata;

    constructor(@Self() private control: NgControl) {}

    /**
     * ID of the control.
     */
    @HostBinding('attr.id')
    get id(): string | undefined {
        return this.libMetadata.id;
    }

    /**
     * List of IDs of elements that describe the control.
     */
    @HostBinding('attr.aria-describedby')
    get ariaDescribedBy(): string {
        if (!this.libMetadata.helpText) {
            return `${this.libMetadata.id}-error`;
        }

        return `${this.libMetadata.id}-help-text ${this.libMetadata.id}-error`;
    }

    /**
     * Whether the control is required.
     */
    @HostBinding('required')
    get required(): boolean | undefined {
        return this.libMetadata.required;
    }

    /**
     * Whether the control's current value is invalid.
     */
    @HostBinding('attr.aria-invalid')
    get invalid(): boolean | null {
        return (this.control.touched || this.control.dirty) && this.control.invalid;
    }
}
