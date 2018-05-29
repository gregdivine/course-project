import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slListSevice: ShoppingListService) { }

  ngOnInit() {
  }

  onAddBtnClick() {
    const ingName = (this.nameInputRef.nativeElement as HTMLInputElement).value;
    const ingAmount = +(this.amountInputRef.nativeElement as HTMLInputElement).value;
    this.slListSevice.addIngredient(new Ingredient(ingName, ingAmount));
  }
}
