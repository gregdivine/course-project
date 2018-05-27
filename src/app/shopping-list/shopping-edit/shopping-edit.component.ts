import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddBtnClick() {
    const ingName = (this.nameInputRef.nativeElement as HTMLInputElement).value;
    const ingAmount = +(this.amountInputRef.nativeElement as HTMLInputElement).value;
    this.ingredientAdded.emit(new Ingredient(ingName, ingAmount));
  }
}
