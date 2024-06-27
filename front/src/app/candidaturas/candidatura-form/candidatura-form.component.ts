// candidatura-form.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidatura } from '../candidatura.model';
import { CandidaturaService } from '../candidatura.service';

@Component({
  selector: 'app-candidatura-form',
  templateUrl: './candidatura-form.component.html',
  styleUrls: ['./candidatura-form.component.css']
})
export class CandidaturaFormComponent implements OnInit {

  candidatura: Candidatura = {
    id: 0,
    vagaId: 0,
    nomeCandidato: '',
    email: '',
    telefone: '',
    experiencia: '',
    status: ''
  };
  isNew = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private candidaturaService: CandidaturaService
  ) {}

  ngOnInit(): void {
    const candidaturaId = Number(this.route.snapshot.paramMap.get('id'));
    if (candidaturaId) {
      this.isNew = false;
      this.loadCandidatura(candidaturaId);
    }
  }

  loadCandidatura(id: number): void {
    this.candidaturaService.getCandidaturaById(id)
      .subscribe(candidatura => {
        this.candidatura = candidatura;
      });
  }

  saveCandidatura(): void {
    if (this.isNew) {
      this.candidaturaService.createCandidatura(this.candidatura)
        .subscribe(() => {
          this.router.navigate(['/candidaturas']);
        });
    } else {
      this.candidaturaService.updateCandidatura(this.candidatura)
        .subscribe(() => {
          this.router.navigate(['/candidaturas']);
        });
    }
  }
}
