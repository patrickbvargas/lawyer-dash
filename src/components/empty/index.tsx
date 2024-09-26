import * as React from 'react';
import { cn } from '@/utils';

const DEFAULT_EMPTY_LIST_TITLE = 'Nenhum registro encontrado.';

//  TODO: include a empty illustration
interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}
export const Empty = ({
  title = DEFAULT_EMPTY_LIST_TITLE,
  ...props
}: EmptyProps) => (
  <div className="flex flex-col items-center gap-2" {...props}>
    <h2
      className={cn(
        'text-base text-center',
        'text-gray-600',
        'dark:text-neutral-300',
      )}
    >
      {title}
    </h2>
    <span>[insert empty illustration here]</span>
  </div>
);
