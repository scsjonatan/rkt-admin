import React from 'react'
import { Route as ReactRoute, Switch } from 'react-router-dom'
import _map from 'lodash/map'

import App from 'containers/App'

import Home from 'scenes/Home'
import BricksHome from 'scenes/Bricks/Home'

import bricks from './bricks'

/*
 * Routes Object. Accepts nested routes.

  by default all routes will be `exact: true`

  Example:
    const routes = {
      accounts: {
        path: '/accounts',
        container: Authentication,

        routes: {
          login: {
            path: '/login',
            requiresAuth: false,
            component: Login
          },
          ...
        }
      }
    }

/*
   Route Object:

  path {string}: URI to be matched, nested routes will be concatenated with parent path
  i.e login route => /accounts/login
  container {React Component}: wrap children routes with this container
  component {React Component}: component to be rendered when path is matched
  if container and component are specified on the same path,
  component will be wrapped into Container
  if no container is specified for some path, children routes won't be nested into the component
  routes {Route Object}: nested routed
  exact {bool}: if match must be exact to render path component (react-route-dom config param)
  default: true
  loginRequired {bool}: this path should be rendered only if user is logged in?
  default: true
  ...params {any}: react-router-dom extra params could be specified
  into the same object with key-value pairs
  e.g `exact: false`

*/
const AppRoutes = {
  home: {
    path: '/',
    container: App,
    component: Home
  },
  bricks: {
    path: '/rocket/bricks',
    container: App,
    component: BricksHome,
    routes: { ...bricks }
  }
}

/*
 * Returns computed given a route.name
 * @param {string} name: name of the route
 *   e.g: 'root:login'
 * @param {object} params: all params that will be replaced if route.name was found
 *   e.g:
 *     route.name: 'accounts:profile' => '/accounts/profile/:user_id'
 *     params: { user_id: 4 }
 *     returns: '/accounts/profile/4/'
 */
export const reverse = (name, params = {}) => {
  const chunks = name.split(':')
  let chunkIdx = 0
  let chunk = chunks[chunkIdx]
  let route = AppRoutes[chunk]
  let uri = route.path

  // if is nested route (parent:child:grandchild)
  // compute nested path => 'parent/child/grandchild/'
  for (++chunkIdx; chunkIdx < chunks.length; chunkIdx = chunkIdx + 1) { // eslint-disable-line
    // eslint-disable-line
    // eslint-disable-line
    chunk = chunks[chunkIdx]
    route = route.routes[chunk]
    if (typeof route === 'undefined') {
      // no route found for given name
      // i.e parent.routes.child is undefined
      throw new Error(`Invalid sub-route: ${chunk}`)
    }

    // concatenated nested routes => route.routes
    uri = `${uri}${route.path}`
  }

  // replace params with passed params values
  // => /parent/child/:child_id => /parent/child/3
  return uri.replace(/:([a-zA-Z_]+)/g, (match, key) => params[key] || key)
}

const DefaultContainer = props => <div> {props.children} </div>

/*
 * Render function to be passed down to react-router's <Route render={} />
 */
const _routeRenderer = (Container = DefaultContainer, component = null) => {
  return props => (
    <Container>
      {!!component && React.createElement(component, props)}
    </Container>
  )
}

/*
 * Create react-router's <Route />-s elements
 * if given route has `{ container: ReactComponent }` defined,
 * `{ container: ReactComponent }` will be wrapped into `container`
 *
 * This function is designed to be called by lodash's `map` function
 *
 * @param {Route Object} route: group of routes to be created
 * @param {string} name: key of the Route Object in Routes being mapped (e.g accounts: {})
 * @param {object} collection: third param provided by lodash map function
 * @param {string} prevPath: parent path, used for nested routes => `/accounts/profile/:user_id/`
 * @param {React Component} parentContainer: all nested routes will inherit from parent's Container
 *                                           unless a nested route has its own Container specified.
 *
 * By default all routes will be created with `LoginRequiredRoute` element
 * and `exact=true`
 */
const createRoutes = (
  route,
  name,
  collection,
  prevPath = '',
  parentContainer = DefaultContainer
) => {
  const {
    routes = {},
    exact = true,
    component: Component,
    container: Container = parentContainer,
    ...props
  } = route

  const path = `${prevPath}${route.path}`

  const _routes = [
    <ReactRoute
      {...props}
      path={path}
      key={path}
      render={_routeRenderer(Container, Component)}
      exact={exact}
    />
  ]

  // function to send current path (path:string) and Container (Container:ReactComponent)
  // to recursive function createRoutes in order to render sub-routes components
  const createSubRoutes = (_route, _name, _collection) =>
    createRoutes(_route, _name, _collection, path, Container)

  // if current route-group has sub-routes create them and add them to routes-bulk
  // return Route otherwise.
  return Object.keys(routes).length
    ? _routes.concat(_map(routes, createSubRoutes))
    : _routes
}

/**
  * <Routes /> component to be included under react-router-redux's ConnectedRouter
  * @returns { Switch } from 'react-router-dom'
 */
export default function Routes() {
  return <Switch>{_map(AppRoutes, createRoutes)}</Switch>
}
