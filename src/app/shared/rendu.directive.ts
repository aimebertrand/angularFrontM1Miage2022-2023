import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRendu]'
})
export class RenduDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = 'green';

    //ici on peut aussi modifier l'élément
    //par ex : el.nativeElement.innerHTML = 'je suis un rendu'
    // mettre des ecouteurs, appeler des méthodes
  }

}
