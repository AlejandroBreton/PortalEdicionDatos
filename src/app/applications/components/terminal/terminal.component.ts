import { Component, OnInit } from '@angular/core';
import {TerminalModule} from 'primeng/terminal';
import {TerminalService} from 'primeng/terminal';
import {Subscription}   from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
  providers: [TerminalService]
})
export class TerminalComponent implements OnInit {

  constructor(private terminalService: TerminalService) {
    this.terminalService.commandHandler.subscribe(command => {
        let response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;
        this.terminalService.sendResponse(response);
    });
  };

  items: MenuItem[] = [];
  loading: boolean = true;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
      {
        label: 'Edición',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Sucursales', icon: 'pi pi-fw pi-building', routerLink: '/sucursales' },
          { label: 'Parametros', icon: 'pi pi-fw pi-list', routerLink: '/parametros'}
        ]
      },
      { label: 'Terminal', icon: 'pi pi-fw pi-hashtag', routerLink: '/terminal' },
    ];
  }


}
