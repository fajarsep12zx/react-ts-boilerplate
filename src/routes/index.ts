import { lazy } from 'react'

const Home = lazy(() => import('~/pages/Home'))

export default [
  {
    id: 'dashboard',
    title: ' Home',
    path: '/home',
    component: Home,
    exact: false,
    disabled: false,
    hasAppbarTab: true,
    showOnMenu: true,
    withHeader: true,
    withHeaderReportType: true,
  },
]
