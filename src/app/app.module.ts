import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { BillGroupComponent } from './components/bill-group/bill-group.component';
import { SelectTipComponent } from './components/select-tip/select-tip.component';
import { NumberOfPeopleComponent } from './components/number-of-people/number-of-people.component';
import { AccountResultComponent } from './components/account-result/account-result.component';
import { ButtonResetComponent } from './components/button-reset/button-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    BillGroupComponent,
    SelectTipComponent,
    NumberOfPeopleComponent,
    AccountResultComponent,
    ButtonResetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
