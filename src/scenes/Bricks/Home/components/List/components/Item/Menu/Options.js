// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Internalization
import { withNamespaces } from 'react-i18next'

// Utils
import BaseComponent from 'utils/BaseComponent'
import onClickOutside from 'react-onclickoutside'

// Components
import { Link } from 'react-router-dom'

// Routes
import { reverse } from 'routes'

class Options extends BaseComponent {
  handleClickOutside() {
    this.props.handleOutside()
  }

  render() {
    const { id, t } = this.props
    return (
      <div className="BricksMenuOptions">
        <ul className="GeneralContainerSmall">
          <Link to={reverse('bricks:edit', { id })}>{t('Edit Develop')}</Link>
          <Link to={reverse('bricks:units', { id })}>{t('Edit Units')}</Link>
          <a href="#">{t('Delete Develop')}</a>
        </ul>
      </div>
    )
  }
}

Options.propTypes = {
  id: PropTypes.string.isRequired
}

export default withNamespaces()(onClickOutside(Options))
