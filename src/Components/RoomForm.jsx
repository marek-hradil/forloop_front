import React from 'react'
import { Form, Input, Button } from 'antd'
import { toast } from 'react-toastify'
import Axios from 'axios'

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

const RefetchRooms = new CustomEvent('refetch_rooms')

class RoomForm extends React.Component {
  state = {
    loading: false,
  }

  render = () => {
    const { getFieldDecorator } = this.props.form
    return (
      <Form
        {...formItemLayout}
        onSubmit={e => {
          e.preventDefault()
          this.setState({ loading: true })
          this.props.form.validateFieldsAndScroll(
            async (err, { sensor_id, name, location, max_people }) => {
              if (err) {
                return
              }

              const { data } = await Axios.post('/room/create', {
                location,
                max_people,
                name,
                sensor_id,
              })

              this.setState({ loading: false })
              if (data && !data.saved) {
                toast.error('Not saved')
              } else {
                this.props.form.resetFields()
                document.dispatchEvent(RefetchRooms)
              }
            }
          )
        }}
      >
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
        <Form.Item label='Lokace'>
          {getFieldDecorator('location', {
            rules: [
              {
                required: true,
                message: 'Zadejte lokaci',
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label='Párovací id zařízení'>
          {getFieldDecorator('sensor_id', {
            rules: [
              {
                required: true,
                message: 'Zadejte id zařízení',
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label='Počet lidí'>
          {getFieldDecorator('max_people', {
            rules: [
              {
                required: true,
                message: 'Zadejte maximální počet lidí',
              },
            ],
          })(<Input />)}
        </Form.Item>

        {/*
        <Form.Item label='Obrázek mísnosti'>
          {getFieldDecorator('room_img')(
            <Button>
              <Icon type='upload' /> Nahrát
            </Button>
          )}
        </Form.Item>
          */}

        <Form.Item {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit' loading={this.state.loading}>
            Registrovat
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create({ name: 'room-form' })(RoomForm)
