import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidaturaDetailComponent } from './candidatura-detail.component';

describe('CandidaturaDetailComponent', () => {
  let component: CandidaturaDetailComponent;
  let fixture: ComponentFixture<CandidaturaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidaturaDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidaturaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
