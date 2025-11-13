import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubidaFicherosComponent } from './subida-ficheros.component';

describe('SubidaFicherosComponent', () => {
  let component: SubidaFicherosComponent;
  let fixture: ComponentFixture<SubidaFicherosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubidaFicherosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubidaFicherosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
