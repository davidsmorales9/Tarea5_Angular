import { Component, input, signal } from '@angular/core';
import { RECIPES_LIST_DATA } from '../../data/recipes-list-data';
import {computed} from '@angular/core';

@Component({
  selector: 'app-recipes-detail-v2',
  imports: [],
  templateUrl: './recipes-detail-v2.html',
  styleUrl: './recipes-detail-v2.css',
})
export class RecipesDetailV2 {
  name = input<string>();
  difficulty = input<string>();
  recipesList = signal(RECIPES_LIST_DATA);

  //PARTE DE NUEVA TAREA, se debe también crear una condición para no ejecutar ambas comoe stá aquí, 
  //Si es NAME = ejecuta la x.name y si es DIFFICULTY el input ejecuta la linea de difficulty.
  filterRecipesList = computed(() => {
    const recipeName = this.name();
    const recipeDifficulty = this.difficulty();

    return this.recipesList()
      .recipes
      .filter(x => {
        if (recipeName) {
          return x.name.toLowerCase().includes(String(recipeName).toLowerCase());
        }
        if (recipeDifficulty) {
          return x.difficulty.toLowerCase().includes(String(recipeDifficulty).toLowerCase());
        }
        return true;
      });
  });

}
  