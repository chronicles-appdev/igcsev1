import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestTypePage } from './test-type.page';

describe('TestTypePage', () => {
  let component: TestTypePage;
  let fixture: ComponentFixture<TestTypePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
