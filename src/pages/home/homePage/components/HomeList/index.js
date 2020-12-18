import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {pxToDp} from '../../../../../utils/styleKit';
import {Overlay} from 'teaset';
import Filtrate from './components/Filtrate';

let data = [
  {
    title: '棒！嫦娥五号创造5项中国首次',
    userInfo: {
      image: '',
      userName: '',
    },
    content:
      '赞！嫦娥五号创造5项中国首次，探月工程副总指挥吴艳华：嫦娥五号任务创造了5项中国首次。①在地外天体的采样与封装；②地外天体上的点火起飞、精确入轨；③月球轨道无人交会对接和样品转移；④携带样品以第二宇宙速度返回；⑤建立我国月球样品的存储、分析和研究系统。点赞中国航天人！',
  },
  {
    title: '棒！嫦娥五号创造5项中国首次',
    userInfo: {
      image: '',
      userName: '',
    },
    content:
      '赞！嫦娥五号创造5项中国首次，探月工程副总指挥吴艳华：嫦娥五号任务创造了5项中国首次。①在地外天体的采样与封装；②地外天体上的点火起飞、精确入轨；③月球轨道无人交会对接和样品转移；④携带样品以第二宇宙速度返回；⑤建立我国月球样品的存储、分析和研究系统。点赞中国航天人！',
  },
  {
    title: '棒！嫦娥五号创造5项中国首次',
    userInfo: {
      image: '',
      userName: '',
    },
    content:
      '赞！嫦娥五号创造5项中国首次，探月工程副总指挥吴艳华：嫦娥五号任务创造了5项中国首次。①在地外天体的采样与封装；②地外天体上的点火起飞、精确入轨；③月球轨道无人交会对接和样品转移；④携带样品以第二宇宙速度返回；⑤建立我国月球样品的存储、分析和研究系统。点赞中国航天人！',
  },
  {
    title: '棒！嫦娥五号创造5项中国首次',
    userInfo: {
      image: '',
      userName: '',
    },
    content:
      '赞！嫦娥五号创造5项中国首次，探月工程副总指挥吴艳华：嫦娥五号任务创造了5项中国首次。①在地外天体的采样与封装；②地外天体上的点火起飞、精确入轨；③月球轨道无人交会对接和样品转移；④携带样品以第二宇宙速度返回；⑤建立我国月球样品的存储、分析和研究系统。点赞中国航天人！',
  },
  {
    title: '棒！嫦娥五号创造5项中国首次',
    userInfo: {
      image: '',
      userName: '',
    },
    content:
      '赞！嫦娥五号创造5项中国首次，探月工程副总指挥吴艳华：嫦娥五号任务创造了5项中国首次。①在地外天体的采样与封装；②地外天体上的点火起飞、精确入轨；③月球轨道无人交会对接和样品转移；④携带样品以第二宇宙速度返回；⑤建立我国月球样品的存储、分析和研究系统。点赞中国航天人！',
  },
  {
    title: '棒！嫦娥五号创造5项中国首次',
    userInfo: {
      image: '',
      userName: '',
    },
    content:
      '赞！嫦娥五号创造5项中国首次，探月工程副总指挥吴艳华：嫦娥五号任务创造了5项中国首次。①在地外天体的采样与封装；②地外天体上的点火起飞、精确入轨；③月球轨道无人交会对接和样品转移；④携带样品以第二宇宙速度返回；⑤建立我国月球样品的存储、分析和研究系统。点赞中国航天人！',
  },
  {
    title: '棒！嫦娥五号创造5项中国首次',
    userInfo: {
      image: '',
      userName: '',
    },
    content:
      '赞！嫦娥五号创造5项中国首次，探月工程副总指挥吴艳华：嫦娥五号任务创造了5项中国首次。①在地外天体的采样与封装；②地外天体上的点火起飞、精确入轨；③月球轨道无人交会对接和样品转移；④携带样品以第二宇宙速度返回；⑤建立我国月球样品的存储、分析和研究系统。点赞中国航天人！',
  },
  {
    title: '棒！嫦娥五号创造5项中国首次',
    userInfo: {
      image: '',
      userName: '',
    },
    content:
      '赞！嫦娥五号创造5项中国首次，探月工程副总指挥吴艳华：嫦娥五号任务创造了5项中国首次。①在地外天体的采样与封装；②地外天体上的点火起飞、精确入轨；③月球轨道无人交会对接和样品转移；④携带样品以第二宇宙速度返回；⑤建立我国月球样品的存储、分析和研究系统。点赞中国航天人！',
  },
];
const styles = StyleSheet.create({
  bWrapper: {
    backgroundColor: '#e2e2e3',
    padding: pxToDp(4),
  },
  cWrapper: {
    backgroundColor: '#fff',
  },
  wrapper: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  title: {
    color: '#111112',
    fontSize: pxToDp(14),
    fontWeight: 'bold',
    marginBottom: pxToDp(5),
  },
  content: {
    flex: 6,
  },
  img: {
    flex: 2,
  },
  topBarWrapper: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  topBarItem: {
    fontWeight: 'bold',
    fontSize: pxToDp(16),

    padding: pxToDp(8),
  },
});
const Index = () => {
  const [listData, setListData] = useState(data);
  const [highlightItem, setHighlightItem] = useState('推荐');
  const changeHighlight = (itemName) => {
    setHighlightItem(itemName);
  };
  const showF = () => {
    let overView = null;
    let overlayView = (
      <Overlay.View
        modal={true}
        overlayOpacity={0.3}
        ref={(v) => (overView = v)}>
        <Filtrate onClose={() => overView.close()} />
      </Overlay.View>
    );
    Overlay.show(overlayView);
  };
  return (
    <View style={styles.bWrapper}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderBottomWidth: pxToDp(1),
          borderBottomColor: '#ddd',
        }}>
        <View style={styles.topBarWrapper}>
          <Text
            onPress={() => changeHighlight('推荐')}
            style={{
              ...styles.topBarItem,
              color: highlightItem === '推荐' ? 'red' : '#111112',
            }}>
            推荐
          </Text>
          <Text
            onPress={() => changeHighlight('关注')}
            style={{
              ...styles.topBarItem,
              color: highlightItem === '关注' ? 'red' : '#111112',
            }}>
            关注
          </Text>
          <Text
            onPress={() => changeHighlight('热榜')}
            style={{
              ...styles.topBarItem,
              color: highlightItem === '热榜' ? 'red' : '#111112',
            }}>
            热榜
          </Text>
        </View>
        <Text onPress={showF}>这是筛选按钮</Text>
      </View>
      <View style={styles.cWrapper}>
        {listData.map((v, i) => {
          return (
            <TouchableOpacity style={styles.wrapper}>
              <View>
                <Text style={styles.title}>{v.title}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.content}>
                  <Text
                    numberOfLines={3}
                    ellipsizeMode={'tail'}
                    style={{color: '#666'}}>
                    {v.content}
                  </Text>
                </View>
                <View style={styles.img}>
                  <Image
                    style={{width: '100%', height: pxToDp(55)}}
                    source={{
                      uri:
                        'https://pics6.baidu.com/feed/9f2f070828381f3019bae2dab9e38c0f6f06f008.jpeg?token=8074a75d2a129a2dd35c0c713f38c5f8&s=3E06DD4FBAA2389ECA04173A03009050',
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <Text style={{alignSelf: 'center', padding: pxToDp(4)}}>
        没有更多内容了...
      </Text>
    </View>
  );
};
export default Index;
