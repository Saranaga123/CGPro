import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftingRoomComponent } from './shifting-room.component';

describe('ShiftingRoomComponent', () => {
  let component: ShiftingRoomComponent;
  let fixture: ComponentFixture<ShiftingRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShiftingRoomComponent]
    });
    fixture = TestBed.createComponent(ShiftingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
