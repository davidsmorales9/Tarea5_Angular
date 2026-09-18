import { Component, computed, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RECIPES_LIST_DATA } from '../../data/recipes-list-data';

@Component({
  selector: 'app-recipes-detail',
  imports: [CommonModule],
  templateUrl: './recipes-detail.html',
  styleUrl: './recipes-detail.css',
})
export class RecipesDetail {

  id = input<number | string>();

  recipesList = signal(RECIPES_LIST_DATA);


  selectedRecipe = computed(() => {
    const recipeId = Number(this.id());
    return this.recipesList().recipes.find(r => r.id === recipeId);
  });


  selectedTag = signal<string | null>(null);

  filterRecipesList = computed(() => {
    const tag = this.selectedTag();
    const recipeId = this.id();

// Estas líneas buscan dentro de la lista de recetas aquella en que el id coincida con el recipeId obtenido de la URL.
// Si encuentra la receta, la envuelve en un arreglo para que pueda ser recorrida por el for en el HTML.
// Si no encuentra ninguna coincidencia, devuelve un arreglo vacío ([]) para evitar errores y mostrar el estado @empty.
    if (!tag) {
      const currentId = Number(recipeId);
      if (!currentId || isNaN(currentId)) {
        return this.recipesList().recipes;
      }
      const recipe = this.recipesList().recipes.find(j => Number(j.id) === currentId);
      return recipe ? [recipe] : [];
    }
    return this.recipesList().recipes.filter(
      j => j.tags.includes(tag)
    );
  });

  selectTag(tag: string) {
    this.selectedTag.set(tag);
  }
  //FUNCION DE TAREA PARA MOSTRAR EL CARD
  filterRecipesListByName = computed(() => {
    return  this.recipesList().recipes.filter(
      j=> j.tags.includes('Pizza') //=== Number(this.id()) 
      //j = cualquier nombre de variable, como en el iterador del for.
    )

  });
}
