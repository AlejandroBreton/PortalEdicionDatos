import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table'
import { ChartModule } from 'primeng/chart';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  items: MenuItem[] = [];
  loading: boolean = true;
  activityValues: number[] = [0, 100];
  rangeDates !: Date[];
  basicData: any;

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
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      {
        label: 'Edición',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Sucursales', icon: 'pi pi-fw pi-building' },
          { label: 'Parametros', icon: 'pi pi-fw pi-list' }
        ]
      },
      { label: 'Terminal', icon: 'pi pi-fw pi-hashtag' },
    ];

    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Pedientes',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#385ED5',
          tension: .2
        },
        {
          label: 'Con error',
          data: [2, 7, 1, 9, 2, 8, 12],
          fill: false,
          borderColor: '#EA1562',
          tension: .6
        },
        {
          label: 'Prpcesadas',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#D3EA15',
          tension: .4
        }
      ]
    };

  }

  fnApplyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }


}
