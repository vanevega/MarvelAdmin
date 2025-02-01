import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLogComponent } from './item-log.component';

describe('ItemLogComponent', () => {
  let component: ItemLogComponent;
  let fixture: ComponentFixture<ItemLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
