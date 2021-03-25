import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormQuestionExampleComponent } from './form-question-example.component';

describe('FormQuestionExampleComponent', () => {
    let component: FormQuestionExampleComponent;
    let fixture: ComponentFixture<FormQuestionExampleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FormQuestionExampleComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FormQuestionExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
