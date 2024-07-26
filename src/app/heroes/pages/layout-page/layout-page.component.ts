import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

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

  ];

  constructor(private authService : AuthService, private router : Router){

  }

  get user():User | undefined{

    return this.authService.currentUser
  }


  onLogout(){

    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }

}
