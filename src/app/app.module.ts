import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonFormComponent } from './json-form/json-form.component';

@NgModule({
    declarations: [AppComponent, JsonFormComponent],
    imports: [AppRoutingModule, BrowserModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
