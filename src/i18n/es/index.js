// Bricks
import { BRICKS_HOME } from './bricks/home'
import { BRICKS_FORM } from './bricks/form'

// Units
import { UNITS_FORM } from './units/form'
import { UNITS_LIST } from './units/list'

// Pay & Delivery
import { PAY_DELIVERY_HOME } from './payDelivery/home'
import { PAY_DELIVERY_ORDER } from './payDelivery/order'

import { GENERIC } from './generic'
import { SIDEBAR } from './sidebar'

export const es = {
  ...BRICKS_HOME,
  ...BRICKS_FORM,
  ...UNITS_FORM,
  ...UNITS_LIST,
  ...PAY_DELIVERY_HOME,
  ...PAY_DELIVERY_ORDER,
  ...SIDEBAR,
  ...GENERIC
}
