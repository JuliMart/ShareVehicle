import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewPassPage } from './new-pass.page';

describe('NewPassPage', () => {
  let component: NewPassPage;
  let fixture: ComponentFixture<NewPassPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPassPage],
    }).compileComponents();

    fixture = TestBed.createComponent(NewPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
