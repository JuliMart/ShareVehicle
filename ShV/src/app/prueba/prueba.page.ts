import { Component, ElementRef, ViewChild } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage {
  @ViewChild('card', { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private animation: Animation | undefined; // Inicializamos con 'undefined'

  constructor(private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blue', 'var(--background)');
  }

  play() {
    if (this.animation) {
      this.animation.play();
    }
  }


}
