import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { ActivatedRoute } from '@angular/router';
import { ValicacaoFormUtilService } from '../valicacao-form-util.service';


@Component({
  selector: 'app-cadastrar-genero',
  templateUrl: './cadastrar-genero.component.html',
  styleUrls: ['./cadastrar-genero.component.css']
})
export class CadastrarGeneroComponent implements OnInit {
  genero = null;
  nome = null;

  constructor(private genero$: GenerosService,
    private route: ActivatedRoute,
    private validacao$: ValicacaoFormUtilService) { }

  ngOnInit() {
  }


  salvar() {
    this.genero$.cadastrar(this.nome)
      .subscribe(
        data => this.validacao$.erro = false,
        err => this.validacao$.erro = err.error
      );
  }

}
