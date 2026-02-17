import { CustomPriceLine } from '../../model/custom-price-line';
import { ISeries } from '../../model/iseries';
import { SeriesType } from '../../model/series-options';

import { SeriesHorizontalLinePaneView } from './series-horizontal-line-pane-view';

export class CustomPriceLinePaneView extends SeriesHorizontalLinePaneView {
	private readonly _priceLine: CustomPriceLine;

	public constructor(series: ISeries<SeriesType>, priceLine: CustomPriceLine) {
		super(series);
		this._priceLine = priceLine;
	}

	protected _updateImpl(): void {
		const data = this._lineRendererData;
		data.visible = false;

		const lineOptions = this._priceLine.options();

		if (!this._series.visible() || !lineOptions.lineVisible) {
			return;
		}

		const y = this._priceLine.yCoord();
		if (y === null) {
			return;
		}

		let x;

		if (lineOptions.index !== undefined) {
			x = this._model.timeScale().indexToCoordinate(lineOptions.index);
		}

		data.visible = true;
		data.y = y;
		data.x = x;
		data.color = lineOptions.color;
		data.lineWidth = lineOptions.lineWidth;
		data.lineStyle = lineOptions.lineStyle;
		data.externalId = this._priceLine.options().id;
	}
}
