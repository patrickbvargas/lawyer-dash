import * as React from 'react';
import { Feedback, Button } from '@/components';
import { DEFAULT_PAGE_ERROR_FEEDBACK } from '@/constants';

// TODO: replace illustration
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
    <Feedback.Illustration
      src="/illustrations/error.svg"
      alt="Error illustration"
    />
    <Feedback.Controls>
      <Button onClick={() => reset()}>Tentar novamente</Button>
    </Feedback.Controls>
  </Feedback.Root>
);
