import { Component, HostBinding, Input } from '@angular/core';
import { FormControlMetadata } from '../model/form-controls';

@Component({
    selector: 'app-dynamic-form-control',
    templateUrl: './dynamic-form-control.component.html',
    styleUrls: ['./dynamic-form-control.component.scss']
})
export class DynamicFormControlComponent {
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
}
