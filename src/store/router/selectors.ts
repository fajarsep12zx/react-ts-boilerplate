import { createSelector } from 'reselect'

export const selectRouterLocation = (state) => state.router.location

export const makeSelectRouterLocationPathname = createSelector(
  selectRouterLocation,
  (location) => {
    if (!location) {
      return null
    }

    return location.pathname
  },
)
