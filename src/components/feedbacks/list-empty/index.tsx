import * as React from 'react';
import { Feedback, Illustration } from '@/components';
import { DEFAULT_LIST_EMPTY_FEEDBACK } from '@/constants';

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
    <Illustration.Root>
      <Illustration.Content
        src="/illustrations/empty.svg"
        alt="Empty illustration"
      />
      <Illustration.Attribution
        label="Multi-purpose illustrations by Storyset"
        href="https://storyset.com/multi-purpose"
      />
    </Illustration.Root>
  </Feedback.Root>
);
