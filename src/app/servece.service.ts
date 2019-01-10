import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class ServeceService {

  constructor(private http:HttpClient) {}

  getAllUsers(){
    return this.http.get("https://reqres.in/api/users?page=2").pipe(map(res=>res));
  }

  getUserId(id:number){
    return this.http.get("https://reqres.in/api/users/"+id).pipe(map(res=>res));
  }
   createUser(userData:object){
     return this.http.post("https://reqres.in/api/users/2",userData).pipe(map(res=>res));
   }
   deletData(id:number){
    return this.http.delete('https://reqres.in/api/users/2/${id}').pipe(map(res=>res));
    //https://reqres.in/api/users/2,https://reqres.in/api/users/2
  }
 
    addNums(...n1:number[]):number{
      return n1[0] + n1[1];
      //let retval:number=0;
      //for(let i=0;i<n1.length;i++){
        //retval = retval + n1[i];
      //}
     // return retval;
    }
     
    subNums(...n1:number[]):number{
      return n1[0] - n1[1];
     // let retval:number=0;
      //for(let i=0;i<n1.length;i++){
        //retval = retval - n1[i];
     // }
      //return retval;
    }
    mulNums(...n1:number[]):number{
      return n1[0] * n1[1];
      //let retval:number=0;
      //for(let i=0;i<n1.length;i++){
        //retval = retval * n1[i];
     // }
      //return retval;
    }
    divdNums(...n1:number[]) {
      return n1[0] / n1[1];
    }
}
