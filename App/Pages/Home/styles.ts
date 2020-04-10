/*
 * @Author: bolan9999(shanshang130@gmail.com)
 * @Date: 2020-04-09 19:46:03
 * @Last Modified by: bolan9999(shanshang130@gmail.com)
 * @Last Modified time: 2020-04-10 13:47:00
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
  fabContainer: {
    position: 'absolute',
    top: 0,
    right: 15,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  author: {
    fontSize: 16,
    color: 'gray',
  },
  comment: {
    fontSize: 14,
  },
  commentClose: {},
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 15,
    color: 'lightgray',
  },
  postContainer: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'lightgray',
  },
  input: {
    flex: 1,
  },
});
