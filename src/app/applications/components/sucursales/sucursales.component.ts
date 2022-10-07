import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MenuItem, SortEvent, PrimeNGConfig, MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { elementAt } from 'rxjs';


 interface Sucursal {
  fiTiendaId?:      string,
  fcDescTienda ?:   string,
  fcDirecIP?:       string,
  fiCanal?:         string,
  fiPais?:          string,
  fiTiendaDest?:    string,
  fcObservaciones?: string
 }

 editSucursal : FormGroup;

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css'],
  providers: [MessageService]
})
export class SucursalesComponent implements OnInit {

  rangeDates ?: Date[];
  items: MenuItem[] = [];
  loading: boolean = true;
  idTienda           ?: string;
  nombreTienda       ?: string;
  ipTienda           ?: string;
  canalTienda        ?: string;
  paisTienda         ?: string;
  destinoTienda      ?: string;
  observacionesTienda?: string;

  nuevaSucursal ?: Sucursal = {};
  

  flagEstatusCheck: any;

    //Dummy Data
    dummyObject: any[] =  [
    {
        "fiTiendaId": 1,
        "fcDescTienda": "Sucursal ficticias",
        "fcDirecIP": "10.54.66.54",
        "fiCanal": 1,
        "fiPais": 4,
        "fiStatus": 1,
        "fiTiendaDest": 0,
        "fcObservaciones": ""
    },
    {
        "fiTiendaId": 100,
        "fcDescTienda": "MEGA ELEKTRA LA LUNA",
        "fcDirecIP": "10.54.66.147",
        "fiCanal": 1,
        "fiPais": 1,
        "fiStatus": 1,
        "fiTiendaDest": 0,
        "fcObservaciones": ""
    },
    {
        "fiTiendaId": 107,
        "fcDescTienda": "AZCAPOTZALCO 1",
        "fcDirecIP": "10.54.66.147",
        "fiCanal": 1,
        "fiPais": 1,
        "fiStatus": 1,
        "fiTiendaDest": 0,
        "fcObservaciones": ""
    },
    {
        "fiTiendaId": 109,
        "fcDescTienda": "PERU VENTANILLA",
        "fcDirecIP": "10.54.66.76",
        "fiCanal": 1,
        "fiPais": 6,
        "fiStatus": 1,
        "fiTiendaDest": 8109,
        "fcObservaciones": ""
    },
    {
        "fiTiendaId": 110,
        "fcDescTienda": "MEGA ALTAMIRA TAMAULIPAS",
        "fcDirecIP": "10.54.66.147",
        "fiCanal": 1,
        "fiPais": 1,
        "fiStatus": 1,
        "fiTiendaDest": 0,
        "fcObservaciones": ""
    },
    {
        "fiTiendaId": 111,
        "fcDescTienda": "PERU PUENTE GRANDE",
        "fcDirecIP": "10.54.66.76",
        "fiCanal": 1,
        "fiPais": 6,
        "fiStatus": 1,
        "fiTiendaDest": 0,
        "fcObservaciones": ""
    },
    {
        "fiTiendaId": 114,
        "fcDescTienda": "MEGA EMPALME",
        "fcDirecIP": "10.54.66.147",
        "fiCanal": 1,
        "fiPais": 1,
        "fiStatus": 1,
        "fiTiendaDest": 0,
        "fcObservaciones": ""
    },
    {
        "fiTiendaId": 116,
        "fcDescTienda": "MEGA ELEKTRA JUAREZ LAS TORRES",
        "fcDirecIP": "10.54.66.147",
        "fiCanal": 1,
        "fiPais": 1,
        "fiStatus": 1,
        "fiTiendaDest": 0,
        "fcObservaciones": ""
    }
];
  constructor( 
    private messageService: MessageService,
    ) { }

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
      // ***Dialogs***
      dialogNewSucursal ?: boolean;
      dialogEditSucursal ?: boolean;

  fnShowInfoEdit(id: any){
    for( let i : number = 0; i<= this.dummyObject.length ; i++){
      console.log(this.dummyObject[i]);
      
      if(this.dummyObject[i].fiTiendaId == id){

        this.idTienda           = this.dummyObject[i].fiTiendaId;
        this.nombreTienda       = this.dummyObject[i].fcDescTienda;
        this.ipTienda           = this.dummyObject[i].fcDirecIP;
        this.canalTienda        = this.dummyObject[i].fiCanal;
        this.paisTienda         = this.dummyObject[i].fiPais;
        this.destinoTienda      = this.dummyObject[i].fiTiendaDest;
        this.observacionesTienda= this.dummyObject[i].fcObservaciones;

        if(this.dummyObject[i].fiStatus == 1){
          this.flagEstatusCheck = true;
        }else{
          this.flagEstatusCheck = false;
        }
        console.log(this.flagEstatusCheck);
        

        break;
      }
    }
  };

  fnNewRow(){
    this.dummyObject.push();
  }

  fnEditRow(id : any){
    for( let i : number = 0; i<= this.dummyObject.length ; i++){

      //console.log("id" + this.idTienda + "... Nombre " +this.nombreTienda + " ... IP "+ this.ipTienda);
      
      if(this.dummyObject[i].fiTiendaId == id){
        console.log(this.dummyObject[i]);
        console.log(this.idTienda);
        this.dummyObject[i].fiTiendaId = this.idTienda;
        console.log(this.dummyObject[i].fiTiendaId);
        

        console.log(this.dummyObject[i]);
        console.log(this.nombreTienda);
        this.dummyObject[i].fcDescTienda = this.nombreTienda;
        console.log(this.dummyObject[i].fcDescTienda);

        this.dummyObject[i].fcDirecIP = this.ipTienda;
        this.dummyObject[i].fiCanal = this.canalTienda;
        this.dummyObject[i].fiPais = this.paisTienda;
        this.dummyObject[i].fiStatus = 1;
        this.dummyObject[i].fiTiendaDest = this.destinoTienda;
        this.dummyObject[i].fcObservaciones = this.observacionesTienda;

        this.showDialogSuccess("Edición de sucursal");
        this.dialogEditSucursal=false;
        break;
      }
      //window.location.reload();
      console.log(this.dummyObject[i]);
      
    }
  }

  fnDeleteRow(id : any){
    for( let i : number = 0; i<= this.dummyObject.length ; i++){
      
      if(this.dummyObject[i].fiTiendaId == id){
        this.dummyObject[i].fiStatus = 0;
        this.showDialogSuccess("Sucursal desactivada");

        break;
      }

    }
  }

  showDialogNewSucursal() {
    this.dialogNewSucursal = true;
  }

  fnSaveSucursal() {
    this.showDialogSuccess('Sucursal agregada');
    this.dialogNewSucursal = false;
  }

  showDialogEditSucursal(id: any) {
    this.dialogEditSucursal = true;
    this.fnShowInfoEdit(id);
  }


  // ** Alerts **
  showDialogSuccess(evento: string) {
    this.messageService.add({severity:'success', summary: evento, detail: 'Se ejecuto correctamente.'});
  }
  showDialogWarn(evento: string) {
    this.messageService.add({severity:'warn', summary: evento, detail: 'Error de ejecución.'});
  }
  showDialogError() {
    this.messageService.add({severity:'warn', summary: 'Error', detail: 'Error de conexión.'});
  }
  onReject() {
    this.messageService.clear('c');
  }
  onConfirm() {
    this.messageService.clear('c');
  }

}
