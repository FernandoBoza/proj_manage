import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgHolderComponent } from './img-holder.component';

describe('ImgHolderComponent', () => {
  let component: ImgHolderComponent;
  let fixture: ComponentFixture<ImgHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
