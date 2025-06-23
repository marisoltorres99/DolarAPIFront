import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarHomeComponent } from './dolar-home.component';

describe('DolarHomeComponent', () => {
  let component: DolarHomeComponent;
  let fixture: ComponentFixture<DolarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DolarHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DolarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
