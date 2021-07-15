import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ToucanSwap',
  description:
    '',
  image: 'https://Pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('ToucanSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('ToucanSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('ToucanSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('ToucanSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('ToucanSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('ToucanSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('ToucanSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('ToucanSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('ToucanSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('ToucanSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('ToucanSwap')}`,
      }
    default:
      return null
  }
}
