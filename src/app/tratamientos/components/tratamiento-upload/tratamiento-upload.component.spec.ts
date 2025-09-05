import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoUploadComponent } from './tratamiento-upload.component';

describe('TratamientoUploadComponent', () => {
  let component: TratamientoUploadComponent;
  let fixture: ComponentFixture<TratamientoUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TratamientoUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TratamientoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
