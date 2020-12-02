import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormControlMetadata } from '../model/form-controls';

@Component({
    selector: 'app-dynamic-form-control',
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

    /**
     * Type of the control to render.
     */
    @HostBinding('attr.data-control-type')
    get type(): string {
        return this.control.type;
    }

    formControl: FormControl | null = null;

    ngOnInit(): void {
        this.formControl = this.form.get(this.controlId) as FormControl;

        if (!this.formControl) {
            throw new Error(`Control ${this.control.id} has no associated FormControl`);
        }
    }
}
