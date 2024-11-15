import { Gauge, GaugeProps } from '@/components/reused/gauge/Gauge';

import { numberFormat } from './numberFormat';

interface Props extends Pick<GaugeProps, 'className' | 'height' | 'width'> {
	averageMark: number;
}

const formatAverageMark = (mark: number) => {
	return numberFormat.format(mark);
};

const gaugeColorFor = (mark: number): GaugeProps['color'] => {
	if (mark < 3) return 'error';
	if (mark < 4) return 'warning';
	if (mark < 5) return 'success';
	return 'info';
};

export const SubjectRatingGauge = ({
	className,
	height,
	width,
	averageMark
}: Props) => (
	<Gauge
		className={className}
		height={height}
		width={width}
		color={gaugeColorFor(averageMark)}
		valueMin={0}
		valueMax={5}
		value={averageMark}
		text={formatAverageMark(averageMark)}
	/>
);
