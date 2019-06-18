import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {
 

  generos = null;

  resultadoExcluir = null;

  constructor( private genero$: GenerosService, private router: Router) { }

  ngOnInit() {
    this.atualizarLista();
  }

  atualizarLista() {
    this.genero$.lista()
      .subscribe(
        lista => this.generos = lista.results
      );
  }

  excluir(genero) {
    if (confirm(`Tem certeza que deseja excluir o artista "${genero.nome}" ?\nEssa ação não é reversível!`)) {
      this.genero$.excluir(genero.id)
        .subscribe(
          _ => {
            this.resultadoExcluir = true;
            this.atualizarLista();
          },
          err => {
            this.resultadoExcluir = err.error;
          }
        )
    }
  }

  editar(genero) {
    this.router.navigate(['generos', genero.id, 'editar']);
  }

  consultar(artista) {
    this.router.navigate(['generos', artista.id]);
  }

  

}
