/*
 * @Author: bolan9999(shanshang130@gmail.com)
 * @Date: 2020-04-10 10:15:46
 * @Last Modified by: bolan9999(shanshang130@gmail.com)
 * @Last Modified time: 2020-04-10 13:56:29
 */

import React from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {TypedComponent} from '../../Components';
import {hoc, ps} from '../../Modules';
import {Animated, FlatList, View} from 'react-native';
import {VideoInfo} from '../../Stores/VideoInfo';
import {homeStyle} from './styles';
import {HomeStore} from '../../Stores';

@hoc('home')
export class Comments extends TypedComponent<{
  home?: HomeStore;
  video: VideoInfo;
}> {
  render() {
    const {lang, video, home} = this.props;
    const str = lang.str.home;
    return (
      <Animated.View style={home.commentsStyle}>
        <FlatList
          disableScrollViewPanResponder
          data={video.comments}
          renderItem={this._renderItem}
          keyExtractor={(comment) => comment}
          ListHeaderComponent={this._renderHeader}
        />
        <View style={homeStyle.postContainer}>
          <TextInput
            value={video.editingComment}
            style={homeStyle.input}
            placeholder={str.postHolder}
            onChangeText={video.onCommentEdit}
          />

          <TouchableOpacity onPress={video.onPost}>
            <Text>{str.send}</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }

  _renderHeader = () => {
    const {lang, video, home} = this.props;
    const str = lang.str.home;
    return (
      <View style={homeStyle.commentHeader}>
        <View style={homeStyle.location}>
          <Text>地点</Text>
          <Text style={homeStyle.locationText}>{video.location}</Text>
        </View>
        <TouchableOpacity
          style={homeStyle.commentClose}
          onPress={home.onCommentClose}>
          <Text>{str.close}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  _renderItem = ({item}: {item: string}) => {
    return (
      <View style={{marginTop: 15}}>
        <View>
          <Text style={homeStyle.author}>{this.props.video.author}</Text>
          <Text style={homeStyle.comment}>{item}</Text>
        </View>
      </View>
    );
  };
}
