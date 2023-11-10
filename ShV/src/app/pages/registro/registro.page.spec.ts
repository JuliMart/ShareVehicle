<<<<<<< HEAD
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
=======
import { ComponentFixture, TestBed, async} from '@angular/core/testing';
>>>>>>> 8a04bccfade98ba203b815198442f549e4cccee5
import { RegistroPage } from './registro.page';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
