import * as React from 'react';
import { Feedback, Illustration } from '@/components';
import { DEFAULT_PAGE_CONSTRUCTION_FEEDBACK } from '@/constants';

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
    <Illustration.Root>
      <Illustration.Content
        src="/illustrations/under_construction.svg"
        alt="Under construction illustration"
      />
      <Illustration.Attribution
        label="Technology illustrations by Storyset"
        href="https://storyset.com/technology"
      />
    </Illustration.Root>
  </Feedback.Root>
);
