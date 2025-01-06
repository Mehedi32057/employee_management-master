import { Component, inject,OnInit } from '@angular/core';
import { MasterService } from '../../sevices/master.service';
import { Apireponse, IDesignation } from '../../modal/role';
import { error } from 'console';

@Component({
  selector: 'app-degignation',
  standalone: true,
  imports: [],
  templateUrl: './degignation.component.html',
  styleUrl: './degignation.component.css'
})
export class DegignationComponent implements OnInit {
  designationlist:IDesignation[]=[];
  isLoader:boolean=true;
  masterService= inject(MasterService)

  ngOnInit(): void {
      this.masterService.getDesignation().subscribe((res:Apireponse)=>{
        this.designationlist=res.data
        this.isLoader=false;

      },error=>{
        alert("Api error/Netwoek Down")
        this.isLoader=false;


      })
  }

}
