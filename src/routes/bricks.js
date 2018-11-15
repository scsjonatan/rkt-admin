import Create from 'scenes/Bricks/Create'
import Edit from 'scenes/Bricks/Edit'

import EditUnits from 'scenes/Bricks/Units'

export default {
  create: {
    path: '/create',
    component: Create
  },
  edit: {
    path: '/edit/:id',
    component: Edit
  },
  units: {
    path: '/units/:id',
    component: EditUnits
  }
}
