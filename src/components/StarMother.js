import React from 'react';
import { Flex } from 'antd-mobile';

export default class StarMother extends React.Component {
  render() {
    return (<div>
      <h1>星妈报名表单页</h1>
      <Flex>
        <Flex.Item onClick={this.handleClick}>1</Flex.Item>
        <Flex.Item>1</Flex.Item>
      </Flex>
    </div>)
  }
}
