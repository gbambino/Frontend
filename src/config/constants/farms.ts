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
]

export default farms
