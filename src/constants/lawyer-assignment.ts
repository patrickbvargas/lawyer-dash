import { ENUM } from '@/lib/prisma';

type LawyerAssignmentInfo = {
  value: ENUM.LawyerAssignment;
  alias: string;
};

export const LAWYER_ASSIGNMENT: Record<
  ENUM.LawyerAssignment,
  LawyerAssignmentInfo
> = {
  RESPONSIBLE: {
    value: ENUM.LawyerAssignment.RESPONSIBLE,
    alias: 'Responsável',
  },
  RECOMMENDED: {
    value: ENUM.LawyerAssignment.RECOMMENDED,
    alias: 'Indicado',
  },
  RECOMMENDING: {
    value: ENUM.LawyerAssignment.RECOMMENDING,
    alias: 'Indicante',
  },
};
