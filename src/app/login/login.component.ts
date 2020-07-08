import { Component, OnInit } from '@angular/core';
import { FetchClientDataService } from '../fetch-client-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fetchClientDataService: FetchClientDataService,
    private router: Router) { }

  ngOnInit() {
    const client = localStorage.getItem('client');
    if (client) {
      this.router.navigateByUrl('client/' + JSON.parse(client).clientId);
    }
    this.loginForm = new FormGroup({
      identity: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.loginForm.valid === true) {
      this.fetchClientDataService.login(this.loginForm.value)
        .subscribe(data => {
          if (data.clientId > 0) {
            localStorage.setItem('client', JSON.stringify({ clientId: data.clientId }));
            this.router.navigateByUrl('client/' + data.clientId);
          } else {
            this.router.navigateByUrl('client/0');
          }
        });
    }

  }

}
