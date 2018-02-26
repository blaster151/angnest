import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { run } from '../../../shared/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private fromService: any = null;
  private branches: string[] = [];

  constructor(private http: Http)
  {
    http.get('http://localhost:3000/branches').subscribe(rsp => {
      console.log('got response from Nest');
      console.log(rsp.json());
      this.fromService = rsp.json().current;
      this.branches = Object.keys(rsp.json().branches).map(k => rsp.json().branches[k].name);

      
      
      run();
    });
  }

  title = 'app';
}
