import { defineAbilityForUser } from '@/auth/authorization';
import {
  getClients,
  getLawyers,
  getContracts,
  getRevenues,
  getFees,
  getRemunerations,
} from '@/services';
import { Card } from '@/components';
import { ENUM } from '@/constants/enum';

export default async function Home() {
  const data = await getClients();
  const ability = defineAbilityForUser();

  const authData = data.filter((item) => ability.can('read', item));

  return (
    <main className="grid grid-cols-3 gap-4">
      {authData.map((item) => (
        // ! Client
        <Card.Root key={item.id}>
          <Card.Header>
            <Card.Title>{item.fullName}</Card.Title>
          </Card.Header>
          <Card.Divider />
          <Card.Content>
            <Card.Field
              label={item.individual ? 'CPF' : 'CNPJ'}
              value={item.individual?.cpf || item.corporate?.cnpj}
            />
            <Card.Field label="Celular" value={item.mobilePhone} />
            <Card.Field
              label="Contratos"
              value={item._count.contracts}
              variant="highlight"
            />
            <Card.Badge label={item.individual ? 'PF' : 'PJ'} />
          </Card.Content>
        </Card.Root>
        // ! Lawyer
        // <Card.Root key={item.id}>
        //   <Card.Header>
        //     <Card.Title>{item.fullName}</Card.Title>
        //   </Card.Header>
        //   <Card.Divider />
        //   <Card.Content>
        //     <Card.Field label="OAB" value={item.oabNumber} />
        //     <Card.Field label="Remuneração" value={item.remunerationPercent} />
        //     <Card.Field
        //       label="Contratos"
        //       value={item._count.contracts}
        //       variant="highlight"
        //     />
        //     <Card.Badge label={item.role} />
        //   </Card.Content>
        // </Card.Root>
        // ! Contract
        // <Card.Root key={item.id}>
        //   <Card.Header>
        //     <Card.Title>{item.identification}</Card.Title>
        //   </Card.Header>
        //   <Card.Divider />
        //   <Card.Content>
        //     <Card.Field label="Cliente" value={item.client.fullName} />
        //     <Card.Field
        //       label="Advogado"
        //       value={
        //         // TODO: create function isResponsibleOrRecommended()
        //         item.lawyers.find(
        //           (l) =>
        //             l.lawyerAssignment === ENUM.LawyerAssignment.RESPONSIBLE ||
        //             l.lawyerAssignment === ENUM.LawyerAssignment.RECOMMENDED,
        //         )?.lawyer.fullName
        //       }
        //     />
        //     <Card.Field
        //       label="Honorários"
        //       value={item.feePercent}
        //       variant="highlight"
        //     />
        //     <Card.Badge label={item.legalArea} />
        //   </Card.Content>
        // </Card.Root>
        // ! Fee
        // <Card.Root key={item.id}>
        //   <Card.Header>
        //     <Card.Title>{item.revenue.contract.identification}</Card.Title>
        //   </Card.Header>
        //   <Card.Divider />
        //   <Card.Content>
        //     <Card.Field
        //       label="Cliente"
        //       value={item.revenue.contract.client.fullName}
        //     />
        //     <Card.Field label="Data" value={item.paymentDate.toDateString()} />
        //     <Card.Field label="Valor" value={item.value} variant="highlight" />
        //     <Card.Badge label={item.revenue.type} />
        //   </Card.Content>
        // </Card.Root>
        // ! Remuneration
        // <Card.Root key={item.id}>
        //   <Card.Header>
        //     <Card.Title>{item.contractLawyer.lawyer.fullName}</Card.Title>
        //   </Card.Header>
        //   <Card.Divider />
        //   <Card.Content>
        //     <Card.Field label="Data" value={item.paymentDate.toDateString()} />
        //     <Card.Field label="Percentual" value={item.remunerationPercent} />
        //     <Card.Field label="Valor" value={item.value} variant="highlight" />
        //     <Card.Badge label={item.contractLawyer.lawyerAssignment} />
        //   </Card.Content>
        // </Card.Root>
      ))}
    </main>
  );

  // return <pre>{JSON.stringify(authData, null, 2)}</pre>;
}
