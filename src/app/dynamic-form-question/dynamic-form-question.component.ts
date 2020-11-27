import { Component, Input, OnInit } from '@angular/core';
import { FormQuestionMetadata } from '../model/form';

@Component({
    selector: 'app-dynamic-form-question',
    templateUrl: './dynamic-form-question.component.html',
    styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent implements OnInit {
    @Input() question!: FormQuestionMetadata;

    constructor() {}

    ngOnInit(): void {}
}
