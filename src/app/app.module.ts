import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import {ChannelService} from './channel-list/channel.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatDialogModule} from '@angular/material';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    ChannelListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    NgxSpinnerModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [ChannelService, HttpClient],
  bootstrap: [AppComponent],
  entryComponents: [ChannelListComponent]
})
export class AppModule { }
