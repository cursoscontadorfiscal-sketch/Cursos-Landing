export interface FaqItem {
  readonly question: string;
  readonly answerPart1: string;
  readonly answerPart2?: string | null;
}

export interface FaqSectionProps {
  readonly title: string;
  readonly description: string;
  readonly items: readonly FaqItem[];
  readonly className?: string;
}
