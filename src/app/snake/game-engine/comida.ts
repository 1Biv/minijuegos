import { randomTablero } from './tablero.util';

export class Comida {
  TAMAGNO = 1;
  puntos = 0;
  comida: any;
  snake;
  constructor(snake: any) {
    this.snake = snake;
    this.comida = this.getRandomComida();
  }

  update() {
    if (this.snake.onSnake(this.comida)) {
      this.snake.expandSnake(this.TAMAGNO);
      this.comida = this.getRandomComida();
      this.anadirPuntos = 1;
    }
  }

  animacion(tbl: any) {
    const comidaElement = document.createElement('div');
    comidaElement.style.gridRowStart = this.comida.y;
    comidaElement.style.gridColumnStart = this.comida.x;
    comidaElement.classList.add('comida');
    comidaElement.style.borderRadius = '100%';
    comidaElement.style.backgroundColor = '#bb0a21';
    comidaElement.style.width = '25px';
    comidaElement.style.height = '25px';
    comidaElement.style.transition = 'all .3ms ease-in';
    comidaElement.style.border = '2px solid black';
    tbl.appendChild(comidaElement);
  }


  getRandomComida() {
    let nuevaPosicion;
    while (nuevaPosicion == null || this.snake.onSnake(nuevaPosicion)) {
      nuevaPosicion = randomTablero()
    }
    return nuevaPosicion;
  }

  set anadirPuntos(val: number) {
    this.puntos+=val;
  }

  get PuntosA() {
    return this.puntos;
  }
}