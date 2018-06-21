import { Injectable } from '@angular/core';

interface InventoryInterface {
  nome:       string
  quantidade: number
  id:         string
  grau:       number
  estoque:    string
}

@Injectable({
  providedIn: 'root'
})

export class InventoryService {

  private data: object[]

  constructor() { }
  
  fetch(): any {
  
    return [
      { nome: "smartphone",    quantidade: 18, id: "129492", grau: 3, estoque: "medio"   },
      { nome: "television",    quantidade: 5,  id: "240293", grau: 1, estoque: "reserva" },
      { nome: "notebook",      quantidade: 16, id: "392943", grau: 5, estoque: "medio"   },
      { nome: "soft chair",    quantidade: 21, id: "234991", grau: 1, estoque: "maximo"  },
      { nome: "1T hard disk",  quantidade: 10, id: "553099", grau: 5, estoque: "reserva" },
      { nome: "ear phone",     quantidade: 5,  id: "453030", grau: 3, estoque: "medio"   },
      { nome: "camera pro",    quantidade: 10, id: "532120", grau: 4, estoque: "reserva" },
      { nome: "iron cupboard", quantidade: 5,  id: "139200", grau: 2, estoque: "reserva" }
    ];
    
  }
}
