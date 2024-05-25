import { ASSET } from 'config'

export const topCategoryStyles = {
  'Food and Drink': {
    bg: 'bg-blue-25',
    circleBg: 'bg-blue-100',
    text: {
      main: 'text-blue-900',
      count: 'text-blue-700',
    },
    progress: {
      bg: 'bg-blue-100',
      indicator: 'bg-blue-700',
    },
    icon: '/asset/svg/monitor.svg',
  },
  Travel: {
    bg: 'bg-success-25',
    circleBg: 'bg-success-100',
    text: {
      main: 'text-success-900',
      count: 'text-success-700',
    },
    progress: {
      bg: 'bg-success-100',
      indicator: 'bg-success-700',
    },
    icon: '/asset/svg/coins.svg',
  },
  default: {
    bg: 'bg-pink-25',
    circleBg: 'bg-pink-100',
    text: {
      main: 'text-pink-900',
      count: 'text-pink-700',
    },
    progress: {
      bg: 'bg-pink-100',
      indicator: 'bg-pink-700',
    },
    icon: '/asset/svg/shopping-bag.svg',
  },
}
