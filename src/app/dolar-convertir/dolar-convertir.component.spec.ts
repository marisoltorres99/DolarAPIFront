import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarConvertirComponent } from './dolar-convertir.component';

describe('DolarConvertirComponent', () => {
  let component: DolarConvertirComponent;
  let fixture: ComponentFixture<DolarConvertirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DolarConvertirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DolarConvertirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
