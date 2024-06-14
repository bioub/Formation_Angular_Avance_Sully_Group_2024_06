import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UnsavedFormService } from './unsaved-form.service';
import { map } from 'rxjs';

export const isFormSavedGuard: CanActivateFn = (route, state) => {
  const unsavedFormService = inject(UnsavedFormService);

  return unsavedFormService.subject$.pipe(
    map((val) => {
      if (!val) {
        return true;
      }

      // TODO ne pas utiliser window.prompt (sync), mais Modal de PrimeNg, Bootstrap, Material....
      return window.confirm('Le formulaire n\'a pas été enregistrer voulez-vous quitter ?');
    })

  );
};
