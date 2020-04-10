/*
 * @Author: bolan9999(shanshang130@gmail.com)
 * @Date: 2020-04-10 10:15:46
 * @Last Modified by: bolan9999(shanshang130@gmail.com)
 * @Last Modified time: 2020-04-10 14:19:22
 */

import React from 'react';
import {Text, TouchableOpacity, TextInput, Image} from 'react-native';
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
          bounces={false}
          disableScrollViewPanResponder
          data={video.comments}
          renderItem={this._renderItem}
          keyExtractor={(_comment, index) => index.toString()}
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
          <Image
            style={homeStyle.locationIcon}
            source={require('../../../Assets/location.png')}
          />
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
