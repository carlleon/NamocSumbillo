import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	crudelist: string [] = [];
	taskinput: string;
	status: boolean = false;
	id: int;
  constructor(public navCtrl: NavController) {

  }

  addlist(){
  	this.crudelist.push(this.taskinput);
  	this.taskinput = "";
  }
  edit(id){
  	let index = this.crudelist.indexOf(id);
  	this.taskinput = this.crudelist[index];
  	this.id = index;
  	this.status = true;
  }

  delete(id){
  	this.crudelist.splice(this.crudelist.indexOf(id),1);
  }

  update(){
  	this.crudelist[this.id] = this.taskinput;
  	this.taskinput = "";
  	this.status = false;
  }

}
