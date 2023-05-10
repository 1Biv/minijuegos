export class KeyInput {
    inputDireccion = { x: 0, y: 0 };
    ultimoInputDi = { x: 0, y: 0 };
  
  
    getInputs() {
      window.addEventListener('keydown', e => {
        this.setDireccion(e.key);
      })
    }
  
    setDireccion(Direccion: String) {
      switch (Direccion) {
        case 'ArrowUp':
          if (this.ultimoInputDi.y !== 0) break;
          this.inputDireccion = { x: 0, y: -1 };
          break;
        case 'ArrowDown':
          if (this.ultimoInputDi.y !== 0) break;
          this.inputDireccion = { x: 0, y: 1 };
          break;
        case 'ArrowLeft':
          if (this.ultimoInputDi.x !== 0) break;
          this.inputDireccion = { x: -1, y: 0 };
          break;
        case 'ArrowRight':
          if (this.ultimoInputDi.x !== 0) break;
          this.inputDireccion = { x: 1, y: 0 };
          break;
      }
    }
  
    getInputDireccion() {
      this.ultimoInputDi = this.inputDireccion;
      return this.inputDireccion;
    }
  
  }