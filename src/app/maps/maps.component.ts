import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor() { }

//ANEXAMOS UN SCRIPT MEDIANTE LA MANIPULACION DEL DOM DESDE TS (SCRIPT DINAMICO)
  public loadScript(url: string) {
    /*crearemos un script,en la constante script inicializamos sus propiedades
    y con la constante body la plasmamos en el dom*/
   const body = <HTMLDivElement> document.body;
   const script = document.createElement('script');
   script.innerHTML = ''; //establecemos sintaxis del html
   script.src = url; //direccion donde cargaremos la fuente del script
   script.async = true; //sin asincronia en la descarga con el html
   script.defer = true; //sin descarga en paralelo con el html
   body.appendChild(script); //añadimos el nodo
 }

  ngOnInit() {
    this.loadScript('https://maps.googleapis.com/maps/api/js?key=TU-API-KEY(https://developers.google.com/maps/documentation/javascript/get-api-key?hl=es)&libraries=places&callback=initMap&&sensor=true');
  }

}
