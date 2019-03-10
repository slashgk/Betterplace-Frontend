import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Channel} from './channel.model';

@Injectable()
export class ChannelService {
  channels: Channel[];

  constructor(private http: HttpClient) {}

  getChannels() {
    return this.http.get('http://localhost:3000/channels');
  }
}
