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
    href: '/syrup',
  },
  {
    label: t('ITO Hatchery (COMING SOON!)'),
    icon: 'TeamBattleIcon',
    href: '/pools',
  },
  {
    label: t('Docs'),
    icon: 'InfoIcon',
    href: 'https://app.gitbook.com/@gbambino/s/toucanswap-finance/',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Contact'),
        href: 'https://app.gitbook.com/@gbambino/s/toucanswap-finance/general/contact-us',
      },
      {
        label: t('Github'),
        href: 'https://app.gitbook.com/@gbambino/s/toucanswap-finance/general/github',
      },
    ],
  },
]

export default config
