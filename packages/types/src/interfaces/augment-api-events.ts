// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, Struct, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { H256, Perbill } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportDispatchDispatchInfo, FrameSupportTokensMiscBalanceStatus, OrmlTraitsAssetRegistryAssetMetadata, PalletIssuanceIssuanceInfo, PalletIssuanceTgeInfo, PalletRolldownMessagesChain, ParachainStakingCandidateBondRequest, ParachainStakingDelegationRequest, ParachainStakingDelegatorAdded, ParachainStakingPayoutRounds, RollupRuntimeRuntimeConfigConfigPalletProxyProxyType, SpConsensusGrandpaAppPublic, SpRuntimeAccountAccountId20, SpRuntimeDispatchError, SpRuntimeModuleError } from '@polkadot/types/lookup';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    assetRegistry: {
      RegisteredAsset: AugmentedEvent<ApiType, [assetId: u32, metadata: OrmlTraitsAssetRegistryAssetMetadata], { assetId: u32, metadata: OrmlTraitsAssetRegistryAssetMetadata }>;
      UpdatedAsset: AugmentedEvent<ApiType, [assetId: u32, metadata: OrmlTraitsAssetRegistryAssetMetadata], { assetId: u32, metadata: OrmlTraitsAssetRegistryAssetMetadata }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bootstrap: {
      /**
       * account whitelisted
       **/
      AccountsWhitelisted: AugmentedEvent<ApiType, []>;
      /**
       * finalization process finished
       **/
      BootstrapFinalized: AugmentedEvent<ApiType, []>;
      /**
       * bootstrap pre finalization has completed partially
       **/
      BootstrapParitallyPreFinalized: AugmentedEvent<ApiType, []>;
      /**
       * bootstrap pre finalization has completed, and the bootstrap can now be finalized
       **/
      BootstrapReadyToBeFinalized: AugmentedEvent<ApiType, []>;
      /**
       * Funds provisioned
       **/
      Provisioned: AugmentedEvent<ApiType, [u32, u128]>;
      /**
       * Rewards claimed
       **/
      RewardsClaimed: AugmentedEvent<ApiType, [u32, u128]>;
      /**
       * The activation of the rewards liquidity tokens failed
       **/
      RewardsLiquidityAcitvationFailed: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u32, u128]>;
      /**
       * Funds provisioned using vested tokens
       **/
      VestedProvisioned: AugmentedEvent<ApiType, [u32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    council: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * The members have been changed
       **/
      MembersChanged: AugmentedEvent<ApiType, [newMembers: Vec<SpRuntimeAccountAccountId20>], { newMembers: Vec<SpRuntimeAccountAccountId20> }>;
      /**
       * The Prime member has been set
       **/
      PrimeSet: AugmentedEvent<ApiType, [newPrime: Option<SpRuntimeAccountAccountId20>], { newPrime: Option<SpRuntimeAccountAccountId20> }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: SpRuntimeAccountAccountId20, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: SpRuntimeAccountAccountId20, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: SpRuntimeAccountAccountId20, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: SpRuntimeAccountAccountId20, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    crowdloan: {
      /**
       * When initializing the reward vec an already initialized account was found
       **/
      InitializedAccountWithNotEnoughContribution: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, Option<SpRuntimeAccountAccountId20>, u128]>;
      /**
       * When initializing the reward vec an already initialized account was found
       **/
      InitializedAlreadyInitializedAccount: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, Option<SpRuntimeAccountAccountId20>, u128]>;
      /**
       * The initial payment of InitializationPayment % was paid
       **/
      InitialPaymentMade: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u128]>;
      /**
       * Someone has proven they made a contribution and associated a native identity with it.
       * Data is the relay account,  native account and the total amount of _rewards_ that will be paid
       **/
      NativeIdentityAssociated: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, u128]>;
      /**
       * A contributor has updated the reward address.
       **/
      RewardAddressUpdated: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20]>;
      /**
       * A contributor has claimed some rewards.
       * Data is the account getting paid and the amount of rewards paid.
       **/
      RewardsPaid: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    feeLock: {
      FeeLocked: AugmentedEvent<ApiType, [who: SpRuntimeAccountAccountId20, lockAmount: u128, totalLocked: u128], { who: SpRuntimeAccountAccountId20, lockAmount: u128, totalLocked: u128 }>;
      FeeLockMetadataUpdated: AugmentedEvent<ApiType, []>;
      FeeLockUnlocked: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    grandpa: {
      /**
       * New authority set has been applied.
       **/
      NewAuthorities: AugmentedEvent<ApiType, [authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>], { authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>> }>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    identity: {
      /**
       * A name was cleared, and the given balance returned.
       **/
      IdentityCleared: AugmentedEvent<ApiType, [who: SpRuntimeAccountAccountId20, deposit: u128], { who: SpRuntimeAccountAccountId20, deposit: u128 }>;
      /**
       * A name was removed and the given balance slashed.
       **/
      IdentityKilled: AugmentedEvent<ApiType, [who: SpRuntimeAccountAccountId20, deposit: u128], { who: SpRuntimeAccountAccountId20, deposit: u128 }>;
      /**
       * A name was set or reset (which will remove all judgements).
       **/
      IdentitySet: AugmentedEvent<ApiType, [who: SpRuntimeAccountAccountId20], { who: SpRuntimeAccountAccountId20 }>;
      /**
       * A judgement was given by a registrar.
       **/
      JudgementGiven: AugmentedEvent<ApiType, [target: SpRuntimeAccountAccountId20, registrarIndex: u32], { target: SpRuntimeAccountAccountId20, registrarIndex: u32 }>;
      /**
       * A judgement was asked from a registrar.
       **/
      JudgementRequested: AugmentedEvent<ApiType, [who: SpRuntimeAccountAccountId20, registrarIndex: u32], { who: SpRuntimeAccountAccountId20, registrarIndex: u32 }>;
      /**
       * A judgement request was retracted.
       **/
      JudgementUnrequested: AugmentedEvent<ApiType, [who: SpRuntimeAccountAccountId20, registrarIndex: u32], { who: SpRuntimeAccountAccountId20, registrarIndex: u32 }>;
      /**
       * A registrar was added.
       **/
      RegistrarAdded: AugmentedEvent<ApiType, [registrarIndex: u32], { registrarIndex: u32 }>;
      /**
       * A sub-identity was added to an identity and the deposit paid.
       **/
      SubIdentityAdded: AugmentedEvent<ApiType, [sub: SpRuntimeAccountAccountId20, main: SpRuntimeAccountAccountId20, deposit: u128], { sub: SpRuntimeAccountAccountId20, main: SpRuntimeAccountAccountId20, deposit: u128 }>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       **/
      SubIdentityRemoved: AugmentedEvent<ApiType, [sub: SpRuntimeAccountAccountId20, main: SpRuntimeAccountAccountId20, deposit: u128], { sub: SpRuntimeAccountAccountId20, main: SpRuntimeAccountAccountId20, deposit: u128 }>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account.
       **/
      SubIdentityRevoked: AugmentedEvent<ApiType, [sub: SpRuntimeAccountAccountId20, main: SpRuntimeAccountAccountId20, deposit: u128], { sub: SpRuntimeAccountAccountId20, main: SpRuntimeAccountAccountId20, deposit: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    issuance: {
      /**
       * Issuance configuration has been finalized
       **/
      IssuanceConfigInitialized: AugmentedEvent<ApiType, [PalletIssuanceIssuanceInfo]>;
      /**
       * Issuance for upcoming session issued
       **/
      SessionIssuanceIssued: AugmentedEvent<ApiType, [u32, u128, u128]>;
      /**
       * Issuance for upcoming session calculated and recorded
       **/
      SessionIssuanceRecorded: AugmentedEvent<ApiType, [u32, u128, u128]>;
      /**
       * TGE has been finalized
       **/
      TGEFinalized: AugmentedEvent<ApiType, []>;
      /**
       * A TGE instance has failed
       **/
      TGEInstanceFailed: AugmentedEvent<ApiType, [PalletIssuanceTgeInfo]>;
      /**
       * A TGE instance has succeeded
       **/
      TGEInstanceSucceeded: AugmentedEvent<ApiType, [PalletIssuanceTgeInfo]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    maintenance: {
      /**
       * Maintenance mode has been switched off
       **/
      MaintenanceModeSwitchedOff: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20]>;
      /**
       * Maintenance mode has been switched on
       **/
      MaintenanceModeSwitchedOn: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20]>;
      /**
       * Upgradablilty in maintenance mode has been switched off
       **/
      UpgradabilityInMaintenanceModeSwitchedOff: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20]>;
      /**
       * Upgradablilty in maintenance mode has been switched on
       **/
      UpgradabilityInMaintenanceModeSwitchedOn: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    metamask: {
      MetadataUpdated: AugmentedEvent<ApiType, [name: Option<Bytes>, version: Option<Bytes>, chainId: Option<u64>, decodeUrl: Option<Bytes>], { name: Option<Bytes>, version: Option<Bytes>, chainId: Option<u64>, decodeUrl: Option<Bytes> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    multiPurposeLiquidity: {
      TokensRelockedFromReserve: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u32, u128, u128]>;
      VestingTokensReserved: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    parachainStaking: {
      /**
       * An agggregator's metadata has been updated
       **/
      AggregatorMetadataUpdated: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20]>;
      /**
       * Candidate, Cancelled Request
       **/
      CancelledCandidateBondChange: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, ParachainStakingCandidateBondRequest]>;
      /**
       * Candidate
       **/
      CancelledCandidateExit: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20]>;
      /**
       * Delegator, Cancelled Request
       **/
      CancelledDelegationRequest: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, ParachainStakingDelegationRequest]>;
      /**
       * A candidate updated aggregator
       **/
      CandidateAggregatorUpdated: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, Option<SpRuntimeAccountAccountId20>]>;
      /**
       * Round Online, Candidate
       **/
      CandidateBackOnline: AugmentedEvent<ApiType, [u32, SpRuntimeAccountAccountId20]>;
      /**
       * Candidate, Amount, New Bond
       **/
      CandidateBondedLess: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u128, u128]>;
      /**
       * Candidate, Amount, New Bond Total
       **/
      CandidateBondedMore: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u128, u128]>;
      /**
       * Candidate, Amount To Decrease, Round at which request can be executed by caller
       **/
      CandidateBondLessRequested: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u128, u32]>;
      /**
       * Candidate, Amount To Increase, Round at which request can be executed by caller
       **/
      CandidateBondMoreRequested: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u128, u32]>;
      /**
       * Ex-Candidate, Amount Unlocked, New Total Amt Locked
       **/
      CandidateLeft: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u128, u128]>;
      /**
       * Round At Which Exit Is Allowed, Candidate, Scheduled Exit
       **/
      CandidateScheduledExit: AugmentedEvent<ApiType, [u32, SpRuntimeAccountAccountId20, u32]>;
      /**
       * Round Offline, Candidate
       **/
      CandidateWentOffline: AugmentedEvent<ApiType, [u32, SpRuntimeAccountAccountId20]>;
      /**
       * Round, Collator Account, Total Exposed Amount (includes all delegations)
       **/
      CollatorChosen: AugmentedEvent<ApiType, [u32, SpRuntimeAccountAccountId20, u128]>;
      /**
       * Set collator commission to this value [old, new]
       **/
      CollatorCommissionSet: AugmentedEvent<ApiType, [Perbill, Perbill]>;
      /**
       * Notify about reward periods that has been paid (collator, payout rounds, any rewards left)
       **/
      CollatorRewardsDistributed: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, ParachainStakingPayoutRounds]>;
      /**
       * Delegator, Amount Locked, Candidate, Delegator Position with New Total Counted if in Top
       **/
      Delegation: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u128, SpRuntimeAccountAccountId20, ParachainStakingDelegatorAdded]>;
      DelegationDecreased: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, u128, bool]>;
      /**
       * Delegator, Candidate, Amount to be decreased, Round at which can be executed
       **/
      DelegationDecreaseScheduled: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, u128, u32]>;
      DelegationIncreased: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, u128, bool]>;
      /**
       * Delegator, Candidate, Amount to be increased, Round at which can be executed
       **/
      DelegationIncreaseScheduled: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, u128, u32]>;
      /**
       * Round, Delegator, Candidate, Scheduled Exit
       **/
      DelegationRevocationScheduled: AugmentedEvent<ApiType, [u32, SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, u32]>;
      /**
       * Delegator, Candidate, Amount Unstaked
       **/
      DelegationRevoked: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, u128]>;
      /**
       * Session index, Delegator, Collator, Due reward (as per counted delegation for collator)
       **/
      DelegatorDueReward: AugmentedEvent<ApiType, [u32, SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, u128]>;
      /**
       * Delegator
       **/
      DelegatorExitCancelled: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20]>;
      /**
       * Round, Delegator, Scheduled Exit
       **/
      DelegatorExitScheduled: AugmentedEvent<ApiType, [u32, SpRuntimeAccountAccountId20, u32]>;
      /**
       * Delegator, Amount Unstaked
       **/
      DelegatorLeft: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u128]>;
      /**
       * Delegator, Candidate, Amount Unstaked, New Total Amt Staked for Candidate
       **/
      DelegatorLeftCandidate: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, SpRuntimeAccountAccountId20, u128, u128]>;
      /**
       * Account, Amount Locked, New Total Amt Locked
       **/
      JoinedCollatorCandidates: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u128, u128]>;
      /**
       * Starting Block, Round, Number of Collators Selected, Total Balance
       **/
      NewRound: AugmentedEvent<ApiType, [u32, u32, u32, u128]>;
      /**
       * Paid the account (delegator or collator) the balance as liquid rewards
       **/
      Rewarded: AugmentedEvent<ApiType, [u32, SpRuntimeAccountAccountId20, u128]>;
      /**
       * Staking expectations set
       **/
      StakeExpectationsSet: AugmentedEvent<ApiType, [u128, u128, u128]>;
      /**
       * Set total selected candidates to this value [old, new]
       **/
      TotalSelectedSet: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    proofOfStake: {
      LiquidityActivated: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u32, u128]>;
      LiquidityDeactivated: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u32, u128]>;
      PoolPromotionUpdated: AugmentedEvent<ApiType, [u32, Option<u8>]>;
      RewardsClaimed: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u32, u128]>;
      ThirdPartyLiquidityActivated: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u32, u32, u128]>;
      ThirdPartyLiquidityDeactivated: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u32, u32, u128]>;
      ThirdPartyRewardsClaimed: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u32, u32, u128]>;
      ThirdPartySuccessfulPoolPromotion: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u32, u32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    proxy: {
      /**
       * An announcement was placed to make a call in the future.
       **/
      Announced: AugmentedEvent<ApiType, [real: SpRuntimeAccountAccountId20, proxy: SpRuntimeAccountAccountId20, callHash: H256], { real: SpRuntimeAccountAccountId20, proxy: SpRuntimeAccountAccountId20, callHash: H256 }>;
      /**
       * A proxy was added.
       **/
      ProxyAdded: AugmentedEvent<ApiType, [delegator: SpRuntimeAccountAccountId20, delegatee: SpRuntimeAccountAccountId20, proxyType: RollupRuntimeRuntimeConfigConfigPalletProxyProxyType, delay: u32], { delegator: SpRuntimeAccountAccountId20, delegatee: SpRuntimeAccountAccountId20, proxyType: RollupRuntimeRuntimeConfigConfigPalletProxyProxyType, delay: u32 }>;
      /**
       * A proxy was executed correctly, with the given.
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A proxy was removed.
       **/
      ProxyRemoved: AugmentedEvent<ApiType, [delegator: SpRuntimeAccountAccountId20, delegatee: SpRuntimeAccountAccountId20, proxyType: RollupRuntimeRuntimeConfigConfigPalletProxyProxyType, delay: u32], { delegator: SpRuntimeAccountAccountId20, delegatee: SpRuntimeAccountAccountId20, proxyType: RollupRuntimeRuntimeConfigConfigPalletProxyProxyType, delay: u32 }>;
      /**
       * A pure account has been created by new proxy with given
       * disambiguation index and proxy type.
       **/
      PureCreated: AugmentedEvent<ApiType, [pure: SpRuntimeAccountAccountId20, who: SpRuntimeAccountAccountId20, proxyType: RollupRuntimeRuntimeConfigConfigPalletProxyProxyType, disambiguationIndex: u16], { pure: SpRuntimeAccountAccountId20, who: SpRuntimeAccountAccountId20, proxyType: RollupRuntimeRuntimeConfigConfigPalletProxyProxyType, disambiguationIndex: u16 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    rolldown: {
      L1ReadStored: AugmentedEvent<ApiType, [ITuple<[PalletRolldownMessagesChain, SpRuntimeAccountAccountId20, u128, {
    readonly start: u128;
    readonly end: u128;
  } & Struct, H256]>]>;
      RequestProcessedOnL2: AugmentedEvent<ApiType, [PalletRolldownMessagesChain, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sequencerStaking: {
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the session index, not the
       * block number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied if one existed.
       **/
      KeyChanged: AugmentedEvent<ApiType, [oldSudoer: Option<SpRuntimeAccountAccountId20>], { oldSudoer: Option<SpRuntimeAccountAccountId20> }>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudoOrigin: {
      /**
       * A sudo just took place. \[result\]
       **/
      SuOriginDid: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SuOriginDoAsDone: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [account: SpRuntimeAccountAccountId20], { account: SpRuntimeAccountAccountId20 }>;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [account: SpRuntimeAccountAccountId20], { account: SpRuntimeAccountAccountId20 }>;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<ApiType, [sender: SpRuntimeAccountAccountId20, hash_: H256], { sender: SpRuntimeAccountAccountId20, hash_: H256 }>;
      /**
       * On stored txs
       **/
      TxsEnqueued: AugmentedEvent<ApiType, [count: u64], { count: u64 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    tokens: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [currencyId: u32, who: SpRuntimeAccountAccountId20, free: u128, reserved: u128], { currencyId: u32, who: SpRuntimeAccountAccountId20, free: u128, reserved: u128 }>;
      /**
       * A token was issued.
       **/
      Created: AugmentedEvent<ApiType, [u32, SpRuntimeAccountAccountId20, u128]>;
      /**
       * Deposited some balance into an account
       **/
      Deposited: AugmentedEvent<ApiType, [currencyId: u32, who: SpRuntimeAccountAccountId20, amount: u128], { currencyId: u32, who: SpRuntimeAccountAccountId20, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below
       * ExistentialDeposit, resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [currencyId: u32, who: SpRuntimeAccountAccountId20, amount: u128], { currencyId: u32, who: SpRuntimeAccountAccountId20, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [currencyId: u32, who: SpRuntimeAccountAccountId20, amount: u128], { currencyId: u32, who: SpRuntimeAccountAccountId20, amount: u128 }>;
      Issued: AugmentedEvent<ApiType, [currencyId: u32, amount: u128], { currencyId: u32, amount: u128 }>;
      /**
       * Some free balance was locked.
       **/
      Locked: AugmentedEvent<ApiType, [currencyId: u32, who: SpRuntimeAccountAccountId20, amount: u128], { currencyId: u32, who: SpRuntimeAccountAccountId20, amount: u128 }>;
      /**
       * Some locked funds were unlocked
       **/
      LockRemoved: AugmentedEvent<ApiType, [lockId: U8aFixed, currencyId: u32, who: SpRuntimeAccountAccountId20], { lockId: U8aFixed, currencyId: u32, who: SpRuntimeAccountAccountId20 }>;
      /**
       * Some funds are locked
       **/
      LockSet: AugmentedEvent<ApiType, [lockId: U8aFixed, currencyId: u32, who: SpRuntimeAccountAccountId20, amount: u128], { lockId: U8aFixed, currencyId: u32, who: SpRuntimeAccountAccountId20, amount: u128 }>;
      /**
       * A token was minted.
       **/
      Minted: AugmentedEvent<ApiType, [u32, SpRuntimeAccountAccountId20, u128]>;
      Rescinded: AugmentedEvent<ApiType, [currencyId: u32, amount: u128], { currencyId: u32, amount: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [currencyId: u32, who: SpRuntimeAccountAccountId20, amount: u128], { currencyId: u32, who: SpRuntimeAccountAccountId20, amount: u128 }>;
      /**
       * Some reserved balance was repatriated (moved from reserved to
       * another account).
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [currencyId: u32, from: SpRuntimeAccountAccountId20, to: SpRuntimeAccountAccountId20, amount: u128, status: FrameSupportTokensMiscBalanceStatus], { currencyId: u32, from: SpRuntimeAccountAccountId20, to: SpRuntimeAccountAccountId20, amount: u128, status: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some balances were slashed (e.g. due to mis-behavior)
       **/
      Slashed: AugmentedEvent<ApiType, [currencyId: u32, who: SpRuntimeAccountAccountId20, freeAmount: u128, reservedAmount: u128], { currencyId: u32, who: SpRuntimeAccountAccountId20, freeAmount: u128, reservedAmount: u128 }>;
      /**
       * The total issuance of an currency has been set
       **/
      TotalIssuanceSet: AugmentedEvent<ApiType, [currencyId: u32, amount: u128], { currencyId: u32, amount: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [currencyId: u32, from: SpRuntimeAccountAccountId20, to: SpRuntimeAccountAccountId20, amount: u128], { currencyId: u32, from: SpRuntimeAccountAccountId20, to: SpRuntimeAccountAccountId20, amount: u128 }>;
      /**
       * Some locked balance was freed.
       **/
      Unlocked: AugmentedEvent<ApiType, [currencyId: u32, who: SpRuntimeAccountAccountId20, amount: u128], { currencyId: u32, who: SpRuntimeAccountAccountId20, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [currencyId: u32, who: SpRuntimeAccountAccountId20, amount: u128], { currencyId: u32, who: SpRuntimeAccountAccountId20, amount: u128 }>;
      /**
       * Some balances were withdrawn (e.g. pay for transaction fee)
       **/
      Withdrawn: AugmentedEvent<ApiType, [currencyId: u32, who: SpRuntimeAccountAccountId20, amount: u128], { currencyId: u32, who: SpRuntimeAccountAccountId20, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionPayment: {
      /**
       * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
       * has been paid by `who`.
       **/
      TransactionFeePaid: AugmentedEvent<ApiType, [who: SpRuntimeAccountAccountId20, actualFee: u128, tip: u128], { who: SpRuntimeAccountAccountId20, actualFee: u128, tip: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    treasury: {
      /**
       * Some funds have been allocated.
       **/
      Awarded: AugmentedEvent<ApiType, [proposalIndex: u32, award: u128, account: SpRuntimeAccountAccountId20], { proposalIndex: u32, award: u128, account: SpRuntimeAccountAccountId20 }>;
      /**
       * Some of our funds have been burnt.
       **/
      Burnt: AugmentedEvent<ApiType, [burntFunds: u128], { burntFunds: u128 }>;
      /**
       * Some funds have been deposited.
       **/
      Deposit: AugmentedEvent<ApiType, [value: u128], { value: u128 }>;
      /**
       * New proposal.
       **/
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32], { proposalIndex: u32 }>;
      /**
       * A proposal was rejected; funds were slashed.
       **/
      Rejected: AugmentedEvent<ApiType, [proposalIndex: u32, slashed: u128], { proposalIndex: u32, slashed: u128 }>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       **/
      Rollover: AugmentedEvent<ApiType, [rolloverBalance: u128], { rolloverBalance: u128 }>;
      /**
       * A new spend proposal has been approved.
       **/
      SpendApproved: AugmentedEvent<ApiType, [proposalIndex: u32, amount: u128, beneficiary: SpRuntimeAccountAccountId20], { proposalIndex: u32, amount: u128, beneficiary: SpRuntimeAccountAccountId20 }>;
      /**
       * We have ended a spend period and will now allocate funds.
       **/
      Spending: AugmentedEvent<ApiType, [budgetRemaining: u128], { budgetRemaining: u128 }>;
      /**
       * The inactive funds of the pallet have been updated.
       **/
      UpdatedInactive: AugmentedEvent<ApiType, [reactivated: u128, deactivated: u128], { reactivated: u128, deactivated: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches completed but has errors.
       **/
      BatchCompletedWithErrors: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error.
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [index: u32, error: SpRuntimeDispatchError], { index: u32, error: SpRuntimeDispatchError }>;
      /**
       * A call was dispatched.
       **/
      DispatchedAs: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single item within a Batch of dispatches has completed with no error.
       **/
      ItemCompleted: AugmentedEvent<ApiType, []>;
      /**
       * A single item within a Batch of dispatches has completed with error.
       **/
      ItemFailed: AugmentedEvent<ApiType, [error: SpRuntimeDispatchError], { error: SpRuntimeDispatchError }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vesting: {
      /**
       * An \[account\] has become fully vested.
       **/
      VestingCompleted: AugmentedEvent<ApiType, [account: SpRuntimeAccountAccountId20, tokenId: u32], { account: SpRuntimeAccountAccountId20, tokenId: u32 }>;
      /**
       * The amount vested has been updated. This could indicate a change in funds available.
       * The balance given is the amount which is left unvested (and thus locked).
       **/
      VestingUpdated: AugmentedEvent<ApiType, [account: SpRuntimeAccountAccountId20, tokenId: u32, unvested: u128], { account: SpRuntimeAccountAccountId20, tokenId: u32, unvested: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xyk: {
      AssetsSwapped: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, Vec<u32>, u128, u128]>;
      BuyAssetFailedDueToSlippage: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u32, u128, u32, u128, u128]>;
      LiquidityActivated: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u32, u128]>;
      LiquidityBurned: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u32, u128, u32, u128, u32, u128]>;
      LiquidityDeactivated: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u32, u128]>;
      LiquidityMinted: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u32, u128, u32, u128, u32, u128]>;
      MultiSwapAssetFailedOnAtomicSwap: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, Vec<u32>, u128, SpRuntimeModuleError]>;
      PoolCreated: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u32, u128, u32, u128]>;
      PoolPromotionUpdated: AugmentedEvent<ApiType, [u32, Option<u8>]>;
      RewardsClaimed: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u32, u128]>;
      SellAssetFailedDueToSlippage: AugmentedEvent<ApiType, [SpRuntimeAccountAccountId20, u32, u128, u32, u128, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
