import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitarPipaPage } from './solicitar-pipa.page';

describe('SolicitarPipaPage', () => {
  let component: SolicitarPipaPage;
  let fixture: ComponentFixture<SolicitarPipaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarPipaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
