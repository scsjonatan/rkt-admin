// Dependencies
import React from 'react'

// Components
import FormField from 'components/forms/Field'
import FormSelect from 'components/forms/Select'
import FormArea from 'components/forms/Area'
import FormCheckbox from 'components/forms/Checkbox'

// Utils
import uuid from 'utils/uuid'

export const renderField = (disabled = false, name, onChange, title, value) => {
  return (
    <FormField
      disabled={disabled}
      key={uuid()}
      name={name}
      onChange={onChange}
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

export const renderArea = (title, value, name, disabled = false) => {
  return (
    <FormArea
      disabled={disabled}
      key={uuid()}
      title={title}
      value={value}
      name={name}
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
