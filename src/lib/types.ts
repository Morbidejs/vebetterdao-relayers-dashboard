export interface RoundAnalytics {
  roundId: number;
  /**
   * Total users the relayer is expected to serve in this round.
   * Post-V3 (navigators): auto-voters + delegated citizens.
   * Pre-navigator rounds: auto-voters only (citizenUsersCount === 0).
   */
  autoVotingUsersCount: number;
  votedForCount: number;
  /** AutoVoteSkipped count (auto-voters only). Navigator skips are tracked in the fields below. */
  invalidVotesCount: number;
  rewardsClaimedCount: number;
  totalRelayerRewards: string;
  totalRelayerRewardsRaw: string;
  estimatedRelayerRewards: string;
  estimatedRelayerRewardsRaw: string;
  numRelayers: number;
  vthoSpentOnVoting: string;
  vthoSpentOnVotingRaw: string;
  vthoSpentOnClaiming: string;
  vthoSpentOnClaimingRaw: string;
  vthoSpentTotal: string;
  vthoSpentTotalRaw: string;
  expectedActions: number;
  completedActions: number;
  reducedUsersCount: number;
  missedUsersCount: number;
  allActionsOk: boolean;
  actionStatus: string;
  isRoundEnded: boolean;
  /** Strict auto-voters only (from AutoVotingToggled events). Optional for backward compat. */
  autoVoterUsersCount?: number;
  /** Citizens delegated to a navigator at round snapshot. Zero pre-navigator. */
  citizenUsersCount?: number;
  /** Governance proposals active at round start (B3TRGovernor.getActiveProposals at snapshot). */
  activeProposalsCount?: number;
  /** Unique (citizen, proposalId) governance VoteCasts during the round. */
  governanceVotesCastCount?: number;
  /** NavigatorVoteSkipped events on XAllocationVoting for this round. */
  navigatorAllocationSkipsCount?: number;
  /** NavigatorGovernanceVoteSkipped events on B3TRGovernor for this round. */
  navigatorGovernanceSkipsCount?: number;
  /** Auto-voters successfully voted for (AllocationAutoVoteCast count). */
  autoVoterVotedCount?: number;
  /** Citizens successfully voted for in allocation (NavigatorVoteCast count). */
  citizenVotedCount?: number;
}

export interface RelayerRoundBreakdown {
  roundId: number;
  votedForCount: number;
  rewardsClaimedCount: number;
  weightedActions: number;
  actions: number;
  claimableRewardsRaw: string;
  relayerRewardsClaimedRaw: string;
  vthoSpentOnVotingRaw: string;
  vthoSpentOnClaimingRaw: string;
}

export interface RelayerAnalytics {
  address: string;
  rounds: RelayerRoundBreakdown[];
}

export interface AnalyticsReport {
  generatedAt: string;
  network: string;
  firstRound: number;
  currentRound: number;
  rounds: RoundAnalytics[];
  relayers: RelayerAnalytics[];
}
