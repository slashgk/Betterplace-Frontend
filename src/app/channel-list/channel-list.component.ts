import { Component, OnInit } from '@angular/core';
import {ChannelService} from './channel.service';
import {Channel} from './channel.model';
import { MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { ViewChild } from '@angular/core';
import 'hammerjs';
import {NgxSpinnerService} from 'ngx-spinner';


@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {
  channels: Channel[] = null;
  dataSource = new MatTableDataSource(this.channels);
  displayedColumns: string[] = ['rank', 'grade', 'channel_name', 'video_uploads', 'subscribers', 'video_views'];

  constructor(private channelService: ChannelService,
              private spinner: NgxSpinnerService) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.spinner.show();
    this.channelService.getChannels()
      .subscribe(
        (response: any) => {
          this.channels = response.channels;
          this.dataSource = new MatTableDataSource(this.channels);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          console.log(this.dataSource.sort);
          this.spinner.hide();
        },
        (error) => console.log(error)
      );
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


