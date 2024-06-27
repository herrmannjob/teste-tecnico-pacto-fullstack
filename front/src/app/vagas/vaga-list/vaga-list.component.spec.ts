import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaListComponent } from './vaga-list.component';

describe('VagaListComponent', () => {
  let component: VagaListComponent;
  let fixture: ComponentFixture<VagaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VagaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
