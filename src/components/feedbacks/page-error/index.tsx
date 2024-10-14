import * as React from 'react';
import { Feedback, Button, Illustration } from '@/components';
import { DEFAULT_PAGE_ERROR_FEEDBACK } from '@/constants';

interface PageErrorFeedbackProps
  extends React.ComponentProps<typeof Feedback.Root> {
  title?: string;
  reset: () => void;
}
export const PageErrorFeedback = ({
  title = DEFAULT_PAGE_ERROR_FEEDBACK,
  reset,
  ...props
}: PageErrorFeedbackProps) => (
  <Feedback.Root {...props}>
    <Feedback.Title title={title} />
    <Illustration.Root>
      <Illustration.Content
        src="/illustrations/error.svg"
        alt="Error illustration"
      />
      <Illustration.Attribution
        label="Celebration illustrations by Storyset"
        href="https://storyset.com/celebration"
      />
    </Illustration.Root>
    <Feedback.Controls>
      <Button onClick={() => reset()}>Tentar novamente</Button>
    </Feedback.Controls>
  </Feedback.Root>
);
