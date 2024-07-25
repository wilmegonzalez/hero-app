import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {


  public sidebarItem = [
    {label: 'Listado', icon: 'label', path: './list'},
    {label: 'Agregar', icon: 'add', path: './new-hero'},
    {label: 'Buscar', icon: 'search', path: './search'},

  ]

}
