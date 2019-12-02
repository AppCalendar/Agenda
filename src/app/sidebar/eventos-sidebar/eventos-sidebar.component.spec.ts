import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosSidebarComponent } from './eventos-sidebar.component';

describe('EventosSidebarComponent', () => {
  let component: EventosSidebarComponent;
  let fixture: ComponentFixture<EventosSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
