import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; 


//    ESSE ROOT É UM SINGLETON
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private bar:MatSnackBar) { }

  showMessage(msg: string):void {
    
    this.bar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition: "top"
    })
  
  }
}