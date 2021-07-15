import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: t('Liquidity'),
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
      {
        label: t('LP Migration'),
        href: 'https://v1exchange.pancakeswap.finance/#/migrate',
      },
    ],
  },
  {
    label: t('TOCO Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('TOCO Nests'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Hatchery (COMING SOON!)'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    href: 'https://pancakeswap.info',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      {
        label: t('Github'),
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Docs'),
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: t('Blog'),
        href: 'https://pancakeswap.medium.com',
      },
    ],
  },
]

export default config
