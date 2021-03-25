import { Component, OnInit } from '@angular/core';
import FormControlsMetadata from '../../../../data/form-controls.json';
import { FormMetadata } from '../../../../projects/dynamic-form/src/lib/form-metadata.models';
import { AjvService } from '../../services/ajv/ajv.service';

@Component({
    selector: 'app-form-controls-example',
    templateUrl: './form-controls-example.component.html',
    styleUrls: ['./form-controls-example.component.scss']
})
export class FormControlsExampleComponent implements OnInit {
    metadata: FormMetadata | null = null;

    formValue: any;
    error: string | null = null;

    constructor(private ajvService: AjvService) {}

    ngOnInit(): void {
        try {
            this.metadata = this.ajvService.validate(FormControlsMetadata);
            if (this.metadata) {
                console.log('Metadata found!');
            } else {
                console.error('No metadata...');
            }
        } catch (error) {
            this.metadata = null;
            this.error = error.message;
        }
    }
}
