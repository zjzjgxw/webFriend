import React from 'react';
import { TextareaItem, ImagePicker, Picker, List } from 'antd-mobile';
import { SingleImgView } from 'react-imageview';
import { address } from '../../utils/address';
import config from '../../utils/config';
import 'react-imageview/dist/react-imageview.min.css';
import styles from './MsgPublish.less';


function MsgPublish({ imgs =[], province='',city='', onUploadImg, onRemoveImg,onDistrictChange,onUpdateContent}) {
  function onImageChange(files, type, index){
    if(type === 'add'){
      files.forEach(function (item) {
        if(item.hasOwnProperty('file')){
          onUploadImg(item.url)
        }
      })
    } else if ( type === 'remove') {
      onRemoveImg(index)
    }

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
  function onChangeHandle(val) {
    onDistrictChange(val[0], val[1]);
  }

  return (<div className={styles.container}>
    <TextareaItem
      rows={3}
      placeholder="这一刻的想法"
      onBlur={onUpdateContent}
    />
    <ImagePicker
      files={imgs.map(function (item) {
        return { url: config.imgPreUrL + item.url }
      })}
      onChange={onImageChange}
      onImageClick={onImageClick}
      selectable={imgs.length < 9}
    />
    <List style={{ backgroundColor: 'white' }}>
      <Picker
        cols={2}
        data={address}
        extra={province === ''? '请选择': province+city}
        onChange={onChangeHandle}
      >
        <List.Item arrow="horizontal" >选择地区</List.Item>
      </Picker>
    </List>
  </div>)
  ;
}

export default MsgPublish;
