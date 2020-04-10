/*
 * @Author: bolan9999(shanshang130@gmail.com)
 * @Date: 2020-04-08 21:36:29
 * @Last Modified by: bolan9999(shanshang130@gmail.com)
 * @Last Modified time: 2020-04-10 15:35:22
 *
 * 首页的Store
 */
import {observable, action} from 'mobx';
import {VideoInfo} from './VideoInfo';
import {Animated, Dimensions} from 'react-native';
import {mockVideoList1} from './Mock';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export class HomeStore {
  @observable followList: VideoInfo[] = mockVideoList1();
  @observable recommendList: VideoInfo[] = mockVideoList1();
  @observable focusVideo: VideoInfo = this.followList[0];
  @observable selectedTab: number = 0;

  @action onHScroll = (e: any) => {
    this.selectedTab = Math.floor(
      (e.nativeEvent.contentOffset.x / e.nativeEvent.contentSize.width) * 3,
    );
  };

  private contentOffsetX = new Animated.Value(0);
  onScrollEvent = Animated.event(
    [{nativeEvent: {contentOffset: {x: this.contentOffsetX}}}],
    {useNativeDriver: true, listener: this.onHScroll},
  );

  @action onFocusVideoChange = (video: VideoInfo) => {
    this.focusVideo = video;
  };

  navStyle = {
    position: 'absolute',
    left: 0,
    width: '33.33%',
    top: 0,
    paddingHorizontal: 15,
    transform: [
      {
        translateX: this.contentOffsetX.interpolate({
          inputRange: [-1, 0, screenWidth, screenWidth + 1],
          outputRange: [0, 0, screenWidth, screenWidth],
        }),
      },
    ],
  };

  indicatorStyle = {
    position: 'absolute',
    left: 0,
    width: 36,
    bottom: 0,
    height: 3,
    backgroundColor: 'white',
    transform: [
      {
        translateX: this.contentOffsetX.interpolate({
          inputRange: [-1, 0, screenWidth, screenWidth + 1],
          outputRange: [0, 0, 52, 52],
        }),
      },
    ],
  };

  private commentsY = new Animated.Value(screenHeight - 100);
  commentsStyle = {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'white',
    transform: [{translateY: this.commentsY}],
  };

  onCommentOpen = () => {
    Animated.timing(this.commentsY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  onCommentClose = () => {
    Animated.timing(this.commentsY, {
      duration: 300,
      toValue: screenHeight - 100,
      useNativeDriver: true,
    }).start();
  };
}
