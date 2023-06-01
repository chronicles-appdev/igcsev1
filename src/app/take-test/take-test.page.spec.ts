import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TakeTestPage } from './take-test.page';

describe('TakeTestPage', () => {
  let component: TakeTestPage;
  let fixture: ComponentFixture<TakeTestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TakeTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
