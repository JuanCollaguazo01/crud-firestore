import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTodoPageRoutingModule } from './update-todo-routing.module';

import { UpdateTodoPage } from './update-todo.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTodoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateTodoPage]
})
export class UpdateTodoPageModule {}
