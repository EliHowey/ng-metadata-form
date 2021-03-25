import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { FormSectionMetadata } from '../form-metadata.models';
import { FormMetadataService } from '../form-metadata.service';

@Component({
    selector: 'lib-dynamic-form-section',
    templateUrl: './dynamic-form-section.component.html',
    styleUrls: ['./dynamic-form-section.component.scss']
})
export class DynamicFormSectionComponent implements OnInit {
    @Input() section!: FormSectionMetadata;

    @Input() depth = 1;

    @HostBinding('attr.id')
    get id(): string {
        return this.section.id;
    }

    form: FormGroup | null = null;

    constructor(private controlContainer: ControlContainer, public metadataService: FormMetadataService) {}

    ngOnInit(): void {
        this.form = this.controlContainer.control?.get(this.id) as FormGroup;
    }
}
