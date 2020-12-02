import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { FormSectionMetadata } from '../model/form';
import { FormMetadataService } from '../services/form-metadata/form-metadata.service';

@Component({
    selector: 'app-dynamic-form-section',
    templateUrl: './dynamic-form-section.component.html',
    styleUrls: ['./dynamic-form-section.component.scss']
})
export class DynamicFormSectionComponent implements OnInit {
    @Input() section!: FormSectionMetadata;

    @Input() form!: FormGroup;

    @Input() depth = 1;

    @HostBinding('attr.id')
    get id(): string {
        return this.section.id;
    }

    constructor(private controlContainer: ControlContainer, public metadataService: FormMetadataService) {}

    ngOnInit(): void {
        this.form = this.controlContainer.control as FormGroup;

        if (this.form) {
            console.log(this.form);
        } else {
            console.error(`Form section ${this.section.id} has no FormGroup`);
        }
    }
}
