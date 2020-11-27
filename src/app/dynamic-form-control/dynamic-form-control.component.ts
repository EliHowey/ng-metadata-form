import { Component, HostBinding, Input } from '@angular/core';
import { FormControlMetadata } from '../model/form-controls';

@Component({
    selector: 'app-dynamic-form-control',
    templateUrl: './dynamic-form-control.component.html',
    styleUrls: ['./dynamic-form-control.component.scss']
})
export class DynamicFormControlComponent {
    @Input() control!: FormControlMetadata;

    @HostBinding('attr.data-type')
    get type(): string {
        return this.control.type;
    }
}
