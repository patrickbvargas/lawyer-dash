import * as React from 'react';
import { Feedback } from '@/components';
import { DEFAULT_LIST_EMPTY_FEEDBACK } from '@/constants';

// TODO: replace illustration
interface ListEmptyFeedbackProps
  extends React.ComponentProps<typeof Feedback.Root> {
  title?: string;
}
export const ListEmptyFeedback = ({
  title = DEFAULT_LIST_EMPTY_FEEDBACK,
  ...props
}: ListEmptyFeedbackProps) => (
  <Feedback.Root {...props}>
    <Feedback.Title title={title} />
    <Feedback.Illustration
      src="/illustrations/empty.svg"
      alt="Empty illustration"
    />
  </Feedback.Root>
);
