import { KatexModule } from 'ng-katex';
import { MaterialModule } from './../../shared/material.module';
import { LaTexComponent } from './../la-tex/la-tex.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { Chapter2Component } from './../chapter2/chapter2.component';
import { Chapter1Component } from './../chapter1/chapter1.component';
import { RouterModule } from '@angular/router';
import { routes } from './../geometry-routing.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometryHomeComponent } from './geometry-home.component';

describe('GeometryHomeComponent', () => {
  let component: GeometryHomeComponent;
  let fixture: ComponentFixture<GeometryHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Chapter1Component,
        Chapter2Component,
        GeometryHomeComponent,
        DashboardComponent,
        LaTexComponent
      ],
      imports: [RouterModule.forRoot(routes), MaterialModule, KatexModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
