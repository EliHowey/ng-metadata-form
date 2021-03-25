import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormSectionExampleComponent } from './form-section-example.component';

describe('FormSectionExampleComponent', () => {
    let component: FormSectionExampleComponent;
    let fixture: ComponentFixture<FormSectionExampleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FormSectionExampleComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FormSectionExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
