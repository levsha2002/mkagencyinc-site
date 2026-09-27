import type { BusinessPage } from './types';
import { CONTRACTORS } from './contractors';
import { LANDSCAPING } from './landscaping';
import { HANDYMAN } from './handyman';
import { WINDOW_CLEANING } from './window-cleaning';
import { PAINTING } from './painting';
import { PRESSURE_WASHING } from './pressure-washing';
import { WORK_TRUCK } from './work-truck';
import { BUILDERS_RISK } from './builders-risk';

export type { BusinessPage, BusinessPageCopy } from './types';

/** Business-type service pages, in display order. */
export const BUSINESS_PAGES: BusinessPage[] = [
  CONTRACTORS,
  LANDSCAPING,
  HANDYMAN,
  WINDOW_CLEANING,
  PAINTING,
  PRESSURE_WASHING,
  WORK_TRUCK,
  BUILDERS_RISK,
];

export function getBusinessPage(path: string): BusinessPage | undefined {
  return BUSINESS_PAGES.find((p) => p.path === path);
}
