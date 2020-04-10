/*
 * @Author: bolan9999(shanshang130@gmail.com)
 * @Date: 2020-04-08 16:14:10
 * @Last Modified by: bolan9999(shanshang130@gmail.com)
 * @Last Modified time: 2020-04-10 09:58:19
 */

import React from 'react';
import {
  View,
  Text,
  Animated,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {HomeStore} from '../../Stores';
import {hoc, ps} from '../../Modules';
import {TypedComponent} from '../../Components';
import {homeStyle} from './styles';
import {VideoList} from './VideoList';

@hoc('home')
export class Home extends TypedComponent<{home?: HomeStore}> {
  render() {
    const {home, lang} = this.props;
    const str = lang.str.home;
    return (
      <Animated.ScrollView
        bounces={false}
        directionalLockEnabled
        style={homeStyle.hSwiperContainer}
        contentContainerStyle={homeStyle.hScrollContent}
        pagingEnabled
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
        <Animated.View style={home.navStyle}>
          <SafeAreaView style={homeStyle.safeNav}>
            <TouchableOpacity>
              <Text style={homeStyle.tabButton}>直播</Text>
            </TouchableOpacity>
            <View style={homeStyle.tabContainer}>
              <TouchableOpacity>
                <Text style={homeStyle.tabButton}>{str.follow}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={homeStyle.tabButton}>{str.recommend}</Text>
              </TouchableOpacity>
              <Animated.View style={home.indicatorStyle}></Animated.View>
            </View>
            <TouchableOpacity>
              <Text style={homeStyle.tabButton}>搜索</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </Animated.View>
      </Animated.ScrollView>
    );
  }
}
