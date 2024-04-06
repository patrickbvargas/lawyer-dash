import { $Enums as ENUM } from '@prisma/client';

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
