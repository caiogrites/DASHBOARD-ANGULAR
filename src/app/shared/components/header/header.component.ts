import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter(); //módulo de eventos()

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(  //Despacha um evento de evento sintético para o destino e retorna verdadeiro se o valor do atributo cancelável do evento for falso ou se seu método preventDefault () não tiver sido invocado, e falso caso contrário.
        new Event('resize')
        );
      }, 200);
  }

}
