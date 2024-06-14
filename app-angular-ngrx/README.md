# Exercices

## Configure Testing Module

Editer la config des modules de test dans :

`src/app/todos/todo-form/todo-form.component.spec.ts` qui dépend de la directive `ngModel` (exportée par `FormsModule`)

`src/app/todos/todos/todos.component.spec.ts` qui dépend de `TodoFormComponent` et `TodosListComponent`. Attention `TodoFormComponent` dépend lui même de `FormsModule` (comme dans l'exercice précédent). `TodosListComponent` dépend de `CommonModule` (à cause de `*ngFor`) et `TodoItemComponent`

## Test Unitaires de Composants

Dans `src/app/todos/todo-item/todo-item.component.spec.ts` vérifier que quand on passe un input à `TodoItem` il s'affiche bien dans le composant.

Dans `src/app/todos/todo-form/todo-form.component.spec.ts` vérifier que au submit du formulaire, l'output `onAddTodo` emet bien la valeur contenue dans la propriété `todo`.

## Test de Composants avec Double

Tester `UsersListComponent` en remplaçant dans le test le retour du serveur par : 

```
[
  { id: 1, name: 'Toto' },
  { id: 2, name: 'Titi' },
]

Vérifier ensuite que le composant affiche Toto.
