import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 
    'https://upload.wikimedia.org/wikipedia/commons/1/1d/10-types-of-persian-kabobs-from-the-streets-of-tehrangeles.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
