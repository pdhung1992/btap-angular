import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorebycityComponent } from './storebycity.component';

describe('StorebycityComponent', () => {
  let component: StorebycityComponent;
  let fixture: ComponentFixture<StorebycityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorebycityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorebycityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
