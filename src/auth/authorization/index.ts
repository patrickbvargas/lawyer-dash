import { ENUM } from '@/constants/enum';
import {
  MongoAbility,
  AbilityBuilder,
  createMongoAbility,
} from '@casl/ability';
import {
  FeeSchemaType,
  RemunerationSchemaType,
  RevenueSchemaType,
} from '@/schemas';
import {
  DefaultSubject,
  ClientSubject,
  ContractSubject,
  FeeSubject,
  LawyerSubject,
  RemunerationSubject,
  RevenueSubject,
} from './subjects';

type AppAbility = MongoAbility<
  | DefaultSubject
  | ClientSubject
  | ContractSubject
  | FeeSubject
  | LawyerSubject
  | RemunerationSubject
  | RevenueSubject
>;

type UserPermissions = (
  lawyerId: string,
  builder: AbilityBuilder<AppAbility>,
) => void;

type FlatRevenue = RevenueSchemaType & {
  'contract.lawyers': RevenueSchemaType['contract']['lawyers'];
};

type FlatFee = FeeSchemaType & {
  'revenue.contract.lawyers': FeeSchemaType['revenue']['contract']['lawyers'];
};

type FlatRemuneration = RemunerationSchemaType & {
  'contractLawyer.lawyerId': RemunerationSchemaType['contractLawyer']['lawyerId'];
};

const ALLOWED_LAWYER_ASSIGNMENTS = [
  ENUM.LawyerAssignment.RESPONSIBLE,
  ENUM.LawyerAssignment.RECOMMENDED,
];

const permissions: Record<ENUM.LawyerRole, UserPermissions> = {
  ADMIN(_, { can }) {
    can('manage', 'all');
  },
  USER(lawyerId, { can }) {
    can('manage', 'Client');
    can('manage', 'Lawyer', {
      id: lawyerId,
    });
    can('manage', 'Contract', {
      lawyers: {
        $elemMatch: {
          lawyerId: lawyerId,
          lawyerAssignment: {
            $in: ALLOWED_LAWYER_ASSIGNMENTS,
          },
        },
      },
    });
    can<FlatRevenue>('manage', 'Revenue', {
      'contract.lawyers': {
        $elemMatch: {
          lawyerId: lawyerId,
          lawyerAssignment: {
            $in: ALLOWED_LAWYER_ASSIGNMENTS,
          },
        },
      },
    });
    can<FlatFee>('manage', 'Fee', {
      'revenue.contract.lawyers': {
        $elemMatch: {
          lawyerId: lawyerId,
          lawyerAssignment: {
            $in: ALLOWED_LAWYER_ASSIGNMENTS,
          },
        },
      },
    });
    can<FlatRemuneration>('manage', 'Remuneration', {
      'contractLawyer.lawyerId': lawyerId,
    });
  },
};

export function defineAbilityForUser() {
  const user = { id: 'clulzffpg000308l7g33qbrs7', role: ENUM.LawyerRole.ADMIN }; // TODO: replace for session user data
  const builder = new AbilityBuilder<AppAbility>(createMongoAbility);
  permissions[user.role](user.id, builder);

  return builder.build();
}
