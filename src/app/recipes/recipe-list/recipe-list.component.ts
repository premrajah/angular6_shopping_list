import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test', 'https://placeimg.com/640/480/any'),
    new Recipe('A test recipe', 'this is a test', 'https://placeimg.com/640/480/any')
  ];

  constructor() { }

  ngOnInit() {
  }

}
