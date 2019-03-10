export class Channel {
  public rank: string;
  public grade: string;
  public channel_name: string;
  public video_uploads: number;
  public subscribers: number;
  public video_views: number;
  public _id: any;
  public __v: any;

  constructor(rank: string, grade: string, channel_name: string, videoUploads: number, subscribers: number, videoViews: number, _id: any, __v: any){
    this.rank = rank;
    this.grade = grade;
    this.channel_name = channel_name;
    this.video_uploads = videoUploads;
    this.subscribers = subscribers;
    this.video_views = videoViews;
    this.__v = __v;
    this._id = _id;
  }
}
