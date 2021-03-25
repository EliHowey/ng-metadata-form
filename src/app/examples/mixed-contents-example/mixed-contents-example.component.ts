import { Component, OnInit } from '@angular/core';
import MixedContentsMetadata from '../../../../data/mixed-contents.json';
import { FormMetadata } from '../../../../projects/dynamic-form/src/lib/form-metadata.models';
import { AjvService } from '../../services/ajv/ajv.service';

@Component({
    selector: 'app-mixed-contents-example',
    templateUrl: './mixed-contents-example.component.html',
    styleUrls: ['./mixed-contents-example.component.scss']
})
export class MixedContentsExampleComponent implements OnInit {
    metadata: FormMetadata | null = null;

    formValue: any;
    error: string | null = null;

    constructor(private ajvService: AjvService) {}

    ngOnInit(): void {
        try {
            this.metadata = this.ajvService.validate(MixedContentsMetadata);
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
