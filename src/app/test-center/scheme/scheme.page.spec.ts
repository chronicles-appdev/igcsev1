import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchemePage } from './scheme.page';

describe('SchemePage', () => {
  let component: SchemePage;
  let fixture: ComponentFixture<SchemePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SchemePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
