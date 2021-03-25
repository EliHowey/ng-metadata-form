import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormControlsExampleComponent } from './form-controls-example/form-controls-example.component';
import { FormQuestionExampleComponent } from './form-question-example/form-question-example.component';
import { FormSectionExampleComponent } from './form-section-example/form-section-example.component';
import { MixedContentsExampleComponent } from './mixed-contents-example/mixed-contents-example.component';

const routes: Routes = [
    { path: 'form-controls', component: FormControlsExampleComponent },
    { path: 'form-question', component: FormQuestionExampleComponent },
    { path: 'form-section', component: FormSectionExampleComponent },
    { path: 'mixed-contents', component: MixedContentsExampleComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExamplesRoutingModule {
    static components = [
        FormControlsExampleComponent,
        FormQuestionExampleComponent,
        FormSectionExampleComponent,
        MixedContentsExampleComponent
    ];
}
