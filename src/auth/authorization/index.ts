import { ENUM } from '@/lib/prisma';
import { MongoAbility, AbilityBuilder, createMongoAbility } from '@/lib/casl';
import {
  ClientSubject,
  ContractSubject,
  FeeSubject,
  LawyerSubject,
  RemunerationSubject,
  RevenueSubject,
} from './subjects';

type GenericAbility = [
  'manage' | 'create' | 'read' | 'update' | 'delete',
  'all',
];
type AppAbility = MongoAbility<
  | GenericAbility
  | ClientSubject
  | ContractSubject
  | FeeSubject
  | LawyerSubject
  | RemunerationSubject
  | RevenueSubject
>;

type UserPermissions = (
  userId: string,
  builder: AbilityBuilder<AppAbility>
) => void;

const permissions: Record<ENUM.Role, UserPermissions> = {
  ADMIN(_, { can }) {
    can('manage', 'all');
  },
  USER(userId, { can }) {
    can('read', 'Client');
    can('read', 'Lawyer', { id: userId });
    can('read', 'Remuneration', { lawyerId: userId });
  },
};

interface User {
  id: string;
  role: ENUM.Role;
}

export function defineAbilityForUser() {
  const user: User = { id: '1234', role: 'USER' }; // TODO: get user from session
  const builder = new AbilityBuilder<AppAbility>(createMongoAbility);
  permissions[user.role](user.id, builder);

  return builder.build();
}
