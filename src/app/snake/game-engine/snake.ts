import { KeyInput } from "./input";

export const VELOCIDAD = 4;

export class Snake {
  cuerpo = [
    { x: 11, y: 11 }
  ];

  segmentos = 0
  input = new KeyInput();

  Inputsx2() {
    this.input.getInputs();
  }

  update() {
    this.anadirSegmento();
    const inputDireccion =  this.input.getInputDireccion();
    for (let i = this.cuerpo.length - 2; i >= 0; i--) {
      this.cuerpo[i + 1] = { ...this.cuerpo[i] }
    }
    this.cuerpo[0].x += inputDireccion.x;
    this.cuerpo[0].y += inputDireccion.y;
  }

  animacion(tablero: any) {
    this.cuerpo.forEach(segmento => {
      const snakeElement = document.createElement('div');
      snakeElement.style.gridRowStart = segmento.y.toString();
      snakeElement.style.gridColumnStart = segmento.x.toString();
      snakeElement.style.backgroundColor = '#5fa8d3';
      snakeElement.style.width = '25px';
      snakeElement.style.height = '25px';
      snakeElement.style.borderWidth =  '4px';
      snakeElement.style.borderStyle = 'outset';
      snakeElement.style.borderColor = '#62b6cb';
      snakeElement.style.transition =  'all .3ms ease-in';
      snakeElement.classList.add('snake');
      tablero.appendChild(snakeElement);
    });
  }

  expandSnake(amount: number) {
    this.segmentos += amount;
  }

  getSnakeHead() {
    return this.cuerpo[0];
  }

  snakeIntersection() {
    return this.onSnake(this.cuerpo[0], { cabeza: true });
  }


  onSnake(posicion: any, { cabeza = false } = {}) {
    return this.cuerpo.some((segmento, index) => {
      if (cabeza && index === 0) return false;
      return this.igualar(segmento, posicion);
    })
  }

  igualar(pos1: any, pos2: any) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
  }

  anadirSegmento() {
    for (let i = 0; i < this.segmentos; i++) {
      this.cuerpo.push({ ...this.cuerpo[this.cuerpo.length - 1] });
    }

    this.segmentos = 0;
  }

}