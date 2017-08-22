import React from 'react';
import { Toast } from 'antd-mobile';
import Touchable from 'rc-touchable';
import styles from './ImgTopSelect.css';
import lrz from 'lrz';

class ImagePicker extends React.Component {
  onFileChange = () => {
    const fileSelectorEl = this.refs.fileSelectorInput;
    let _this = this;
    if (fileSelectorEl.files && fileSelectorEl.files.length) {
      lrz(fileSelectorEl.files[0],{quality:0.4}).then(function(rst){
        const file = fileSelectorEl.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          const dataURL = rst.base64;
          console.log(dataURL);
          if (!dataURL) {
            Toast.fail('图片获取失败');
            return;
          }
          let orientation = 1;
          _this.getOrientation(file, (res) => {
            // -2: not jpeg , -1: not defined
            if (res > 0) {
              orientation = res;
            }
            _this.changeImg({
              url: dataURL,
              orientation,
              file,
            });
            fileSelectorEl.value = '';
          });
        };
        reader.readAsDataURL(file);
      });
    }
  };
  getRotation = (orientation = 1) => {
    let imgRotation = 0;
    switch (orientation) {
      case 3:
        imgRotation = 180;
        break;
      case 6:
        imgRotation = 90;
        break;
      case 8:
        imgRotation = 270;
        break;
      default:
    }
    return imgRotation;
  };
  getOrientation = (file, callback) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const view = new DataView(e.target.result);
      if (view.getUint16(0, false) !== 0xFFD8) {
        return callback(-2);
      }
      let length = view.byteLength;
      let offset = 2;
      while (offset < length) {
        const marker = view.getUint16(offset, false);
        offset += 2;
        if (marker === 0xFFE1) {
          let tmp = view.getUint32(offset += 2, false);
          if (tmp !== 0x45786966) {
            return callback(-1);
          }
          let little = view.getUint16(offset += 6, false) === 0x4949;
          offset += view.getUint32(offset + 4, little);
          let tags = view.getUint16(offset, little);
          offset += 2;
          for (let i = 0; i < tags; i++) {
            if (view.getUint16(offset + (i * 12), little) === 0x0112) {
              return callback(view.getUint16(offset + (i * 12) + 8, little));
            }
          }
        } else if ((marker & 0xFF00) !== 0xFF00) {
          break;
        } else {
          offset += view.getUint16(offset, false);
        }
      }
      return callback(-1);
    };
    reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
  };
  changeImg = (imgItem) => {
    const { onImageClick } = this.props;
    onImageClick(imgItem);
  };
  onAddImageClick = () => {
    const fileSelectorEl = this.refs.fileSelectorInput;
    fileSelectorEl.click();
  };
  render() {
    const { file, orientation } = this.props;
    const imgStyle = {
      backgroundImage: `url(${file})`,
      transform: `rotate(${this.getRotation(orientation)}deg)`,
    };
    return (
      <Touchable key="select">
        <div>
          <div
            className={styles.img_content}
            role="button"
            aria-label="Image can be clicked"
            onClick={this.onAddImageClick}
            style={imgStyle} >
            <input
              hidden="hidden"
              ref="fileSelectorInput"
              type="file"
              accept="image/jpg,image/jpeg,image/png,image/gif"
              onChange={() => { this.onFileChange(); }} />
          </div>
          <span className={styles.span}>点击修改头像</span>
        </div>
      </Touchable>
    );
  }
}


const ImgTopSelect = ({
    file,
    onChange,
}) => {
  const imagePickerProp = {
    file,
    orientation: 1,
    onImageClick: onChange,
  };
  return (
    <div>
      <ImagePicker {...imagePickerProp} />
    </div>

  );
};

export default ImgTopSelect;
