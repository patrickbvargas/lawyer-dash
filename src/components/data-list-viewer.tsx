import * as React from 'react';
import { ScrollShadow, Pagination, Search } from '@/components';

interface DataListViewerProps extends React.HTMLAttributes<HTMLDivElement> {
  totalItems: number;
  itemsPerPage: number;
  searchPlaceholder: string;
}
interface DataListDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  totalItems: number;
  itemsPerPage: number;
}

const DataListViewer = ({
  totalItems,
  itemsPerPage,
  searchPlaceholder,
  ...props
}: DataListViewerProps) => {
  return (
    <div className='flex w-full flex-col space-y-unit-4' {...props}>
      <Search placeholder={searchPlaceholder} />
      {totalItems === 0 ? (
        <DataListEmpty />
      ) : (
        <DataListDisplay
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          {...props}
        />
      )}
    </div>
  );
};

const DataListDisplay = ({
  totalItems,
  itemsPerPage,
  children,
}: DataListDisplayProps) => {
  return (
    <div className='flex h-full flex-col justify-between gap-unit-sm overflow-hidden'>
      <ScrollShadow className='grid grid-cols-1 gap-unit-sm md:grid-cols-2 lg:grid-cols-3'>
        {children}
      </ScrollShadow>
      <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} />
    </div>
  );
};

const DataListEmpty = () => {
  return (
    <p className='py-unit-lg text-center text-foreground-500'>
      Nenhum registro encontrado
    </p>
  );
};

export { DataListViewer };
