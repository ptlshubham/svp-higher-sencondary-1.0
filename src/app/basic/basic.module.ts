import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { BasicRoutes } from './basic.routing';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { ContactComponent } from './contact/contact.component';
import { StructureComponent } from './structure/structure.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionComponent } from './session/session.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    InfrastructureComponent,
    ActivityComponent,
    ContactComponent,
    StructureComponent,
    SessionComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(BasicRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BasicModule { }
