import { Component, OnInit } from '@angular/core';
import { Vaga } from '../vaga.model';
import { VagaService } from '../vaga.service';

@Component({
  selector: 'app-vaga-list',
  templateUrl: './vaga-list.component.html',
  styleUrls: ['./vaga-list.component.css']
})
export class VagaListComponent implements OnInit {
  vagas: Vaga[] = [];

  constructor(private vagaService: VagaService) { }

  ngOnInit(): void {
    this.carregarVagas();
  }

  carregarVagas(): void {
    this.vagaService.listarVagas().subscribe(
      vagas => this.vagas = vagas,
      error => console.error('Erro ao carregar vagas', error)
    );
  }

}
