export class Like {
  private _userId:number;
  private _travelStoryId: number;
  private _mediaId: number;


  constructor(userId: number, travelStoryId: number, mediaId: number) {
    this._userId = userId;
    this._travelStoryId = travelStoryId;
    this._mediaId = mediaId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  set travelStoryId(value: number) {
    this._travelStoryId = value;
  }

  set mediaId(value: number) {
    this._mediaId = value;
  }
}

