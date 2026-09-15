import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Recipes } from './pages/recipes/recipes';
import { RecipesList} from './pages/recipes-list/recipes-list';
import {RecipesDetail} from './pages/recipes-detail/recipes-detail';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component:Home},
    {path: 'contact', component:Contact},
    {path: 'recipes', component: Recipes},
    {path: 'recipes-list', component: RecipesList}, //09/09/2026
    {path: 'recipes-detail/:id', component: RecipesDetail} //09/09/2026
    //string que se define para ponerlo en el browser como /home o /umes...
];
    