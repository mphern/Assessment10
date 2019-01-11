import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyThoughtsComponent } from './my-thoughts.component';

describe('MyThoughtsComponent', () => {
  let component: MyThoughtsComponent;
  let fixture: ComponentFixture<MyThoughtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyThoughtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
