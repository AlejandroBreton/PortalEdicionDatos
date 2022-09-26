import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

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
   
    { 'pais': '02', 'canal': '09', 'sucursal': 4410, 'estatus': 'Pendientes', 'fechaActualizacion': '02/07/2022' },
    { 'pais': '02', 'canal': '01', 'sucursal': 352,  'estatus': 'Procesadas', 'fechaActualizacion': '01/07/2022' },
    { 'pais': '04', 'canal': '09', 'sucursal': 9676, 'estatus': 'Error',      'fechaActualizacion': '02/11/2022' },
    { 'pais': '07', 'canal': '09', 'sucursal': 4401, 'estatus': 'Error',      'fechaActualizacion': '02/07/2022' },
    { 'pais': '07', 'canal': '09', 'sucursal': 751,  'estatus': 'Error',      'fechaActualizacion': '02/07/2022' },
    { 'pais': '04', 'canal': '09', 'sucursal': 4410, 'estatus': 'Error',      'fechaActualizacion': '02/07/2022' },
    { 'pais': '04', 'canal': '01', 'sucursal': 4410, 'estatus': 'Error',      'fechaActualizacion': '02/07/2022' },
    { 'pais': '04', 'canal': '01', 'sucursal': 9676, 'estatus': 'Procesadas', 'fechaActualizacion': '02/07/2022' },
    { 'pais': '04', 'canal': '01', 'sucursal': 4410, 'estatus': 'Error',      'fechaActualizacion': '02/07/2022' },
    { 'pais': '04', 'canal': '01', 'sucursal': 4410, 'estatus': 'Procesadas', 'fechaActualizacion': '02/07/2022' },
    { 'pais': '04', 'canal': '01', 'sucursal': 352,  'estatus': 'Procesadas', 'fechaActualizacion': '02/07/2022' },
    { 'pais': '04', 'canal': '09', 'sucursal': 2229, 'estatus': 'Procesadas', 'fechaActualizacion': '02/07/2022' },
    { 'pais': '02', 'canal': '01', 'sucursal': 4410, 'estatus': 'Procesadas', 'fechaActualizacion': '02/07/2022' },
    { 'pais': '02', 'canal': '09', 'sucursal': 9676, 'estatus': 'Error',      'fechaActualizacion': '02/07/2022' },
    { 'pais': '07', 'canal': '09', 'sucursal': 9676, 'estatus': 'Procesadas', 'fechaActualizacion': '02/07/2022' },
    { 'pais': '02', 'canal': '09', 'sucursal': 751,  'estatus': 'Procesadas', 'fechaActualizacion': '02/07/2022' },
    { 'pais': '07', 'canal': '01', 'sucursal': 4410, 'estatus': 'Pendientes', 'fechaActualizacion': '02/07/2022' },
    { 'pais': '02', 'canal': '01', 'sucursal': 4410, 'estatus': 'Pendientes', 'fechaActualizacion': '02/07/2022' },
    { 'pais': '04', 'canal': '01', 'sucursal': 352,  'estatus': 'Pendientes', 'fechaActualizacion': '02/07/2022' },
    { 'pais': '04', 'canal': '01', 'sucursal': 4410, 'estatus': 'Procesadas', 'fechaActualizacion': '02/07/2022' },
    { 'pais': '04', 'canal': '01', 'sucursal': 4410, 'estatus': 'Procesadas', 'fechaActualizacion': '02/07/2022' },
    { 'pais': '02', 'canal': '09', 'sucursal': 9676, 'estatus': 'Procesadas', 'fechaActualizacion': '02/07/2022' },
    { 'pais': '02', 'canal': '09', 'sucursal': 9676, 'estatus': 'Procesadas', 'fechaActualizacion': '02/07/2022' },
    { 'pais': '07', 'canal': '09', 'sucursal': 9676, 'estatus': 'Procesadas', 'fechaActualizacion': '02/07/2022' },
    { 'pais': '02', 'canal': '01', 'sucursal': 4410, 'estatus': 'Procesadas', 'fechaActualizacion': '02/07/2022' }

  ];

  constructor() { }

  ngOnInit() {

    console.log(this.rangeDates);


    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
      {
        label: 'Edición',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Sucursales', icon: 'pi pi-fw pi-building', routerLink: '/sucursales' },
          { label: 'Parametros', icon: 'pi pi-fw pi-list', routerLink: '/parametros' }
        ]
      },
      { label: 'Terminal', icon: 'pi pi-fw pi-hashtag', routerLink: '/terminal' },
    ];

    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Pedientes',
          data: [55, 29, 30, 41, 29, 15, 6],
          fill: false,
          borderColor: '#72a5ed',
          tension: .2
        },
        {
          label: 'Con error',
          data: [2, 7, 1, 9, 2, 8, 12],
          fill: false,
          borderColor: '#ed72c2',
          tension: .6
        },
        {
          label: 'Prpcesadas',
          data: [28, 10, 9, 19, 39, 31, 51],
          fill: false,
          borderColor: '#95ed72',
          tension: .4
        }
      ]
    };

  }

  fnApplyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }


}
