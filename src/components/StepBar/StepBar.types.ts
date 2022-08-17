export type Step = {
  id: string;
  title: string;
};

export type StepBarProps = {
  currentStepId: Step['id'];
  steps: Step[];
  onChangeStep?: (step: Step) => void;
  className?: string;
};
