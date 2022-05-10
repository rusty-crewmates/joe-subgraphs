import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

// consts
export const ADDRESS_ZERO = Address.fromString('0x0000000000000000000000000000000000000000')

export const BIG_DECIMAL_1E6 = BigDecimal.fromString('1e6')

export const BIG_DECIMAL_1E12 = BigDecimal.fromString('1e12')

export const BIG_DECIMAL_1E18 = BigDecimal.fromString('1e18')

export const BIG_DECIMAL_ZERO = BigDecimal.fromString('0')

export const BIG_DECIMAL_ONE = BigDecimal.fromString('1')

export const BIG_INT_ONE = BigInt.fromI32(1)

export const BIG_INT_ONE_DAY_SECONDS = BigInt.fromI32(86400)

export const BIG_INT_ZERO = BigInt.fromI32(0)

export const BIG_INT_1E12 = BigInt.fromString('1000000000000')

export const BIG_INT_1E10 = BigInt.fromString('10000000000')

export const BIG_INT_1E9 = BigInt.fromString('1000000000')

export const BIG_INT_1E6 = BigInt.fromString('1000000')

export const LOCKUP_POOL_NUMBER = BigInt.fromI32(29)

export const NULL_CALL_RESULT_VALUE = '0x0000000000000000000000000000000000000000000000000000000000000001'

// EXCHANGE
export const FACTORY_ADDRESS = Address.fromString('0x9ad6c38be94206ca50bb0d90783181662f0cfa10')
export const TRADERJOE_START_BLOCK = BigInt.fromI32(2486000)

export const JOE_TOKEN_ADDRESS = Address.fromString('0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd')

// MASTER CHEF
export const MASTER_CHEF_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000')
export const MASTER_CHEF_V2_ADDRESS = Address.fromString('0xd6a4f121ca35509af06a0be99093d08462f53052')
export const MASTER_CHEF_V3_ADDRESS = Address.fromString('0x188bed1968b795d5c9022f6a0bb5931ac4c18f00')
export const MASTER_CHEF_START_BLOCK = BigInt.fromI32(2486000)

// BAR
export const JOE_BAR_ADDRESS = Address.fromString('0x57319d41f71e81f3c65f2a47ca4e001ebafd4f33')

// MAKER
export const JOE_MAKER_ADDRESS = Address.fromString('0x861726bfe27931a4e22a7277bde6cb8432b65856')
export const JOE_MAKER_V2_ADDRESS = Address.fromString('0xC98C3C547DDbcc0029F38E0383C645C202aD663d')

// PRICING
export const TRADERJOE_WAVAX_USD_BASE_PAIR_ADDRESS = Address.fromString('0xf4003f4efbe8691b60249e6afbd307abe7758adb')
export const JOE_USDC_PAIR_ADDRESS = Address.fromString('0x3bc40d4307cd946157447cd55d70ee7495ba6140')

export const WAVAX_ADDRESS = Address.fromString('0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7')
export const USDT_ADDRESS = Address.fromString('0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7')
export const USDC_ADDRESS = Address.fromString('0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e')

export const WAVAX_STABLE_PAIRS: string[] = [
    '0xbb4646a764358ee93c2a9c4a147d5aded527ab73', // WAVAX-USDT
    '0xf4003f4efbe8691b60249e6afbd307abe7758adb', // WAVAX-USDC
]

export const WHITELIST: string[] = [
    '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', // WAVAX
    '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab', // WETH
    '0x50b7545627a5162f82a992c33b87adc75187b218', // WBTC
    '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7', // USDT
    '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e', // USDC
]

// LOCKUP -- TO BE DEPRECATED?
export const LOCKUP_BLOCK_NUMBER = BigInt.fromI32(10959148)

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('400000')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_AVAX = BigDecimal.fromString('20')

// MasterChefV2 precision
export const ACC_JOE_PRECISION = BigInt.fromString('1000000000000')
