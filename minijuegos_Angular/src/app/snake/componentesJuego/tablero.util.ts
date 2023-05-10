const TABLERO = 12

export function randomTablero() {
  return {
    x: Math.floor(Math.random() * TABLERO) + 1,
    y: Math.floor(Math.random() * TABLERO) + 1
  }
}

export function fuera_de_juego(position: any) {
  return (
    position.x < 1 || position.x > TABLERO ||
    position.y < 1 || position.y > TABLERO
  )
}