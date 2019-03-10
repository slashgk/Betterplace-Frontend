import {Component, Inject, OnInit} from '@angular/core';
import {ChannelService} from './channel.service';
import {Channel} from './channel.model';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { ViewChild } from '@angular/core';
import 'hammerjs';
import {NgxSpinnerService} from 'ngx-spinner';

export interface DialogData {
  rank: string;
  grade: string;
  channel_name: string;
  video_uploads: number;
  subscribers: number;
  video_views: string;
}

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
              private spinner: NgxSpinnerService,
              public dialog: MatDialog) { }

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
    this.dialog.open(ChannelDialog, {
      data: {
        rank: row.rank,
        grade: row.grade,
        channel_name: row.channel_name,
        video_uploads: row.video_uploads,
        subscribers: row.subscribers,
        video_views: row.video_views
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

@Component({
  selector: 'channel-dialog',
  templateUrl: 'channel-dialog.html',
})
export class ChannelDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}


