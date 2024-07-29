import { defineAbilityForUser } from '@/auth/authorization';
import {
  getClients,
  getLawyers,
  getContracts,
  getRevenues,
  getFees,
  getRemunerations,
} from '@/services';

export default async function Home() {
  const data = await getContracts();
  const ability = defineAbilityForUser();

  const authData = data.filter((item) => ability.can('read', item));

  return (
    <main className="grid grid-cols-4 gap-4">
      {authData.map((item) => (
        // ! Client
        // <div className="bg-neutral-800 p-2" key={item.id}>
        //   <h1>{item.fullName}</h1>
        //   <hr className="border-violet-700" />
        //   <div className="flex gap-10 p-2">
        //     <p>{item.individual?.cpf || item.corporate?.cnpj}</p>
        //     <p>{item.mobilePhone}</p>
        //   </div>
        //   <hr className="border-violet-700" />
        //   <div className="flex gap-10 p-2">
        //     <p className="font-bold">{item._count.contracts}</p>
        //     <h2>{item.individual ? 'PF' : 'PJ'}</h2>
        //   </div>
        // </div>
        // ! Lawyer
        // <div className="bg-neutral-800 p-2" key={item.id}>
        //   <h1>{item.fullName}</h1>
        //   <hr className="border-violet-700" />
        //   <div className="flex gap-10 p-2">
        //     <p>{item.oabNumber}</p>
        //     <p>{item.remunerationPercent}</p>
        //   </div>
        //   <hr className="border-violet-700" />
        //   <div className="flex gap-10 p-2">
        //     <p className="font-bold">{item._count.contracts}</p>
        //     <h2>{item.role}</h2>
        //   </div>
        // </div>
        // ! Contract
        <div className="bg-neutral-800 p-2" key={item.id}>
          <h1>{item.identification}</h1>
          <hr className="border-violet-700" />
          <div className="flex gap-10 p-2">
            <p>{item.client.fullName}</p>
            <p>{item.lawyers[0].lawyer.fullName}</p>
          </div>
          <hr className="border-violet-700" />
          <div className="flex gap-10 p-2">
            <p className="font-bold">{item.feePercent}</p>
            <h2>{item.legalArea}</h2>
          </div>
        </div>
        // ! Revenue
        // <div className="bg-neutral-800 p-2" key={item.id}>
        //   <h1>{item.contract.identification}</h1>
        //   <hr className="border-violet-700" />
        //   <div className="flex gap-10 p-2">
        //     <p>{item.installmentsTotal}</p>
        //     <p>{item.installmentsPaid}</p>
        //   </div>
        //   <hr className="border-violet-700" />
        //   <div className="flex gap-10 p-2">
        //     <p className="font-bold">{item.totalValue}</p>
        //     <h2>{item.type}</h2>
        //   </div>
        // </div>
        // ! Fee
        // <div className="bg-neutral-800 p-2" key={item.id}>
        //   <h1>{item.revenue.contract.client.fullName}</h1>
        //   <hr className="border-violet-700" />
        //   <div className="flex gap-10 p-2">
        //     <p>{item.paymentDate.toDateString()}</p>
        //     <p>{item.installmentNumber}</p>
        //   </div>
        //   <hr className="border-violet-700" />
        //   <div className="flex gap-10 p-2">
        //     <p className="font-bold">{item.value}</p>
        //     <h2>{item.revenue.type}</h2>
        //   </div>
        // </div>
        // ! Remuneration
        // <div className="bg-neutral-800 p-2" key={item.id}>
        //   <h1>
        //     {item.contractLawyer.lawyer.fullName} -
        //     {item.contractLawyer.contract.identification}
        //   </h1>
        //   <hr className="border-violet-700" />
        //   <div className="flex gap-10 p-2">
        //     <p>{item.paymentDate.toDateString()}</p>
        //     <p>{item.remunerationPercent}</p>
        //   </div>
        //   <hr className="border-violet-700" />
        //   <div className="flex gap-10 p-2">
        //     <p className="font-bold">{item.value}</p>
        //     <h2>{item.contractLawyer.lawyerAssignment}</h2>
        //   </div>
        // </div>
      ))}
    </main>
  );

  // return <pre>{JSON.stringify(authData, null, 2)}</pre>;
}
