// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/consts';

import type { ApiTypes, AugmentedConst } from '@polkadot/api-base/types';
import type { Bytes, Option, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { Codec } from '@polkadot/types-codec/types';
import type { Perbill, Percent, Permill } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportPalletId, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, SpRuntimeAccountAccountId20, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight } from '@polkadot/types/lookup';

export type __AugmentedConst<ApiType extends ApiTypes> = AugmentedConst<ApiType>;

declare module '@polkadot/api-base/types/consts' {
  interface AugmentedConsts<ApiType extends ApiTypes> {
    assetRegistry: {
      /**
       * The maximum length of a name or symbol.
       **/
      stringLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    bootstrap: {
      bootstrapUpdateBuffer: u32 & AugmentedConst<ApiType>;
      defaultBootstrapPromotedPoolWeight: u8 & AugmentedConst<ApiType>;
      treasuryPalletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    council: {
      /**
       * The maximum weight of a dispatch call that can be proposed and executed.
       **/
      maxProposalWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    crowdloan: {
      /**
       * Percentage to be payed at initialization
       **/
      initializationPayment: Perbill & AugmentedConst<ApiType>;
      maxInitContributors: u32 & AugmentedConst<ApiType>;
      /**
       * MGA token Id
       **/
      nativeTokenId: u32 & AugmentedConst<ApiType>;
      /**
       * A fraction representing the percentage of proofs
       * that need to be presented to change a reward address through the relay keys
       **/
      rewardAddressRelayVoteThreshold: Perbill & AugmentedConst<ApiType>;
      /**
       * Network Identifier to be appended into the signatures for reward address change/association
       * Prevents replay attacks from one network to the other
       **/
      signatureNetworkIdentifier: Bytes & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    feeLock: {
      maxCuratedTokens: u32 & AugmentedConst<ApiType>;
      nativeTokenId: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    grandpa: {
      /**
       * Max Authorities in use
       **/
      maxAuthorities: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of nominators for each validator.
       **/
      maxNominators: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of entries to keep in the set id to session index mapping.
       * 
       * Since the `SetIdSession` map is only used for validating equivocations this
       * value should relate to the bonding duration of whatever staking system is
       * being used (if any). If equivocation handling is not enabled then this value
       * can be zero.
       **/
      maxSetIdSessionEntries: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    identity: {
      /**
       * The amount held on deposit for a registered identity
       **/
      basicDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per additional field for a registered identity.
       **/
      fieldDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
       * required to access an identity, but can be pretty high.
       **/
      maxAdditionalFields: u32 & AugmentedConst<ApiType>;
      /**
       * Maxmimum number of registrars allowed in the system. Needed to bound the complexity
       * of, e.g., updating judgements.
       **/
      maxRegistrars: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of sub-accounts allowed per identified account.
       **/
      maxSubAccounts: u32 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit for a registered subaccount. This should account for the fact
       * that one storage item's value will increase by the size of an account ID, and there will
       * be another trie item whose value is the size of an account ID plus 32 bytes.
       **/
      subAccountDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    issuance: {
      /**
       * Number of blocks per session/round
       **/
      blocksPerRound: u32 & AugmentedConst<ApiType>;
      /**
       * Number of sessions to store issuance history for
       **/
      historyLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of Mangata tokens
       **/
      immediateTGEReleasePercent: Percent & AugmentedConst<ApiType>;
      /**
       * The maximum amount of Mangata tokens
       **/
      issuanceCap: u128 & AugmentedConst<ApiType>;
      /**
       * The number of blocks the issuance is linear
       **/
      linearIssuanceBlocks: u32 & AugmentedConst<ApiType>;
      /**
       * The account id that holds the liquidity mining issuance
       **/
      liquidityMiningIssuanceVault: SpRuntimeAccountAccountId20 & AugmentedConst<ApiType>;
      /**
       * The split of issuance for liquidity mining rewards
       **/
      liquidityMiningSplit: Perbill & AugmentedConst<ApiType>;
      /**
       * The account id that holds the staking issuance
       **/
      stakingIssuanceVault: SpRuntimeAccountAccountId20 & AugmentedConst<ApiType>;
      /**
       * The split of issuance for staking rewards
       **/
      stakingSplit: Perbill & AugmentedConst<ApiType>;
      /**
       * The block at which the tge tokens begin to vest
       **/
      tgeReleaseBegin: u32 & AugmentedConst<ApiType>;
      /**
       * The number of blocks the tge tokens vest for
       **/
      tgeReleasePeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The total mga allocated for crowdloans
       **/
      totalCrowdloanAllocation: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    metamask: {
      stringLimit: u32 & AugmentedConst<ApiType>;
      urlStringLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    parachainStaking: {
      /**
       * Default number of blocks per round at genesis
       **/
      blocksPerRound: u32 & AugmentedConst<ApiType>;
      /**
       * Number of rounds that candidate requests to adjust self-bond must wait to be executable
       **/
      candidateBondDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Default commission due to collators, is `CollatorCommission` storage value in genesis
       **/
      defaultCollatorCommission: Perbill & AugmentedConst<ApiType>;
      defaultPayoutLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Number of rounds that delegation {more, less} requests must wait before executable
       **/
      delegationBondDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Number of rounds that candidates remain bonded before exit request is executable
       **/
      leaveCandidatesDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Number of rounds that delegators remain bonded before exit request is executable
       **/
      leaveDelegatorsDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum collator candidates allowed
       **/
      maxCollatorCandidates: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum delegations per delegator
       **/
      maxDelegationsPerDelegator: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum delegators counted per candidate
       **/
      maxDelegatorsPerCandidate: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum delegators allowed per candidate
       **/
      maxTotalDelegatorsPerCandidate: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum stake required for any account to be a collator candidate
       **/
      minCandidateStk: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum stake required for any candidate to be in `SelectedCandidates` for the round
       **/
      minCollatorStk: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum stake for any registered on-chain account to delegate
       **/
      minDelegation: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum number of selected candidates every round
       **/
      minSelectedCandidates: u32 & AugmentedConst<ApiType>;
      /**
       * The native token used for payouts
       **/
      nativeTokenId: u32 & AugmentedConst<ApiType>;
      /**
       * Number of rounds that delegations remain bonded before revocation request is executable
       **/
      revokeDelegationDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Number of rounds after which block authors are rewarded
       **/
      rewardPaymentDelay: u32 & AugmentedConst<ApiType>;
      /**
       * The account id that holds the liquidity mining issuance
       **/
      stakingIssuanceVault: SpRuntimeAccountAccountId20 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    proofOfStake: {
      /**
       * The account id that holds the liquidity mining issuance
       **/
      liquidityMiningIssuanceVault: SpRuntimeAccountAccountId20 & AugmentedConst<ApiType>;
      rewardsDistributionPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    proxy: {
      /**
       * The base amount of currency needed to reserve for creating an announcement.
       * 
       * This is held when a new storage item holding a `Balance` is created (typically 16
       * bytes).
       **/
      announcementDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per announcement made.
       * 
       * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
       * into a pre-existing storage value.
       **/
      announcementDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of time-delayed announcements that are allowed to be pending.
       **/
      maxPending: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of proxies allowed for a single account.
       **/
      maxProxies: u32 & AugmentedConst<ApiType>;
      /**
       * The base amount of currency needed to reserve for creating a proxy.
       * 
       * This is held for an additional storage item whose value size is
       * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
       **/
      proxyDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per proxy added.
       * 
       * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
       * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
       * into account `32 + proxy_type.encode().len()` bytes of data.
       **/
      proxyDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    rolldown: {
      disputePeriodLength: u128 & AugmentedConst<ApiType>;
      requestsPerBlock: u128 & AugmentedConst<ApiType>;
      rightsMultiplier: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    sequencerStaking: {
      blocksForSequencerUpdate: u32 & AugmentedConst<ApiType>;
      cancellerRewardPercentage: Permill & AugmentedConst<ApiType>;
      maxSequencers: u32 & AugmentedConst<ApiType>;
      minimumSequencers: u32 & AugmentedConst<ApiType>;
      noOfPastSessionsForEligibility: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    system: {
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: SpWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS58 prefix of this chain.
       * 
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u16 & AugmentedConst<ApiType>;
      /**
       * Get the chain's current version.
       **/
      version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    timestamp: {
      /**
       * The minimum period between blocks. Beware that this is different to the *expected*
       * period that the block production apparatus provides. Your chosen consensus system will
       * generally work with this to determine a sensible block time. e.g. For Aura, it will be
       * double this period on default settings.
       **/
      minimumPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    tokens: {
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    transactionPayment: {
      /**
       * A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
       * `priority`
       * 
       * This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
       * added to a tip component in regular `priority` calculations.
       * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
       * extrinsic (with no tip), by including a tip value greater than the virtual tip.
       * 
       * ```rust,ignore
       * // For `Normal`
       * let priority = priority_calc(tip);
       * 
       * // For `Operational`
       * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
       * let priority = priority_calc(tip + virtual_tip);
       * ```
       * 
       * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
       * sent with the transaction. So, not only does the transaction get a priority bump based
       * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
       * transactions.
       **/
      operationalFeeMultiplier: u8 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    treasury: {
      /**
       * Percentage of spare funds (if any) that are burnt per spend period.
       **/
      burn: Permill & AugmentedConst<ApiType>;
      /**
       * The maximum number of approvals that can wait in the spending queue.
       * 
       * NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
       **/
      maxApprovals: u32 & AugmentedConst<ApiType>;
      /**
       * The treasury's pallet id, used for deriving its sovereign account ID.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Fraction of a proposal's value that should be bonded in order to place the proposal.
       * An accepted proposal gets these back. A rejected proposal does not.
       **/
      proposalBond: Permill & AugmentedConst<ApiType>;
      /**
       * Maximum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMaximum: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Period between successive spends.
       **/
      spendPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    utility: {
      /**
       * The limit on the number of batched calls.
       **/
      batchedCallsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    vesting: {
      maxVestingSchedules: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount transferred to call `vested_transfer`.
       **/
      minVestedTransfer: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    xyk: {
      buyAndBurnFeePercentage: u128 & AugmentedConst<ApiType>;
      poolFeePercentage: u128 & AugmentedConst<ApiType>;
      treasuryFeePercentage: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
  } // AugmentedConsts
} // declare module
