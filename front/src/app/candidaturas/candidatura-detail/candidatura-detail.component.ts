import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidatura } from '../candidatura.model';
import { CandidaturaService } from '../candidatura.service';

@Component({
  selector: 'app-candidatura-detail',
  templateUrl: './candidatura-detail.component.html',
  styleUrls: ['./candidatura-detail.component.css']
})
export class CandidaturaDetailComponent implements OnInit {

  candidatura: Candidatura | undefined;

  constructor(
    private route: ActivatedRoute,
    private candidaturaService: CandidaturaService
  ) {}

  ngOnInit(): void {
    const candidaturaId = Number(this.route.snapshot.paramMap.get('id'));
    if (candidaturaId) {
      this.loadCandidatura(candidaturaId);
    }
  }

  loadCandidatura(id: number): void {
    this.candidaturaService.getCandidaturaById(id)
      .subscribe(candidatura => {
        this.candidatura = candidatura;
      });
  }
}