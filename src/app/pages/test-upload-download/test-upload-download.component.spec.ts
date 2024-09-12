import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUploadDownloadComponent } from './test-upload-download.component';

describe('TestUploadDownloadComponent', () => {
  let component: TestUploadDownloadComponent;
  let fixture: ComponentFixture<TestUploadDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestUploadDownloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestUploadDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
