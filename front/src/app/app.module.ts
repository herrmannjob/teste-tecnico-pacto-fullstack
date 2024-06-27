import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CandidaturaDetailComponent } from './candidaturas/candidatura-detail/candidatura-detail.component';
import { CandidaturaFormComponent } from './candidaturas/candidatura-form/candidatura-form.component';
import { CandidaturaListComponent } from './candidaturas/candidatura-list/candidatura-list.component';
import { VagaDetailComponent } from './vagas/vaga-detail/vaga-detail.component';
import { VagaFormComponent } from './vagas/vaga-form/vaga-form.component';
import { VagaListComponent } from './vagas/vaga-list/vaga-list.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CandidaturaListComponent,
    CandidaturaFormComponent,
    CandidaturaDetailComponent,
    VagaListComponent,
    VagaFormComponent,
    VagaDetailComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
