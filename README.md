# rn-phone-number-mask
US telephone mask for text input

## Instalation

    npm i rn-phone-number-mask

## Example

    Transforms 1234567890 into (123) 456-7890 dynamically

## Usage

Import
```javascript
import PhoneNumberMask from 'rn-phone-number-mask'
```

And use it this way:

```javascript
<PhoneNumberMask
  containerStyle={styles.containerStyle}
  style={style.inputStyle}
  onNumberChange={phoneNumber => this.setState({ phoneNumber })} />
```

## Props


Prop | Description | Type | Default
------ | ------ | ------ | ------
**`onNumberChange`** | This function is triggered when TextInput value changes (returns value with mask applied) | Function | **Required**
**`containerStyle`** | TextInput container style | Object | **{}**
**`style`** | InputText style | Object | **{}**
**`maxLength`** | Max length of phone number | Number | **14**

Enjoy!