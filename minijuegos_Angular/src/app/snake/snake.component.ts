import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Comida} from "./componentesJuego/comida";
import {Snake} from "./componentesJuego/snake";
import {fuera_de_juego} from "./componentesJuego/tablero.util";

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent  implements OnInit, AfterViewInit {
  title = 'SnakeGame';
  tablero: any;
  snake = new Snake();
  comida = new Comida(this.snake);


  Tiempo = 0
  gameOver = false

  ngAfterViewInit() {
    this.tablero = document.querySelector('.game');
    window.requestAnimationFrame(this.start.bind(this));
  }

  ngOnInit(): void {
    this.snake.Inputsx2();
  }
  movimientos(Direccion: string) {
    this.snake.input.setDireccion(Direccion);
  }


  start(TiempoA: any) {
    if (this.gameOver) {
      return console.log('Game Over');
    }

    window.requestAnimationFrame(this.start.bind(this));
    const secondsSinceLastRender = (TiempoA - this.Tiempo) / 1000;
    if (secondsSinceLastRender < 1 / this.supervelocidad) {
      return;
    }
    this.Tiempo = TiempoA;

    this.update();
    this.animacion();
  }

  update() {
    this.snake.update();
    this.comida.update();
    this.muerto();
  }

  animacion() {
    this.tablero.innerHTML = '';
    this.snake.animacion(this.tablero);
    this.comida.animacion(this.tablero);
  }

  muerto() {
    this.gameOver = fuera_de_juego(this.snake.getSnakeHead()) || this.snake.snakeIntersection();
    if (!this.gameOver) {
      return;
    }
    this.tablero.classList.add('blur');
  }


  get supervelocidad() {
    const pto = this.comida.PuntosA;
    if (pto < 10) {
      return 6;
    }
    if (pto > 10 && pto < 15) {
      return 7;
    }
    if (pto > 15 && pto < 20) {
      return 8;
    }
    return 4;
  }


}
