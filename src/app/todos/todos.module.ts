import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { PageComponent } from './page/page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AddComponent,
    FooterComponent,
    ItemComponent,
    ListComponent,
    PageComponent,
    FilterPipe,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [PageComponent],
})
export class TodosModule {}
