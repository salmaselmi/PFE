import { Component, OnInit } from '@angular/core'; 
import { GouvernoratService } from 'src/app/Services/gouvernorat.service';

@Component({
  selector: 'app-gouvernorats-list',
  templateUrl: './gouvernorats-list.component.html',
  styleUrls: ['./gouvernorats-list.component.css']
})
export class GouvernoratsListComponent implements OnInit {

  gouvernoratsList=[];

  gouvernoratDelete; 
  dialog: any;
  isPopupOpened: boolean;
 
  constructor(private gouvernoratService:GouvernoratService) { }

  ngOnInit(): void {
    this.gouvernoratService.getAllGouvernorats().subscribe(
      result =>{
        console.log(result);
        this.gouvernoratsList= result;
      },
      error =>{
        console.log(error);
      }
    )
    }

  /*   updateGouvernorat(id: number) {
      this.isPopupOpened = true;
      const gouvernorat = this.gouvernoratService.getAllgouvernorat().find(g => g._id === id);
      const dialogRef = this.dialog.open(GouvernoratsListComponent, {
        data: gouvernorat
      });
  
  
      dialogRef.afterClosed().subscribe(result => {
        this.isPopupOpened = false;
      });
    } */
   
  deleteRow(event) {
    this.gouvernoratDelete = event;
  } 
 
  delete(){
    let index = this.gouvernoratsList.indexOf(this.gouvernoratDelete);
    this.gouvernoratsList.splice(index,1);
    this.gouvernoratService.deleteGouvernorat(this.gouvernoratDelete._id).subscribe(
     res => {
       console.log(res);
     },
     err => {
       console.log(err);
     }
  
   )
   document.getElementById("closeModalButton").click();
  }

}