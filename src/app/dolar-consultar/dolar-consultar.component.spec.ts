import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarConsultarComponent } from './dolar-consultar.component';

describe('DolarConsultarComponent', () => {
  let component: DolarConsultarComponent;
  let fixture: ComponentFixture<DolarConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DolarConsultarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DolarConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
