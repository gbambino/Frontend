import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 251,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  {
    pid: 429,
    lpSymbol: 'CHESS-USDC LP',
    lpAddresses: {
      97: '',
      56: '0x1472976e0b97f5b2fc93f1fff14e2b5c4447b64f',
    },
    token: tokens.chess,
    quoteToken: tokens.usdc,
  },
  {
    pid: 428,
    lpSymbol: 'TITAN-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x9392a1f471d9aa14c0b8eb28bd7a3f4a814727be',
    },
    token: tokens.titan,
    quoteToken: tokens.busd,
  },
  {
    pid: 427,
    lpSymbol: 'ONE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9d2296e2fe3cdbf2eb3e3e2ca8811bafa42eedff',
    },
    token: tokens.harmony,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 426,
    lpSymbol: 'MASK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x46c6bA71af7648cD7f67D0AD4d16f75bE251ed12',
    },
    token: tokens.mask,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 425,
    lpSymbol: 'DVI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x89ebf9cd99864f6e51bd7a578965922029cab977',
    },
    token: tokens.dvi,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 339,
    lpSymbol: 'GUM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x28Ea5894D4DBbE90bB58eE3BAB2869387d711c87',
    },
    token: tokens.gum,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 424,
    lpSymbol: 'ADX-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0648ff5de80adf54aac07ece2490f50a418dde23',
    },
    token: tokens.adx,
    quoteToken: tokens.busd,
  },
  {
    pid: 423,
    lpSymbol: 'USDC-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xec6557348085aa57c72514d67070dc863c0a5a8c',
    },
    token: tokens.usdc,
    quoteToken: tokens.usdt,
  },
  {
    pid: 422,
    lpSymbol: 'CAKE-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b',
    },
    token: tokens.cake,
    quoteToken: tokens.usdt,
  },
  {
    pid: 357,
    lpSymbol: 'SUTER-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2d5DB889392Bc3c8B023A8631ca230A033eEA1B8',
    },
    token: tokens.suter,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 421,
    lpSymbol: 'BSCPAD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xba01662e978de7d67f8ffc937726215eb8995d17',
    },
    token: tokens.bscpad,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 420,
    lpSymbol: 'RABBIT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x04b56A5B3f45CFeaFbfDCFc999c14be5434f2146',
    },
    token: tokens.rabbit,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 419,
    lpSymbol: 'WAULTx-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3e4370204f598205998143F07ebCC486E441b456',
    },
    token: tokens.waultx,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 418,
    lpSymbol: 'WEX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x547A355E70cd1F8CAF531B950905aF751dBEF5E6',
    },
    token: tokens.wex,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 417,
    lpSymbol: 'FORM-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3E19C18Fe3458A6065D8F0844cB7Eae52C9DAE07',
    },
    token: tokens.form,
    quoteToken: tokens.busd,
  },
  {
    pid: 416,
    lpSymbol: 'ORBS-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xB87b857670A44356f2b70337E0F218713D2378e8',
    },
    token: tokens.orbs,
    quoteToken: tokens.busd,
  },
  {
    pid: 415,
    lpSymbol: 'DG-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8b2824d57eebf07f5aff5c91fa67ed7c501a9f43',
    },
    token: tokens.$dg,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 414,
    lpSymbol: 'WOO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x89eE0491CE55d2f7472A97602a95426216167189',
    },
    token: tokens.woo,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 413,
    lpSymbol: 'HTB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2a995d355d5df641e878c0f366685741fd18d004',
    },
    token: tokens.htb,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 351,
    lpSymbol: 'JGN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7275278C94b5e20708380561C4Af98F38dDC6374',
    },
    token: tokens.jgn,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 337,
    lpSymbol: 'DFT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x24d3B0eD4C444A4f6882d527cBF67aDc8c026582',
    },
    token: tokens.dft,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 412,
    lpSymbol: 'HAI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x289841bFb694767bCb56fBc7B741aB4B4D97D490',
    },
    token: tokens.hai,
    quoteToken: tokens.wbnb,
  },
]

export default farms
