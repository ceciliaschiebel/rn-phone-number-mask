import React from 'react'
import { View, TextInput } from 'react-native'

export default class PhoneNumberMask extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      maxLength: this.props.maxLength ? this.props.maxLength : 14
    }
  }

  onChange = value => {
    let x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
    value = !x[2] ? x[1] : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "")
    this.setState({ value })
    this.props.onNumberChange(value)
  }

  render() {
    return (
      <View style={this.props.containerStyle}>
        <TextInput style={this.props.inputStyle} onChangeText={this.onChange} value={this.state.value} maxLength={this.state.maxLength} />
      </View>
    )
  }
}