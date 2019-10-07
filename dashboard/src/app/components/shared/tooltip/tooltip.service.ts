import { InjectionToken } from '@angular/core';
import { Tooltip } from "./tooltip.interface";
export const tooltipService = new InjectionToken<Tooltip>('TooltipOptions');

