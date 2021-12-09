import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroStartComponent } from './cadastro-start.component';

describe('CadastroStartComponent', () => {
  let component: CadastroStartComponent;
  let fixture: ComponentFixture<CadastroStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
