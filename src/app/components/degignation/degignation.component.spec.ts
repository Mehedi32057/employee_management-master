import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegignationComponent } from './degignation.component';

describe('DegignationComponent', () => {
  let component: DegignationComponent;
  let fixture: ComponentFixture<DegignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DegignationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
