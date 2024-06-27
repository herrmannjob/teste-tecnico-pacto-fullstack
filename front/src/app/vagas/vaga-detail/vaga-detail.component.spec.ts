import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaDetailComponent } from './vaga-detail.component';

describe('VagaDetailComponent', () => {
  let component: VagaDetailComponent;
  let fixture: ComponentFixture<VagaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VagaDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
