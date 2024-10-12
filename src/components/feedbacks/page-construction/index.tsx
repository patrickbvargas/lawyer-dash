import * as React from 'react';
import { Feedback } from '@/components';
import { DEFAULT_PAGE_CONSTRUCTION_FEEDBACK } from '@/constants';

// TODO: replace illustration
interface PageConstructionFeedbackProps
  extends React.ComponentProps<typeof Feedback.Root> {
  title?: string;
}
export const PageConstructionFeedback = ({
  title = DEFAULT_PAGE_CONSTRUCTION_FEEDBACK,
  ...props
}: PageConstructionFeedbackProps) => (
  <Feedback.Root {...props}>
    <Feedback.Title title={title} />
    <Feedback.Illustration
      src="/illustrations/under_construction.svg"
      alt="Under construction illustration"
    />
  </Feedback.Root>
);
