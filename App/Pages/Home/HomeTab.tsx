/*
 * @Author: bolan9999(shanshang130@gmail.com)
 * @Date: 2020-04-10 10:00:11
 * @Last Modified by: bolan9999(shanshang130@gmail.com)
 * @Last Modified time: 2020-04-17 17:16:22
 */

import React from "react";
import { View, Text, Animated, SafeAreaView, TouchableOpacity } from "react-native";
import { HomeStore } from "../../Stores";
import { hoc, ps } from "../../Modules";
import { TypedComponent } from "../../Components";
import { homeStyle } from "./styles";

@hoc("home")
export class HomeTab extends TypedComponent<{ home?: HomeStore }> {
  render() {
    const { home, lang } = this.props;
    const str = lang.str.home;
    return (
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
    );
  }
}
