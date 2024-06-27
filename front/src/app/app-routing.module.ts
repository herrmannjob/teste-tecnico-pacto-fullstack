import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importe os componentes que serão usados nas rotas
import { CandidaturaListComponent } from './candidaturas/candidatura-list/candidatura-list.component';
import { CandidaturaDetailComponent } from './candidaturas/candidatura-detail/candidatura-detail.component';
import { CandidaturaFormComponent } from './candidaturas/candidatura-form/candidatura-form.component';
import { VagaDetailComponent } from './vagas/vaga-detail/vaga-detail.component';
import { VagaFormComponent } from './vagas/vaga-form/vaga-form.component';
import { VagaListComponent } from './vagas/vaga-list/vaga-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/candidaturas', pathMatch: 'full' }, // Rota padrão para redirecionar para candidaturas
  { path: 'candidaturas', component: CandidaturaListComponent },
  { path: 'candidaturas/nova', component: CandidaturaFormComponent },
  { path: 'candidaturas/:id', component: CandidaturaDetailComponent },
  { path: 'vagas', component: VagaListComponent }, // Rota padrão para redirecionar para vagas
  { path: 'vagas/nova', component: VagaFormComponent },
  { path: 'vagas/:id', component: VagaDetailComponent },
  { path: '**', redirectTo: '/candidaturas' } // Rota padrão para redirecionar para candidaturas caso a rota não exista
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
