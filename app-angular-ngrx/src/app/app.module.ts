import { HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { MenuComponent } from './core/menu/menu.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todosReducer } from './store/reducers';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, HomeComponent, MenuComponent],
  imports: [
    BrowserModule,
    SharedModule,
    TodosModule,
    UsersModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      todos: todosReducer,
    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25/*, logOnly: !isDevMode()*/ }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
