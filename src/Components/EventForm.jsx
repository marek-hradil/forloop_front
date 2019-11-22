import { Form, Input, Select, DatePicker, Button } from 'antd'
import React from 'react'

const { Option } = Select

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

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

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label='E-mail'>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label='Lidé'>
          {getFieldDecorator('number_of_people', {
            rules: [
              {
                required: true,
                message: 'Prosím, přidejte účastníky',
              },
            ],
          })(
            <Select
              mode='multiple'
              style={{ width: '100%' }}
              placeholder='Zvolte účastníky'
              optionLabelProp='label'
            >
              <Option value='tomas.hobza@email.com' label='tomas.hobza@email.com'>
                tomas.hobza@email.com
              </Option>
              <Option value='tomas1.hobza@email.com' label='tomas1.hobza@email.com'>
                tomas1.hobza@email.com
              </Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label='Jméno události'>
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Prosím, vložte jméno události!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label='Datum začátku události'>
          {getFieldDecorator('date-picker-from', {
            rules: [
              { type: 'object', required: true, message: 'Prosím, vložte čas, kdy událost začíná' },
            ],
          })(<DatePicker />)}
        </Form.Item>
        <Form.Item label='Datum konce události'>
          {getFieldDecorator('date-picker-till', {
            rules: [
              { type: 'object', required: true, message: 'Prosím, vložte čas, kdy událost končí' },
            ],
          })(<DatePicker />)}
        </Form.Item>

        {/*
        počet lidí
        místnost
        */}
        <Form.Item {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit'>
            Registrovat
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create({ name: 'event-form' })(RegistrationForm)
