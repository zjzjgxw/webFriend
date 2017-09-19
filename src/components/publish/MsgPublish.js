import React from 'react';
import { TextareaItem, ImagePicker } from 'antd-mobile';
import { SingleImgView } from 'react-imageview';
import 'react-imageview/dist/react-imageview.min.css';
import styles from './MsgPublish.less';


function MsgPublish({}) {
  const files = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
  }, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
  },{
    url: 'http://img.zcool.cn/community/03320dd554c75c700000158fce17209.jpg',
    id: '2122',
  },{
    url: 'http://img06.tooopen.com/images/20160924/tooopen_sy_179893728711.jpg',
    id: '2122',
  },{
    url: 'http://t2.27270.com/uploads/tu/201612/98/st94.png',
    id: '2122',
  }];

  function onChange(files, type, index){
    console.log(files, type, index);
  }
  function onImageClick(index, fs) {
    const imgs = fs.map(function (item) {
      return item.url
    });
    SingleImgView.show({
      imagelist:imgs,
      current:index,
      close: () => { SingleImgView.hide() }
    });
  }

  return (<div className={styles.container}>
    <TextareaItem
      rows={3}
      placeholder="这一刻的想法"
    />
    <ImagePicker
      files={files}
      onChange={onChange}
      onImageClick={onImageClick}
      selectable={files.length < 9}
    />
  </div>)
  ;
}

export default MsgPublish;
