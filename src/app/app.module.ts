import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchemasModule } from './schemas/schemas.module';

@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, BrowserModule, SchemasModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
