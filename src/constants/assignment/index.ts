import { ENUM } from '@/constants';

/**
 * Array of constants that defines the types of lawyer assignments
 * considered responsible for a contract.
 *
 * These types are used to identify which lawyer is designated as
 * the 'owner' of a contract.
 */
export const RESPONSIBLE_CONTRACT_LAWYER_ASSIGNMENTS = [
  ENUM.LawyerAssignment.RESPONSIBLE,
  ENUM.LawyerAssignment.RECOMMENDED,
];
