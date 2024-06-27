import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vaga } from '../vaga.model';
import { VagaService } from '../vaga.service';

@Component({
  selector: 'app-vaga-detail',
  templateUrl: './vaga-detail.component.html',
  styleUrls: ['./vaga-detail.component.css']
})
export class VagaDetailComponent implements OnInit {
  vaga: Vaga | undefined;

  constructor(
    private route: ActivatedRoute,
    private vagaService: VagaService
  ) { }

  ngOnInit(): void {
    this.getVagaDetail();
  }

  getVagaDetail(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.vagaService.buscarVagaPorId(id).subscribe(
        vaga => this.vaga = vaga,
        error => console.error('Erro ao carregar vaga', error)
      );
    }
  }
}
