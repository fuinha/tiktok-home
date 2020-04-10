/*
 * @Author: bolan9999(shanshang130@gmail.com)
 * @Date: 2020-04-08 16:14:10
 * @Last Modified by: bolan9999(shanshang130@gmail.com)
 * @Last Modified time: 2020-04-10 10:02:39
 */

import React from 'react';
import {Text, Animated, ScrollView} from 'react-native';
import {HomeStore} from '../../Stores';
import {hoc, ps} from '../../Modules';
import {TypedComponent} from '../../Components';
import {homeStyle} from './styles';
import {VideoList} from './VideoList';
import {HomeTab} from './HomeTab';

@hoc('home')
export class Home extends TypedComponent<{home?: HomeStore}> {
  render() {
    const {home, lang} = this.props;
    const str = lang.str.home;
    return (
      <Animated.ScrollView
        pagingEnabled
        bounces={false}
        directionalLockEnabled
        style={homeStyle.hSwiperContainer}
        contentContainerStyle={homeStyle.hScrollContent}
        onScroll={home.onScrollEvent}>
        <VideoList
          videoList={home.followList}
          tabFocus={home.selectedTab === 0}
        />
        <VideoList
          videoList={home.recommendList}
          tabFocus={home.selectedTab === 1}
        />
        <ScrollView
          horizontal={false}
          style={ps.container}
          contentContainerStyle={[ps.container, ps.center]}>
          <Text>{lang.str.home.authorInfo}</Text>
        </ScrollView>
        <HomeTab />
      </Animated.ScrollView>
    );
  }
}
