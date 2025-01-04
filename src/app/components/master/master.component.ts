import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DegignationComponent } from '../degignation/degignation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RolesComponent,DegignationComponent,CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  currentComponant:string="Roles";
  changeTab(tabName:string){
    this.currentComponant=tabName;

  }

}
