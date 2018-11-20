// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import { ClipLoader } from 'react-spinners'
import Content from './Content'

// Actions
import { fetchUnits } from './redux/actions'

// Styles
import './styles.scss'

class List extends BaseComponent {
  componentDidMount() {
    const brickId = this.context.router.route.match.params.id
    this.props.updateUnits(brickId)
  }

  render() {
    const { isLoading } = this.props
    return isLoading ? (
      <div className="BricksList__Loader">
        <ClipLoader color="#1d72db" />
      </div>
    ) : (
      <Content />
    )
  }
}

List.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    isLoading: state.sceneBricksUnitsList.get('isLoading')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUnits: id => fetchUnits(id, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
