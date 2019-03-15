import { KatexModule } from 'ng-katex';
import { MaterialModule } from './../../shared/material.module';
import { LaTexComponent } from './../la-tex/la-tex.component';
import { Chapter2Component } from './../chapter2/chapter2.component';
import { Chapter1Component } from './../chapter1/chapter1.component';
import { GeometryHomeComponent } from './../geometry-home/geometry-home.component';
import { routes } from './../geometry-routing.module';
import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        GeometryHomeComponent,
        Chapter1Component,
        Chapter2Component,
        LaTexComponent
      ],
      imports: [RouterModule.forRoot(routes), MaterialModule, KatexModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
