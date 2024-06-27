import { Component, OnInit } from '@angular/core';
import { Candidatura } from '../candidatura.model';
import { CandidaturaService } from '../candidatura.service';

@Component({
  selector: 'app-candidatura-list',
  templateUrl: './candidatura-list.component.html',
  styleUrls: ['./candidatura-list.component.css']
})
export class CandidaturaListComponent implements OnInit {

  candidaturas: Candidatura[] = [];

  constructor(private candidaturaService: CandidaturaService) {}

  ngOnInit(): void {
    this.loadCandidaturas();
  }

  loadCandidaturas(): void {
    this.candidaturaService.getAllCandidaturas()
      .subscribe(candidaturas => {
        this.candidaturas = candidaturas;
      });
  }

  deleteCandidatura(id: number): void {
    this.candidaturaService.deleteCandidatura(id)
      .subscribe(() => {
        this.candidaturas = this.candidaturas.filter(c => c.id !== id);
      });
  }
}
