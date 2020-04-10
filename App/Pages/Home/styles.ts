/*
 * @Author: bolan9999(shanshang130@gmail.com)
 * @Date: 2020-04-09 19:46:03
 * @Last Modified by: bolan9999(shanshang130@gmail.com)
 * @Last Modified time: 2020-04-10 09:47:50
 */

import {StyleSheet} from 'react-native';

export const homeStyle = StyleSheet.create({
  hSwiperContainer: {
    flex: 1,
  },
  hScrollContent: {
    width: '300%',
    height: '100%',
    flexDirection: 'row',
  },
  safeNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  tabContainer: {
    minWidth: 80,
    minHeight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabButton: {
    fontSize: 18,
    color: '#C0C4C2',
  },
  indicator: {
    position: 'absolute',
    left: 0,
    width: 36,
    bottom: 0,
    height: 3,
    backgroundColor: 'white',
  },
});
