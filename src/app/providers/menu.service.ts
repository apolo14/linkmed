import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  opened: boolean = false;
  options: any[] = [
    {
      icon: 'fa fa-home',
      text: 'Pagina inicial',
      route: '/'
    },
    {
      icon: 'fa fa-gamepad',
      text: 'Lista de pacientes',
      route: '/patients'
    },
    {
      icon: 'fa fa-gamepad',
      text: 'Cadastro de pacientes',
      route: '/patient-form'
    },
    {
      icon: 'fa fa-gamepad',
      text: 'Sobre nós',
      route: '/about'
    },
    {
      icon: 'fa fa-gamepad',
      text: 'Fale c/o desenvolvedor',
      route: '/contact'
    }
  ]
  constructor() { }
  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

  fix() {
    if (document.body.scrollTop > 65) {
      $('section.outer').addClass('margin-fix');
    } else {
      $('section.outer').removeClass('margin-fix');
    }
  }

}
