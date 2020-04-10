/*
 * @Author: bolan9999(shanshang130@gmail.com)
 * @Date: 2020-04-10 11:21:12
 * @Last Modified by: bolan9999(shanshang130@gmail.com)
 * @Last Modified time: 2020-04-10 11:36:32
 */

import {VideoInfo} from './VideoInfo';
import {Comments} from '../Pages/Home/Comments';

const mockUrl =
  'https://aweme.snssdk.com/aweme/v1/play/?video_id=v0200ff10000bopbhcuvld7780ioaq1g&line=0&ratio=540p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&is_support_h265=0&source=PackSourceEnum_PUBLISH';

export const mockVideoList1 = () => {
  return [
    new VideoInfo(
      0,
      mockUrl,
      'author1',
      'Title1',
      ['keywords1', 'keywords1'],
      1000,
      mockComments(),
    ),
    new VideoInfo(
      0,
      mockUrl,
      'author2',
      'Title2',
      ['keywords1', 'keywords1'],
      1000,
      mockComments(),
    ),
    new VideoInfo(
      0,
      mockUrl,
      'author3',
      'Title3',
      ['keywords1', 'keywords1'],
      1000,
      mockComments(),
    ),
  ];
};

const mockComments = () => {
  return [
    'Animated提供了三种动画类型。每种动画类型都提供了特定的函数曲线，用于控制动画值从初始值变化到最终值的变化过程：',
    '使用原生动画，我们会在开始动画之前将所有关于动画的内容发送到原生代码，从而使用原生代码在 UI 线程上执行动画，而不是通过对每一帧的桥接去执行动画。一旦动画开始，JS 线程就可以在不影响动画效果的情况下阻塞（去执行其他任务）掉了。',
    '您可以通过在动画配置中指定useNativeDriver：true 来使用原生动画驱动。你可以在动画文档 中看到更详细的解释。',
    'Animated中默认导出了以下这些可以直接使用的动画组件，当然它们都是通过使用上面这个方法进行了封装',
    '动画还可以使用组合函数以复杂的方式进行组合',
    '默认情况下，如果一个动画停止或中断，则组合中的所有其他动画也会停止。',
    'interpolate()函数允许输入范围映射到不同的输出范围。默认情况下，它将推断超出给定范围的曲线，但也可以限制输出值。它默认使用线性插值，但也支持缓动功能。',
  ];
};
