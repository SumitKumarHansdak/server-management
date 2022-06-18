import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  successAlert = false;
  serverCreationStatus = '';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    if (this.serverName == '') {
      alert('No Server Name entered!');
    } else {
      this.serverCreationStatus =
        this.serverName + ' Server created successfully!';
      this.successAlert = true;
      setTimeout(() => {
        this.successAlert = false;
      }, 4000);
      this.serverName = '';
    }
  }
}
