import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  edit(emp: any) {
    throw new Error("Method not implemented.");
  }


  constructor(public http:HttpClient) { }
  
 getData(){

    return this.http.get("http://200.0.1.203:4000/emp");
    }
    addRecord(emp)
    {
     return this.http.post("http://200.0.1.203:4000/emp",emp);
    }
    delete(no)
    {
      return this.http.delete("http://200.0.1.203:4000/emp/" + no);
    }
    update(emp)
    {
      return this.http.put("http://200.0.1.203:4000/emp/"+ emp.no,emp);
    }
    getDataByID(no)
    {
      return this.http.get("http://200.0.1.203:4000/emp/"+ no);
  
    }
    
   
  }
