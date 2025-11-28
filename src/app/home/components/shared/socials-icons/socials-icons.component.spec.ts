import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsIconsComponent } from './socials-icons.component';
import { beforeEach, describe, expect, it } from 'vitest';

describe('SocialsIconsComponent', () => {
  let component: SocialsIconsComponent;
  let fixture: ComponentFixture<SocialsIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialsIconsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialsIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
