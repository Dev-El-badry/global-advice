import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsBottomComponent } from './contact-us-bottom.component';

describe('ContactUsBottomComponent', () => {
  let component: ContactUsBottomComponent;
  let fixture: ComponentFixture<ContactUsBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
