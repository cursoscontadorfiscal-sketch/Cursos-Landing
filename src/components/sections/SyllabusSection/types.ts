import type { RichTextField } from "@prismicio/client";

export interface SyllabusModuleItem {
  readonly moduleTitle: string;
  readonly moduleContent: readonly string[];
}

export interface SyllabusSectionProps {
  readonly title: RichTextField;
  readonly description?: string | null;
  readonly modules: readonly SyllabusModuleItem[];
  readonly className?: string;
}
