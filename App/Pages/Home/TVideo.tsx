/*
 * @Author: bolan9999(shanshang130@gmail.com)
 * @Date: 2020-04-09 21:11:31
 * @Last Modified by: bolan9999(shanshang130@gmail.com)
 * @Last Modified time: 2020-04-10 11:13:41
 */

import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {ps, hoc} from '../../Modules';
import {VideoInfo} from '../../Stores/VideoInfo';
import Video from 'react-native-video';
import {TouchableOpacity} from 'react-native';
import {homeStyle} from './styles';
import {TypedComponent} from '../../Components';
import {Comments} from './Comments';
import {HomeStore} from '../../Stores';

@hoc('home')
export class TVideo extends TypedComponent<{
  video: VideoInfo;
  tabFocus: boolean;
  home?: HomeStore;
}> {
  render() {
    const {video, tabFocus, lang, home} = this.props;
    const str = lang.str.home;
    return (
      <View style={ps.container}>
        <Video
          repeat
          controls={false}
          resizeMode="cover"
          style={ps.container}
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
        <View style={homeStyle.fabContainer}>
          <TouchableOpacity onPress={home.onCommentOpen}>
            <Text style={homeStyle.tabButton}>{str.comments}</Text>
          </TouchableOpacity>
        </View>
        {tabFocus && video.focus && <Comments video={video} />}
      </View>
    );
  }
}
