import { SeriesCloudAreaPaneView } from './cloud-area-pane-view';
import { IUpdatablePaneView } from '../../views/pane/iupdatable-pane-view';

import { IChartModelBase } from '../chart-model';
import { ISeries } from '../iseries';
import { CloudAreaStyleOptions } from '../series-options';
import { SeriesDefinition, SeriesDefinitionInternal } from './series-def';

export const cloudAreaStyleDefaults: CloudAreaStyleOptions = {
  positiveColor: 'rgba( 76, 175, 80, 0.1)',
  negativeColor: 'rgba( 255, 82, 82, 0.1)',
  higherLineColor: '#4CAF50',
  higherLineStyle: 0,
  higherLineWidth: 3,
  higherLineType: 0,
  lowerLineColor: '#FF5252',
  lowerLineStyle: 0,
  lowerLineWidth: 3,
  lowerLineType: 0,
  crosshairMarkerVisible: true,
  crosshairMarkerRadius: 4,
  crosshairMarkerBorderColor: '',
  crosshairMarkerBackgroundColor: '',
};

const createPaneView = (series: ISeries<'CloudArea'>, model: IChartModelBase): IUpdatablePaneView => new SeriesCloudAreaPaneView(series, model);

export const createSeries = (): SeriesDefinition<'CloudArea'> => {
  const definition: SeriesDefinitionInternal<'CloudArea'> = {
    type: 'CloudArea',
    isBuiltIn: true as const,
    defaultOptions: cloudAreaStyleDefaults,
    /**
     * @internal
     */
    createPaneView: createPaneView,
  };
  return definition as SeriesDefinition<'CloudArea'>;
};
export const cloudAreaSeries: SeriesDefinition<'CloudArea'> = createSeries();
