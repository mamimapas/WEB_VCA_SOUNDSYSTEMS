import { Volume2, Lightbulb, Monitor, Radio, Building2, Mic } from "lucide-react";
import type { ServicioIconName } from "@/data/servicios";

const ICON_MAP = {
  Volume2,
  Lightbulb,
  Monitor,
  Radio,
  Building2,
  Mic,
} as const;

interface Props {
  name: ServicioIconName;
  size?: number;
  className?: string;
}

export default function ServicioIcon({ name, size = 22, className }: Props) {
  const Icon = ICON_MAP[name];
  return <Icon size={size} className={className} aria-hidden="true" />;
}
