/*
 * @Author: bolan9999(shanshang130@gmail.com)
 * @Date: 2020-04-08 21:36:29
 * @Last Modified by: bolan9999(shanshang130@gmail.com)
 * @Last Modified time: 2020-04-10 00:43:13
 *
 * 首页的Store
 */
import {observable, action} from 'mobx';
import {VideoInfo} from './VideoInfo';

export class HomeStore {
  @observable followList: VideoInfo[];
  @observable recommendList: VideoInfo[];
  @observable selectedTab: number = 0;

  @action onHScroll = (e: any) => {
    this.selectedTab = Math.floor(
      (e.nativeEvent.contentOffset.x / e.nativeEvent.contentSize.width) * 3,
    );
  };

  constructor() {
    this.followList = [
      new VideoInfo(
        0,
        'https://aweme.snssdk.com/aweme/v1/play/?video_id=v0200ff10000bopbhcuvld7780ioaq1g&line=0&ratio=540p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&is_support_h265=0&source=PackSourceEnum_PUBLISH',
      ),
      new VideoInfo(
        1,
        'https://aweme.snssdk.com/aweme/v1/play/?video_id=v0200ff10000bopbhcuvld7780ioaq1g&line=0&ratio=540p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&is_support_h265=0&source=PackSourceEnum_PUBLISH',
      ),
      new VideoInfo(
        2,
        'https://aweme.snssdk.com/aweme/v1/play/?video_id=v0200ff10000bopbhcuvld7780ioaq1g&line=0&ratio=540p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&is_support_h265=0&source=PackSourceEnum_PUBLISH',
      ),
    ];
    this.recommendList = [
      new VideoInfo(
        10,
        'https://aweme.snssdk.com/aweme/v1/play/?video_id=v0200ff10000bopbhcuvld7780ioaq1g&line=0&ratio=540p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&is_support_h265=0&source=PackSourceEnum_PUBLISH',
      ),
      new VideoInfo(
        11,
        'https://aweme.snssdk.com/aweme/v1/play/?video_id=v0200ff10000bopbhcuvld7780ioaq1g&line=0&ratio=540p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&is_support_h265=0&source=PackSourceEnum_PUBLISH',
      ),
      new VideoInfo(
        12,
        'https://aweme.snssdk.com/aweme/v1/play/?video_id=v0200ff10000bopbhcuvld7780ioaq1g&line=0&ratio=540p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&is_support_h265=0&source=PackSourceEnum_PUBLISH',
      ),
    ];
  }
}
