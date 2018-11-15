// Dependencies
import React from 'react'

// Components
import FormField from 'components/forms/Field'
import FormSelect from 'components/forms/Select'
import FormArea from 'components/forms/Area'
import FormCheckbox from 'components/forms/Checkbox'

// Utils
import uuid from 'utils/uuid'

export const renderField = (title, value, disabled = false) => {
  return (
    <FormField
      disabled={disabled}
      key={uuid()}
      title={title}
      value={value}
    />
  )
}


export const renderSelect = (title, options, disabled = false) => {
  return (
    <FormSelect
      disabled={disabled}
      key={uuid()}
      options={options}
      title={title}
    />
  )
}


export const renderArea = (title, value, disabled = false) => {
  return (
    <FormArea
      disabled={disabled}
      key={uuid()}
      title={title}
      value={value}
    />
  )
}

export const renderCheckbox = (name, title, checked, action) => {
  return (
    <FormCheckbox
      name={name}
      checked={checked}
      key={uuid()}
      onChange={action}
      title={title}
    />
  )
}
