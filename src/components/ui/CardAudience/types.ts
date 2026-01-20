export interface CardAudienceProps {
  readonly variant: "positive" | "negative";
  readonly title: string;
  readonly items: readonly string[];
  readonly className?: string;
}
