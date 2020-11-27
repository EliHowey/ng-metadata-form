import { Component, Input, OnInit } from '@angular/core';
import { FormSectionMetadata } from '../model/form';

@Component({
    selector: 'app-dynamic-form-section',
    templateUrl: './dynamic-form-section.component.html',
    styleUrls: ['./dynamic-form-section.component.scss']
})
export class DynamicFormSectionComponent implements OnInit {
    @Input() section!: FormSectionMetadata;

    constructor() {}

    ngOnInit(): void {}
}
