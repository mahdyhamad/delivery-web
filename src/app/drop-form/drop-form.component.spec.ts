import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropFormComponent } from './drop-form.component';

describe('DropFormComponent', () => {
  let component: DropFormComponent;
  let fixture: ComponentFixture<DropFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
