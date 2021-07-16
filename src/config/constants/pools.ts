import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 197,
    stakingToken: tokens.cake,
    earningToken: tokens.chess,
    contractAddress: {
      97: '',
      56: '0xd1812e7e28c39e78727592de030fc0e7c366d61a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.4286',
  },
  {
    sousId: 196,
    stakingToken: tokens.cake,
    earningToken: tokens.titan,
    contractAddress: {
      97: '',
      56: '0x97058cf9b36c9ef1622485cef22e72d6fea32a36',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.08912',
  },
  {
    sousId: 195,
    stakingToken: tokens.cake,
    earningToken: tokens.harmony,
    contractAddress: {
      97: '',
      56: '0xe595456846155e23b24cc9cbee910ee97027db6d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '3.0092',
  },
  {
    sousId: 194,
    stakingToken: tokens.cake,
    earningToken: tokens.mask,
    contractAddress: {
      97: '',
      56: '0xae611c6d4d3ca2cee44cd34eb7aac29d5a387fcf',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.06423',
  },
  {
    sousId: 193,
    stakingToken: tokens.cake,
    earningToken: tokens.dvi,
    contractAddress: {
      97: '',
      56: '0x135827eaf9746573c0b013f18ee12f138b9b0384',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.7233',
  },
]

export default pools