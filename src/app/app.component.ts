import { Component } from '@angular/core';

import { ServeceService } from './servece.service';
import { attachEmbeddedView } from '../../node_modules/@angular/core/src/view';
  
  
  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title="Welcome Angular5 and 6 .... ";

Login:boolean=true;

number:number=0;
dispalyData:any=[];


btnLogin(){
  this.Login=!this.Login;
}
btnLogint(){
  this.Login=true;
}

constructor(private objService:ServeceService){
 

} 

add(){
  alert(this.objService.addNums(10,20));
  
}
subNums(){
  alert(this.objService.subNums(10,20));
}
mulNums(){
alert(this.objService.mulNums(10,20));
}
divdNum(){
  alert(this.objService.divdNums(10,20));
}
fechUser(){
  this.objService.getAllUsers().subscribe(data=>{
  this.dispalyData=data;
    this.dispalyData = this.dispalyData.data;
    //alert(JSON.stringify(this.dispalyData));
    //console.log(this.dispalyData);
  },
  err=>{
    alert(JSON.stringify(err));
  },
  ()=>{
    alert("DONE")
  }
);
}

fechUserId(){
  this.objService.getUserId(2).subscribe(data=>{
    this.dispalyData = data
    this.dispalyData = this.dispalyData.data;
    //alert(JSON.stringify(prasad));
  },
err=>{
  alert(JSON.stringify(err));
},
  ()=>{
    alert("Done");
  }
);
}

insertUser(){
  this.objService.createUser({name:"prasad",lastName:"vara"}).subscribe(prasad=>{
    //this.dispalyData = prasad
    alert(JSON.stringify(prasad));
  },
  err=>{
    alert(JSON.stringify(err))
  },
  ()=>{
    alert("DONE");
  }
)
}
id=204;
 z = confirm("Press the confirm button!\nYou have two choices.");

removeUser(id){
  this.objService.deletData(this.id).subscribe(data=>{
    //this.dispalyData = data
   //this.dispalyData = this.dispalyData.data;
    //alert(JSON.stringify(prasad));
    this.dispalyData.pop();
    if(confirm("Do you want to Delete ?")!== confirm("Do you want to Delete ?")){
      this.objService.deletData(id);
    }
  },
  err=>{
    alert(JSON.stringify(err))
  },
   
  
  // if (z == true) {
    //dispalyData = "You chose OK!";
   //} else {
  //  dispalyData = "You Cancelled!";
   //}
)
};

}
