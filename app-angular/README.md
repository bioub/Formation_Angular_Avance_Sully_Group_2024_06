# Exercices

## Configure Testing Module

Editer la config des modules de test dans :

`src/app/todos/todo-form/todo-form.component.spec.ts` qui dépend de la directive `ngModel` (exportée par `FormsModule`)

`src/app/todos/todos/todos.component.spec.ts` qui dépend de `TodoFormComponent` et `TodosListComponent`. Attention `TodoFormComponent` dépend lui même de `FormsModule` (comme dans l'exercice précédent). `TodosListComponent` dépend de `CommonModule` (à cause de `*ngFor`) et `TodoItemComponent`
