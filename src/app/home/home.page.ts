import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numero1: number=0;
  numero2: number=0;
  numero3: number=0;

  media: number = 0;
  mediana: number = 0;
  moda: number = 0;


  constructor() {}

  calcular() {

    const numeros=[ this.numero1, this.numero2, this.numero3];

    if (new Set(numeros).size !==numeros.length) {
      alert('Os números devem ser diferentes');

      return
    }
    // cálculo da média
  
    this.media = this.calcularMedia(numeros);

    // cálculo da mediana

    this.mediana = this.calcularMediana(numeros);

    //cálculo da moda

    this.moda = this.calcularModa(numeros);

  }

calcularMedia(numeros:number[]) {
  const soma = numeros.reduce((a,b)=>a+b,0);
  return soma / numeros. length;

}

calcularMediana(numeros: number[]) {

  const numerosOrdenados = [...numeros].sort((a,b)=> a-b);
  const meio = Math.floor(numerosOrdenados.length/2);
  return numerosOrdenados[meio];


}

calcularModa(numeros: number[]) {
  const a = numeros.reduce((prev,curr)=>{
    const key =`'${curr}'` 
    prev[key] += 1
    return prev 
  },{})
}

}
