import { ClipboardList } from "lucide-react";

export interface AppCard {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  // badge: string;
  icon: React.ElementType;
  preview: React.ReactNode;
}

export interface PlanItem {
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  buttonText: string;
  description: string;
  isPopular?: boolean;
}

export interface CardPriceProps {
  title?: string;
  price?: string | number;
  period?: string;
  billedText?: string;
  features?: string[];
  buttonText?: string;
  description?: string;
  isPopular?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
  onSubscribe?: () => void;
}

export interface SubMenuItem {
  title: string;
  href: string;
  desc?: string;
}

export interface MenuSection {
  title: string;
  items: SubMenuItem[];
}
export interface Step {
  id: number;
  title: string;
  badge: string;
  headline: string;
  desc: string;
  icon: typeof ClipboardList;
  deliverables: string[];

}