import { Directive, HostBinding, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormControlMetadata } from '../model/form-controls';

/**
 * Applies common HTML attributes to a form control based on its metadata.
 */
@Directive({
    selector: '[formControlName][appMetadata]'
})
export class FormControlPropertiesDirective {
    /**
     * Metadata for the form control. Used to apply common attributes to a form control.
     */
    // tslint:disable-next-line:no-input-rename
    @Input('appMetadata') metadata: FormControlMetadata | null = null;

    constructor(private control: NgControl) {}

    /**
     * ID of the control.
     */
    @HostBinding('attr.id')
    get id(): string | undefined {
        return this.metadata?.id;
    }

    /**
     * List of IDs of elements that describe the control.
     */
    @HostBinding('attr.aria-describedby')
    get ariaDescribedBy(): string {
        if (!this.metadata?.helpText) {
            return `${this.metadata?.id}-error`;
        }

        return `${this.metadata.id}-help-text ${this.metadata?.id}-error`;
    }

    /**
     * Whether the control is required.
     */
    @HostBinding('required')
    get required(): boolean | undefined {
        return this.metadata?.required;
    }

    /**
     * Whether the control's current value is invalid.
     */
    @HostBinding('attr.aria-invalid')
    get invalid(): boolean | null {
        return (this.control.touched || this.control.dirty) && this.control.invalid;
    }
}
