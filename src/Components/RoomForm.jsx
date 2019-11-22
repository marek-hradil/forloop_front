import React from 'react'
import { Form, Input, Button, Icon } from 'antd'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

class RoomForm extends React.Component {
  render = () => {
    const { getFieldDecorator } = this.props.form
    return (
      <Form {...formItemLayout} onSubmit={() => {}}>
        <Form.Item label='Jméno'>
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Zadejte jméno místnosti',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label='Lokace'>{getFieldDecorator('location')(<Input />)}</Form.Item>

        <Form.Item label='Párovací id zařízení'>
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Zadejte id zařízení',
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label='Obrázek mísnosti'>
          {getFieldDecorator('room_img')(
            <Button>
              <Icon type='upload' /> Nahrát
            </Button>
          )}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit'>
            Registrovat
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create({ name: 'room-form' })(RoomForm)
