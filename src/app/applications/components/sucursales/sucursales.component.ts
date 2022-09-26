import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table'
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  rangeDates !: Date[];
  items: MenuItem[] = [];
  loading: boolean = true;


    //Dummy Data
    dummyObject: any[] = [
      { 'id': '01', 'nombre': 'Mario', 'edad': 70, 'color': 'red', 'activo': true },
      { 'id': '02', 'nombre': 'Joel', 'edad': 26, 'color': 'amarillo', 'activo': true },
      { 'id': '04', 'nombre': 'Mariana', 'edad': 43, 'color': 'verde', 'activo': false },
      { 'id': '08', 'nombre': 'Daniel', 'edad': 11, 'color': 'verde', 'activo': true }
    ];

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

  fnApplyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }
}
