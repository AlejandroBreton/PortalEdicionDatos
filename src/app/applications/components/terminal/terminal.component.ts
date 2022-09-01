import { Component, OnInit } from '@angular/core';
import {TerminalModule} from 'primeng/terminal';
import {TerminalService} from 'primeng/terminal';
import {Subscription}   from 'rxjs';

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
  }

  ngOnInit() {
  }


}
