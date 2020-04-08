/*
 * @Author: bolan9999(shanshang130@gmail.com)
 * @Date: 2020-04-08 16:14:10
 * @Last Modified by: bolan9999(shanshang130@gmail.com)
 * @Last Modified time: 2020-04-08 23:28:14
 */

import React from 'react';
import {View, Text} from 'react-native';
import {HomeStore} from '../../Stores';
import {hoc} from '../../Modules';
import {TypedComponent} from '../../Components';

@hoc('home')
export class Home extends TypedComponent<{home?: HomeStore}> {
  render() {
    const {home,lang} = this.props;
    return (
      <View>
        <Text style={{marginTop: 40}}>{lang.str.home.follow}</Text>
      </View>
    );
  }
}
