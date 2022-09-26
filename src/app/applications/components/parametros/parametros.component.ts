import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit {

  items: MenuItem[] = [];
  loading: boolean = true;

  constructor() { }

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
