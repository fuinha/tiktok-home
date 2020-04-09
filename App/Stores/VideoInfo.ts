/*
 * @Author: bolan9999(shanshang130@gmail.com)
 * @Date: 2020-04-09 21:09:02
 * @Last Modified by: bolan9999(shanshang130@gmail.com)
 * @Last Modified time: 2020-04-10 00:46:13
 */

import {observable, action} from 'mobx';
import Video from 'react-native-video';

export class VideoInfo {
  ref: Video;
  id: number;
  author: string;
  keywords: string[];
  title: string;
  uri: string;
  @observable focus: boolean;
  @observable ready: boolean;
  @observable paused: boolean;
  @observable comments: string[];
  @observable thumbsUp: number;
  constructor(
    id: number,
    uri: string,
    author?: string,
    title?: string,
    keywords?: string[],
    thumbsUp?: number,
    comments?: string[],
  ) {
    this.id = id;
    this.uri = uri;
    this.author = author;
    this.title = title;
    this.keywords = keywords;
    this.thumbsUp = thumbsUp;
    this.comments = comments;
  }

  getRef = (ref: Video) => (this.ref = ref);

  @action onBlur = () => {
    this.focus = false;
  };
  @action onFocus = () => {
    this.focus = true;
  };

  @action onReady = () => (this.ready = true);

  @action onPause = () => (this.paused = !this.paused);
}
