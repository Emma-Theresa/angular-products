import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDistrictPageComponent } from './single-district-page.component';

describe('SingleDistrictPageComponent', () => {
  let component: SingleDistrictPageComponent;
  let fixture: ComponentFixture<SingleDistrictPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleDistrictPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleDistrictPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
