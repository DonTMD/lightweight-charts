import { SeriesBrokenAreaPaneView } from './broken-area-pane-view';
import { IUpdatablePaneView } from '../../views/pane/iupdatable-pane-view';

import { IChartModelBase } from '../chart-model';
import { ISeries } from '../iseries';
import { BrokenAreaStyleOptions } from '../series-options';
import { SeriesDefinition, SeriesDefinitionInternal } from './series-def';

export const brokenAreaStyleDefaults: BrokenAreaStyleOptions = {
  color: 'rgba( 41, 98, 255, 0.01)',
  strokeColor: '',
  strokeWidth: 0,
  infinite: false,
};

const createPaneView = (series: ISeries<'BrokenArea'>, model: IChartModelBase): IUpdatablePaneView => new SeriesBrokenAreaPaneView(series, model);

export const createSeries = (): SeriesDefinition<'BrokenArea'> => {
  const definition: SeriesDefinitionInternal<'BrokenArea'> = {
    type: 'BrokenArea',
    isBuiltIn: true as const,
    defaultOptions: brokenAreaStyleDefaults,
    /**
     * @internal
     */
    createPaneView: createPaneView,
  };
  return definition as SeriesDefinition<'BrokenArea'>;
};
export const brokenAreaSeries: SeriesDefinition<'BrokenArea'> = createSeries();
