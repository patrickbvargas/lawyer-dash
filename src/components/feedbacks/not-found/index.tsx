import * as React from 'react';
import { Feedback } from '@/components';
import { DEFAULT_NOT_FOUND_FEEDBACK } from '@/constants';

// TODO: replace illustration
interface NotFoundFeedbackProps
  extends React.ComponentProps<typeof Feedback.Root> {
  title?: string;
}
export const NotFoundFeedback = ({
  title = DEFAULT_NOT_FOUND_FEEDBACK,
  ...props
}: NotFoundFeedbackProps) => (
  <Feedback.Root {...props}>
    <Feedback.Title title={title} />
    <Feedback.Illustration
      src="/illustrations/not-found.svg"
      alt="Not found illustration"
    />
  </Feedback.Root>
);
