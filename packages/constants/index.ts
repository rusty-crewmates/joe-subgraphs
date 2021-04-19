import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = Address.fromString('0x0000000000000000000000000000000000000000')

export const BIG_DECIMAL_1E6 = BigDecimal.fromString('1e6')

export const BIG_DECIMAL_1E12 = BigDecimal.fromString('1e12')

export const BIG_DECIMAL_1E18 = BigDecimal.fromString('1e18')

export const BIG_DECIMAL_ZERO = BigDecimal.fromString('0')

export const BIG_DECIMAL_ONE = BigDecimal.fromString('1')

export const BIG_INT_ONE = BigInt.fromI32(1)

export const BIG_INT_ONE_DAY_SECONDS = BigInt.fromI32(86400)

export const BIG_INT_ZERO = BigInt.fromI32(0)

export const LOCKUP_POOL_NUMBER = BigInt.fromI32(29)

export const FACTORY_ADDRESS = Address.fromString('0xE2eCc226Fd2D5CEad96F3f9f00eFaE9fAfe75eB8')

export const LOCKUP_BLOCK_NUMBER = BigInt.fromI32(10959148)
export const TRADERJOE_START_BLOCK = BigInt.fromI32(8438448)

export const JOE_TOKEN_ADDRESS = Address.fromString('0x60aE616a2155Ee3d9A68541Ba4544862310933d4')
export const JOE_AVAX_PAIR_ADDRESS = Address.fromString('')
export const JOE_ETH_PAIR_ADDRESS = Address.fromString('')
export const JOE_BTC_PAIR_ADDRESS = Address.fromString('')
export const JOE_USDT_PAIR_ADDRESS = Address.fromString('')
export const JOE_DAI_PAIR_ADDRESS = Address.fromString('')

// export const AVAX_ETH_PAIR_ADDRESS = Address.fromString('')
// export const AVAX_USDT_PAIR_ADDRESS = Address.fromString('')
export const WAVAX_ADDRESS = Address.fromString('0xc778417e063141139fce010982780140aa0cd5ab')

export const MASTER_CHEF_ADDRESS = Address.fromString('0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd')


export const NULL_CALL_RESULT_VALUE = '0x0000000000000000000000000000000000000000000000000000000000000001'

// export const USDC_WETH_PAIR = ''

// export const DAI_WETH_PAIR = ''

// export const USDT_WETH_PAIR = ''

// export const SUSHI_USDT_PAIR = ''

// export const WHITELIST: string[] = [
//   '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
//   '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI
//   '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
//   '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
//   '0x0000000000085d4780b73119b644ae5ecd22b376', // TUSD
//   '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643', // cDAI
//   '0x39aa39c021dfbae8fac545936693ac917d5e7563', // cUSDC
//   '0x86fadb80d8d2cff3c3680819e4da99c10232ba0f', // EBASE
//   '0x57ab1ec28d129707052df4df418d58a2d46d5f51', // sUSD
//   '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', // MKR
//   '0xc00e94cb662c3520282e6f5717214004a7f26888', // COMP
//   '0x514910771af9ca656af840dff83e8264ecf986ca', //LINK
//   '0x960b236a07cf122663c4303350609a66a7b288c0', //ANT
//   '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f', //SNX
//   '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e', //YFI
//   '0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8', // yCurv
// ]

export const WHITELIST: string[] = [
    '0xc778417e063141139fce010982780140aa0cd5ab', // WAVAX
    '0xc778417e063141139fce010982780140aa0cd5ab', // WETH
    '0x5af59f281b3cfd0c12770e4633e6c16dd08ea543', // WBTC
    '0x1a37dd375096820a5fde14342720102c07100f26', // USDT
    '0x1521e5c11bdd02ca6cd1b35a34e176d87d9bdcd2', // DAI
    '0xd87fea54f506972e3267239ec8e159548892074a', // LINK
]

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('0')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('0')

// export const WETH_ADDRESS = Address.fromString('0xc778417e063141139fce010982780140aa0cd5ab')

export const TRADERJOE_WAVAX_USDT_PAIR_ADDRESS = Address.fromString('')
export const USDT_ADDRESS = Address.fromString('0x1a37dd375096820a5fde14342720102c07100f26')

export const MASTER_CHEF_START_BLOCK = BigInt.fromI32(8438455)

export const JOE_BAR_ADDRESS = Address.fromString('0x1C4b41bA54492F551e98eD0A9A59B952a962C452')