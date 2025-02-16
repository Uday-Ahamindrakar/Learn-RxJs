import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [AppComponent, Page2Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration(withEventReplay()), provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
