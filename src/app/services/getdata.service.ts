import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable} from 'rxjs';
import { Http ,Request} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  public ip: any = 'http://10.100.234.54:8088'

  constructor(public http: HttpClient,private http2:Http) {}

  getjsondata(val: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return new Observable((observer) => {
      this.http.post(val, httpOptions).subscribe((user: any) => {
        observer.next(user);
        // observer.error(error);
      });
    });
  }

  getone(val: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return new Observable((observer) => {
      this.http.post(this.ip + "/commodityinfo/onecommodity", { cid: val }, httpOptions).subscribe((one: any) => {
        observer.next(one);
      });
    });
  }

  getlist(val: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return new Observable((observer) => {
      this.http.post(this.ip + "/commodityinfo/getselectlist", { cname: val }, httpOptions).subscribe((list: any) => {
        observer.next(list);
      });
    });
  }

  geteach(val: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return new Observable((observer) => {
      this.http.post(this.ip + "/commodityinfo/geteach", { cname: val }, httpOptions).subscribe((list: any) => {
        observer.next(list);
      });
    });
  }

  getparts(val: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return new Observable((observer) => {
      this.http.post(this.ip + "/Parts/getparts", { type: val }, httpOptions).subscribe((list: any) => {
        observer.next(list);
      });
    });
  }

  registered(val: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return new Observable((observer)=>{
      this.http.post(this.ip + "/userinfo/registered",val,httpOptions).subscribe((result:any)=>{
        observer.next(result)
      })
    })
  }

  login(val: any) {
    
    return new Observable((observer)=>{
      this.http2.request(new Request({method:"post",url: this.ip + "/userinfo/login",body:val,withCredentials:true})).subscribe((result:any)=>{
        observer.next(result)
      })
    })
  }

  getuserinfo(val:any) {

    return new Observable((observer)=>{
      this.http2.request(new Request({method:"post",url: this.ip + val,withCredentials:true})).subscribe((result:any)=>{
        observer.next(result)
      })
    })
  }

  getoder(val: any) {
    return new Observable((observer)=>{
      this.http2.request(new Request({method:"post",url: this.ip + val,withCredentials:true})).subscribe((result:any)=>{
        observer.next(result)
      })
    })
  }

  joinshopping(val: any){
    return new Observable((observer)=>{
      this.http2.request(new Request({method:"post",url: this.ip + "/shopping/joinshopping",body: val,withCredentials:true})).subscribe((result:any)=>{
        observer.next(result)
      })
    })
  }

  buy(val: any){
    return new Observable((observer)=>{
      this.http2.request(new Request({method:"post",url: this.ip + "/shopping/alipay",body: val,withCredentials:true})).subscribe((result:any)=>{
        observer.next(result)
      })
    })
  }

  changename(val: any) {
    return new Observable((observer)=>{
      this.http2.request(new Request({method:"post",url: this.ip + "/userinfo/changename",body: val,withCredentials:true})).subscribe((result:any)=>{
        observer.next(result)
      })
    })
  }

  changeaddrs(val: any) {
    return new Observable((observer)=>{
      this.http2.request(new Request({method:"post",url: this.ip + "/userinfo/changeaddrs",body: val,withCredentials:true})).subscribe((result:any)=>{
        observer.next(result)
      })
    })
  }

}
