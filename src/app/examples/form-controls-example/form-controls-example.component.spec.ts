import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControlsExampleComponent } from './form-controls-example.component';

describe('FormControlsExampleComponent', () => {
    let component: FormControlsExampleComponent;
    let fixture: ComponentFixture<FormControlsExampleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FormControlsExampleComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FormControlsExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
