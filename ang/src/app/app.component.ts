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
  constructor(private http: Http)
  {
    http.get('http://localhost:3000').subscribe(rsp => {
      console.log('got response from Nest');
      console.log(rsp.json());
      this.fromService = rsp.json();

      run();
    });
  }

  title = 'app';
}
