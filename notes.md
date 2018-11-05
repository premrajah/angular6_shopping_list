<!-- new project -->
ng new project-name

<!-- start app -->
ng serve

<!-- generate components -->
ng generate component folder/component-name
ng g c folder/component-name
ng generate component folder/component-name --spec false (no test files)

<!-- looping -->
*ngFor="let i of collection"

<!-- property binding vs string interpolation  -->
[src]="recipe.imagePath" 
src="{{ recipe.imagePath }}"

<!-- click listener -->
(click)="onSelect('name')"

<!-- ElementRef -->
import from @angular/core