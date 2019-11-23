import { Form, Input, Select, DatePicker, Button, TimePicker } from 'antd'
import React from 'react'
import Axios from 'axios'
import { toast } from 'react-toastify'

const { Option } = Select

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    rooms: [],
    eventsTimes: [],
  }

  async componentDidMount() {
    await this.getRoomsList()
  }

  getEventsTimeList = async (from, till) => {
    const { data } = await Axios.post('/event/list-times', {
      from,
      till,
    })

    if (data) {
      this.setState({ eventsTimes: data.map(([from, to]) => [from.dateTime, to.dateTime]) })
    }
  }

  getRoomsList = async () => {
    const { data } = await Axios.get('/room/list')
    if (data && data.rooms) {
      this.setState({ rooms: data.rooms })
    }
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
      <Form
        {...formItemLayout}
        onSubmit={async e => {
          e.preventDefault()
          this.props.form.validateFieldsAndScroll(
            async (
              err,
              { email, people, name, room, date_picker, time_picker_till, time_picker_from }
            ) => {
              if (err) {
                return
              }
              const peopleEmails = people.split(',').map(string => string.trim())
              peopleEmails.push(email.trim())
              const dateFrom =
                date_picker.toISOString().split('T')[0] +
                'T' +
                time_picker_from.toISOString().split('T')[1]
              const dateTill =
                date_picker.toISOString().split('T')[0] +
                'T' +
                time_picker_till.toISOString().split('T')[1]

              try {
                await Axios.post('/event/create', {
                  eventName: name,
                  peopleMails: peopleEmails,
                  room_id: room,
                  date_from: dateFrom,
                  date_till: dateTill,
                })

                this.props.form.resetFields()
              } catch (e) {
                console.error(e)
                toast.error(e)
              }
            }
          )
        }}
      >
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
          {getFieldDecorator('people', {
            rules: [
              {
                required: true,
                message: 'Prosím, vložte aspoň jednoho dalšího účastníka!',
              },
            ],
          })(<Input />)}
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
        <Form.Item label='Zasedačka' hasFeedback>
          {getFieldDecorator('room', {
            rules: [{ required: true, message: 'Please select your country!' }],
          })(
            <Select placeholder='Prosím vyberte zasedačku'>
              {this.state.rooms.map(({ name, id }) => (
                <Option value={id}>{name}</Option>
              ))}
            </Select>
          )}
        </Form.Item>
        <Form.Item label='Datum události'>
          {getFieldDecorator('date_picker', {
            rules: [
              {
                type: 'object',
                required: true,
                message: 'Prosím, vložte den, kdy se událost koná',
              },
            ],
          })(<DatePicker onOk={time => console.log(time, 'called')} />)}
        </Form.Item>
        <Form.Item label='Čas začátku události'>
          {getFieldDecorator('time_picker_from', {
            rules: [
              {
                type: 'object',
                required: true,
                message: 'Prosím, vložte čas, kdy událost začíná',
              },
            ],
          })(
            <TimePicker
              format='HH:mm'
              minuteStep={10}
              disabled={!this.props.form.getFieldsValue()['date_picker']}
            />
          )}
        </Form.Item>
        <Form.Item label='Čas konce události'>
          {getFieldDecorator('time_picker_till', {
            rules: [
              {
                type: 'object',
                required: true,
                message: 'Prosím, vložte čas, kdy událost končí',
              },
            ],
          })(
            <TimePicker
              disabled={!this.props.form.getFieldsValue()['date_picker']}
              format='HH:mm'
              minuteStep={10}
            />
          )}
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
