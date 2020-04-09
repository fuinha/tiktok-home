/*
 * @Author: bolan9999(shanshang130@gmail.com)
 * @Date: 2020-04-09 21:11:31
 * @Last Modified by: bolan9999(shanshang130@gmail.com)
 * @Last Modified time: 2020-04-10 00:42:13
 */

import React from 'react';
import Swiper from 'react-native-swiper';
import {Text, StyleSheet, View} from 'react-native';
import {ps} from '../../Modules';
import {VideoInfo} from '../../Stores/VideoInfo';
import Video from 'react-native-video';
import {TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';

@observer
export class TVideo extends React.Component<{
  video: VideoInfo;
  tabFocus: boolean;
}> {
  render() {
    const {video, tabFocus} = this.props;
    return (
      <View style={ps.container}>
        <Video
          style={[ps.container]}
          resizeMode="cover"
          repeat
          automaticallyWaitsToMinimizeStalling
          controls={false}
          onReadyForDisplay={video.onReady}
          paused={!(tabFocus && video.ready && video.focus && !video.paused)}
          source={{
            uri: this.props.video.uri,
          }}></Video>
        <TouchableOpacity
          style={[StyleSheet.absoluteFill, ps.center]}
          onPress={video.onPause}>
          {video.paused && <Text>=></Text>}
        </TouchableOpacity>
      </View>
    );
  }
}
