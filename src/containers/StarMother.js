import React from 'react';
import PropTypes from 'prop-types';
import StarMother from '../components/StarMother.js'

class StarMotherContainer extends React.Component {
  static contextTypes = {
    Api: PropTypes.object,
  }

  componentWillMount() {
    const { Api } = this.context
    
    // TODO:
    // 判断 sessionStorage 有没有用户信息，没有就跳转 url 进行登录

    // 判断 url 的 pid 填入表单的隐藏字段

    // 自动将登录后用户的部分信息填入表单

    // 用户上传正反实名照片

    // 用户预览照片
    console.log(Api)
  }

  render() {
    return (<StarMother />)
  }
}

export default StarMotherContainer
