import { Component } from '@angular/core';

@Component({
  selector: 'tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent {
  
  tablero: any[] = [];
  tablero_o: any[] =[]
  turno: number=1;
  last_fila : number=0;
  last_columna : number=0;
  del_fila : number=0;
  del_columna :number=0;

  ficha_actual :number =0;
  constructor() {
    this.generarTablero();
    this.start_position();
  }
  

  generarTablero() {
    for (let i = 0; i < 8; i++) {
      this.tablero[i] = [];
      for (let j = 0; j < 8; j++) {
        let color = (i + j) % 2 === 0 ? 'blanco' : 'negro';
        this.tablero[i][j] = { fila: i, columna: j, color: color ,estado: 0};
      }
    }
    for (let i = 0; i < 8; i++) {
      this.tablero_o[i] = [];
      for (let j = 0; j < 8; j++) {
        let color = (i + j) % 2 === 0 ? 'blanco' : 'negro';
        this.tablero_o[i][j] = { fila: i, columna: j, color: color ,estado: 0};
      }
    }
  }
  start_position(){
    for (let i = 0; i <2; i++) {
      for (let j = 0; j <8; j++) {
        if((i+j)%2==0){
          this.tablero[i][j].estado=2;
        }
      }
    }
    for (let i = 6; i <8; i++) {
      for (let j = 0; j <8; j++) {
        if((i+j)%2==0){
          this.tablero[i][j].estado=1;
        }
      }
    }
  }
  casillaSeleccionada(fila: number, columna: number,estado: number) {
    if(estado==-1){
      this.comer(fila,columna);
      if(this.tablero[this.last_fila][this.last_columna].estado ==1 && fila==0){
        this.tablero[fila][columna].estado = 11;
      } else
      if(this.tablero[this.last_fila][this.last_columna].estado ==2 && fila==7){
        this.tablero[fila][columna].estado = 22;
      } else{
        this.tablero[fila][columna].estado = this.ficha_actual;
      }
      this.tablero[this.last_fila][this.last_columna].estado=0;
      this.turno++;
    }
    this.clear()
    if(this.turno%2==0){
      
      this.ficha_actual=this.tablero[fila][columna].estado;
      if(estado==2 || estado ==22){
        this.p_move(fila,columna,estado)
      }
      this.ficha_actual=estado;
      this.last_columna=columna;
      this.last_fila=fila;
    }else {
      this.ficha_actual=this.tablero[fila][columna].estado;
      if(estado==1  || estado==11){
        this.p_move(fila,columna,estado)
      }
      this.ficha_actual=estado;
      this.last_columna=columna;
      this.last_fila=fila;
    }
  }
  check_winner(){
    let blancas : number=0;
    let negras : number=0;
    for(let i=0;i<8;i++){
      for(let j=0;j<8;j++){
        if(this.tablero[i][j].estado==1 || this.tablero[i][j].estado==11){
          negras++;
        }
        if(this.tablero[i][j].estado==2 || this.tablero[i][j].estado==22){
          blancas++;
        }
      }
    }
    if(negras<=0){
      alert("Ganan las blancas")
    }
    if(blancas<=0) {
      alert("Ganan las negras")
    }
  }
  puede_comer(){
    let aux:number=0;
    let f:boolean=false;
    let can :boolean=false;
    for(let i =0;i<8;i++){
      for(let j=0;j<8;j++){
        

      }
    }
    if(can){
      alert("Tienes que comer")
    }else {
      alert("turno +1")
      this.turno++;
    }
  }
  can_eat(){
    let ficha :number=0;
    let can =false;
    let fila: number=0;
    let columna:number =0;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        fila=i;
        columna=j;
        switch (this.tablero[fila][columna].estado) {

          case 1:
           if(fila+1 <8 && columna-1>=0){
              if(this.tablero[fila+1][columna-1].estado==2 ||this.tablero[fila+1][columna-1].estado==22){
                if(fila+2 <8 && columna-2>=0){
                  if(this.tablero[fila+2][columna-2].estado==0){
                    can = true;
                  }
               }
              }
           }
           if(fila-1 >=0 && columna-1>=0){
            if(this.tablero[fila-1][columna-1].estado==2 ||this.tablero[fila-1][columna-1].estado==22){
              if(fila-2 >=0 && columna-2>=0){
                if(this.tablero[fila-2][columna-2].estado==0){
                  can = true;
                  ficha=this.tablero[fila][columna].estado;
                }
             }
            }
         }
            break;
            case 2:
            
            break;
            case 22:
              
            break;
            case 11:
            
            break;
          default:
            break;
        }
      }
    }

    if(can==false){
      this.turno++;
    }else {
      alert("comeee")
    }
  }
  clear(){
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.tablero[i][j].color=this.tablero_o[i][j].color;
        if(this.tablero[i][j].estado == -1){
          this.tablero[i][j].estado=this.tablero_o[i][j].estado;
        }
      }
    }
  }

  comer(fila:number,columna :number){
      if((this.last_fila<fila) && (this.last_columna<columna)){
        for(let i =this.last_fila+1;i<fila;i++){
          for(let j=this.last_columna+1;j<columna;j++){
            this.tablero[i][j].estado=0;
          }
        }
      }else 
      if((this.last_fila<fila) && (this.last_columna>columna)){
        for(let i =this.last_fila+1;i<fila;i++){
          for(let j=this.last_columna-1;j>columna;j--){
            this.tablero[i][j].estado=0;
          }
        }
      }else if((this.last_fila>fila) && (this.last_columna<columna)){
        for(let i =this.last_fila-1;i>fila;i--){
          for(let j=this.last_columna+1;j<columna;j++){
            this.tablero[i][j].estado=0;
          }
        }
      }else if((this.last_fila>fila) && (this.last_columna>columna)){
        for(let i =this.last_fila-1;i>fila;i--){
          for(let j=this.last_columna-1;j>columna;j--){
            this.tablero[i][j].estado=0;
          }
        }
      }
  }
  p_move(fila:number,columna : number ,estado: number){
    let aux:number=0;
    let come : boolean =false;
    switch (estado) {
      case 1:
        
        if(fila-1>=0 && columna -1>=0){
          if((this.tablero[fila-1][columna-1].estado==22 ||this.tablero[fila-1][columna-1].estado==2) ){
                    if(fila-2>=0 && columna -2>=0 && this.tablero[fila-2][columna-2].estado==0){
                      this.tablero[fila-2][columna-2].color='verde'
                      this.tablero[fila-2][columna-2].estado=-1;
                      come=true;
                    }
                  }
        }
        if(fila-2>=0 && columna +2<8){
            if((this.tablero[fila-1][columna+1].estado==22 ||this.tablero[fila-1][columna+1].estado==2) ){
                      if(fila-2>=0 && columna +2<8 && this.tablero[fila-2][columna+2].estado==0){
                        this.tablero[fila-2][columna+2].color='verde'  
                        this.tablero[fila-2][columna+2].estado=-1;
                        come=true;       
                      }
           }
        }
        if(come==false){
          if(fila-1>=0 && columna +1<8 ){
            if(this.tablero[fila-1][columna+1].estado==0){
              this.tablero[fila-1][columna+1].color='verde'  
              this.tablero[fila-1][columna+1].estado=-1;    
          
            }
          }
          if(fila-1>=0 && columna -1>=0){
            if(this.tablero[fila-1][columna-1].estado==0){
              this.tablero[fila-1][columna-1].color='verde'
              this.tablero[fila-1][columna-1].estado=-1;
            }
          }
        }



        break;
        case 2:
          come =false;
        if(fila+1<8 && columna -1>=0){
          if((this.tablero[fila+1][columna-1].estado==11 ||this.tablero[fila+1][columna-1].estado==1) ){
                    if(fila+2<8 && columna -2>=0 && this.tablero[fila+2][columna-2].estado==0){
                      this.tablero[fila+2][columna-2].color='verde'
                      this.tablero[fila+2][columna-2].estado=-1;
                      come=true;
                    }
                  }
        }
        if(fila+1<8 && columna +1<8){
          if((this.tablero[fila+1][columna+1].estado==11 ||this.tablero[fila+1][columna+1].estado==1) ){
                    if(fila+2<8 && columna+2<8 && this.tablero[fila+2][columna+2].estado==0){
                      this.tablero[fila+2][columna+2].color='verde'
                      this.tablero[fila+2][columna+2].estado=-1;
                      come=true;
                    }
                  }
        }
        if(come==false){
          if(fila+1<8 && columna -1>=0){
            if(this.tablero[fila+1][columna-1].estado==0){
              this.tablero[fila+1][columna-1].color='verde'
              this.tablero[fila+1][columna-1].estado=-1;
            }
                  }
      }
        if(come==false){
          if(fila+1<8 && columna +1<8){
            if(this.tablero[fila+1][columna+1].estado==0){
              this.tablero[fila+1][columna+1].color='verde'
              this.tablero[fila+1][columna+1].estado=-1;
            }
                  }
        }
        
          break;
      case 22:
        aux=columna+1;
        if(fila+1<8){
          for(let i=fila+1;i<this.tablero.length;i++){
            if(aux<8){
              if(this.tablero[i][aux].estado==22 ||this.tablero[i][aux].estado==2){
                i=8;
              } else {
                if(this.tablero[i][aux].estado==0){
                this.tablero[i][aux].color='verde'
                this.tablero[i][aux].estado=-1; 
              } 
              }
            }
            if(aux<8){
              aux++;
            }
          }
        }    
        aux=columna-1;
        if(fila+1<8){
          for(let i=fila+1;i<this.tablero.length;i++){
            if(aux>=0){
              if(this.tablero[i][aux].estado==22 ||this.tablero[i][aux].estado==2){
                i=8;
              } else {
                if(this.tablero[i][aux].estado==0){
                this.tablero[i][aux].color='verde'
                this.tablero[i][aux].estado=-1; 
              }
              }
            }
            if(aux>=0){
              aux--;
            }
          }
        }
        aux=columna-1;
        if(fila-1>=0){
          for(let i=fila-1;i>=0;i--){
            if(aux>=0){
              if(this.tablero[i][aux].estado==22 ||this.tablero[i][aux].estado==2){
                i=-1;
              } else {
                if(this.tablero[i][aux].estado==0){
                this.tablero[i][aux].color='verde'
                this.tablero[i][aux].estado=-1; 
              } 
              }
            }
            if(aux>=0){
              aux--;
            }else {
              i=-1;
            }
          }
        }
        aux=columna+1;
        if(fila-1>=0){
          for(let i=fila-1;i>=0;i--){
            if(aux<8){
              if(this.tablero[i][aux].estado==22 ||this.tablero[i][aux].estado==2){
                i=-1;
              } else {
                if(this.tablero[i][aux].estado==0){
                  this.tablero[i][aux].color='verde'
                  this.tablero[i][aux].estado=-1; 
                } 
              }
            }
            if(aux<8){
              aux++;
            } else {
              i=-1;
            }
          }
        }
        break; 
      case 11:
        aux=columna+1;
        if(fila+1<8){
          for(let i=fila+1;i<this.tablero.length;i++){
            if(aux<8){
              if(this.tablero[i][aux].estado==11 ||this.tablero[i][aux].estado==1){
                i=8;
              } else {
                if(this.tablero[i][aux].estado==0){
                this.tablero[i][aux].color='verde'
                this.tablero[i][aux].estado=-1; 
              } 
              }
            }
            if(aux<8){
              aux++;
            }
          }
        }    
        aux=columna-1;
        if(fila+1<8){
          for(let i=fila+1;i<this.tablero.length;i++){
            if(aux>=0){
              if(this.tablero[i][aux].estado==11 ||this.tablero[i][aux].estado==1){
                i=8;
              } else {
                if(this.tablero[i][aux].estado==0){
                this.tablero[i][aux].color='verde'
                this.tablero[i][aux].estado=-1; 
              }
              }
            }
            if(aux>=0){
              aux--;
            }
          }
        }
        aux=columna-1;
        if(fila-1>=0){
          for(let i=fila-1;i>=0;i--){
            if(aux>=0){
              if(this.tablero[i][aux].estado==11 ||this.tablero[i][aux].estado==1){
                i=-1;
              } else {
                if(this.tablero[i][aux].estado==0){
                this.tablero[i][aux].color='verde'
                this.tablero[i][aux].estado=-1; 
              } 
              }
            }
            if(aux>=0){
              aux--;
            }else {
              i=-1;
            }
          }
        }
        aux=columna+1;
        if(fila-1>=0){
          for(let i=fila-1;i>=0;i--){
            if(aux<8){
              if(this.tablero[i][aux].estado==11 ||this.tablero[i][aux].estado==1){
                i=-1;
              } else {
                if(this.tablero[i][aux].estado==0){
                  this.tablero[i][aux].color='verde'
                  this.tablero[i][aux].estado=-1; 
                } 
              }
            }
            if(aux<8){
              aux++;
            } else {
              i=-1;
            }
          }
        }
        break; 
            break; 
      default:
        break;
    }
  }
}
