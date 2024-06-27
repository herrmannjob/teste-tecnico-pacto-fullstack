import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VagaService } from '../vaga.service';

@Component({
  selector: 'app-vaga-form',
  templateUrl: './vaga-form.component.html',
  styleUrls: ['./vaga-form.component.css']
})
export class VagaFormComponent implements OnInit {
  vagaForm: FormGroup;
  isEditing = false;
  vagaId: string | null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private vagaService: VagaService
  ) {
    this.vagaForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      requirements: ['', Validators.required]
    });

    this.vagaId = this.route.snapshot.paramMap.get('id');
    this.isEditing = !!this.vagaId;
  }

  ngOnInit(): void {
    if (this.isEditing) {
      this.loadVaga();
    }
  }

  loadVaga(): void {
    if (this.vagaId) {
      this.vagaService.buscarVagaPorId(Number(this.vagaId)).subscribe(
        vaga => this.vagaForm.patchValue(vaga),
        error => console.error('Erro ao carregar vaga', error)
      );
    }
  }

  onSubmit(): void {
    if (this.vagaForm.valid) {
      const vagaData = this.vagaForm.value;
      if (this.isEditing) {
        this.vagaService.atualizarVaga(Number(this.vagaId!), vagaData).subscribe(
          () => this.router.navigate(['/vagas']),
          error => console.error('Erro ao atualizar vaga', error)
        );
      } else {
        this.vagaService.salvarVaga(vagaData).subscribe(
          () => this.router.navigate(['/vagas']),
          error => console.error('Erro ao criar vaga', error)
        );
      }
    }
  }
}
