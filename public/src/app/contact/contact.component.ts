import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


    name = '';
    email = '';
    comment = '';


  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  formSubmit() {
     const observable = this._httpService.onSubmit({name: this.name, email: this.email, comment: this.comment});
     observable.subscribe(data => console.log (data));
       this.name = '';
       this.email = '';
       this.comment = '';
   }

}
