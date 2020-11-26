import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormMetadata } from './model/form';
import { FormMetadataService } from './services/form-metadata/form-metadata.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    jsonOutput: unknown = '';
    error = '';

    metadata: FormGroup | null = null;

    constructor(private metadataService: FormMetadataService) {}

    onJsonParsed(json: unknown): void {
        this.jsonOutput = json;
        this.error = '';

        try {
            this.metadata = this.metadataService.getFormFromMetadata(this.jsonOutput as FormMetadata);
        } catch (error) {
            this.error = error;
        }
    }

    onJsonError(error: string): void {
        this.jsonOutput = '';
        this.error = error;
    }
}
