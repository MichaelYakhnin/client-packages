import { Component, OnInit } from '@angular/core';
import { FetchClientDataService } from '../fetch-client-data.service';
import { Client, Subs } from '../models/client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
 clients: Client[];
 selectedClient: Client;
 selectedSubs: Subs;

  constructor(private fetchClientDataService: FetchClientDataService) { }

  ngOnInit() {
    this.fetchClientDataService.getClients()
    .subscribe(data => {
      this.clients = data;
      console.log(data);
    });
  }
  onChangeClient(clientId) {
    console.log(clientId);
    this.selectedClient = this.clients.find(cl => cl.identity === clientId);
    this.selectedSubs = this.selectedClient.subscriptions[0];
    console.log(this.selectedSubs);
  }
  onChangeSubs(name) {
    this.selectedSubs = this.selectedClient.subscriptions.find(el => el.subscriptionName === name);
  }
}
