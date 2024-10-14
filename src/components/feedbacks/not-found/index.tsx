import * as React from 'react';
import { Feedback, Illustration } from '@/components';
import { DEFAULT_NOT_FOUND_FEEDBACK } from '@/constants';

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
    <Illustration.Root>
      <Illustration.Content
        src="/illustrations/not-found.svg"
        alt="Not found illustration"
      />
      <Illustration.Attribution
        label="Online illustrations by Storyset"
        href="https://storyset.com/online"
      />
    </Illustration.Root>
  </Feedback.Root>
);
