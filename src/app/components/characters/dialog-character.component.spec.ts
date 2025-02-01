import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCharacterComponent } from './dialog-character.component';

describe('DialogCharacterComponent', () => {
  let component: DialogCharacterComponent;
  let fixture: ComponentFixture<DialogCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
