/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import PropTypes from 'prop-types'
import { lineCurvePropType, blendModePropType, motionPropTypes, defsPropTypes } from '@nivo/core'
import { ordinalColorsPropType } from '@nivo/colors'
import { axisPropType } from '@nivo/axes'
import { LegendPropShape } from '@nivo/legends'
import PointTooltip from './PointTooltip'
import SliceTooltip from './SliceTooltip'
import { OrdinalColorScaleConfig } from '@nivo/colors'
import { ScaleSpec } from '@nivo/scales'

const commonPropTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            data: PropTypes.arrayOf(
                PropTypes.shape({
                    x: PropTypes.oneOfType([
                        PropTypes.number,
                        PropTypes.string,
                        PropTypes.instanceOf(Date),
                    ]),
                    y: PropTypes.oneOfType([
                        PropTypes.number,
                        PropTypes.string,
                        PropTypes.instanceOf(Date),
                    ]),
                })
            ).isRequired,
        })
    ).isRequired,

    xScale: PropTypes.object.isRequired,
    xFormat: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    yScale: PropTypes.object.isRequired,
    yFormat: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

    layers: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.oneOf([
                'grid',
                'markers',
                'axes',
                'areas',
                'crosshair',
                'lines',
                'slices',
                'points',
                'mesh',
                'legends',
            ]),
            PropTypes.func,
        ])
    ).isRequired,

    curve: lineCurvePropType,

    axisTop: axisPropType,
    axisRight: axisPropType,
    axisBottom: axisPropType,
    axisLeft: axisPropType,

    enableGridX: PropTypes.bool,
    enableGridY: PropTypes.bool,
    gridXValues: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)])
        ),
    ]),
    gridYValues: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)])
        ),
    ]),

    enablePoints: PropTypes.bool,
    pointSymbol: PropTypes.func,
    pointSize: PropTypes.number,
    pointColor: PropTypes.any,
    pointBorderWidth: PropTypes.number,
    pointBorderColor: PropTypes.any,
    enablePointLabel: PropTypes.bool,
    pointLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

    markers: PropTypes.arrayOf(
        PropTypes.shape({
            axis: PropTypes.oneOf(['x', 'y']),
            value: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
                PropTypes.instanceOf(Date),
            ]),
            style: PropTypes.object,
        })
    ),

    colors: ordinalColorsPropType,

    enableArea: PropTypes.bool,
    areaOpacity: PropTypes.number,
    areaBlendMode: blendModePropType,
    areaBaselineValue: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.instanceOf(Date),
    ]),
    lineWidth: PropTypes.number,

    legends: PropTypes.arrayOf(PropTypes.shape(LegendPropShape)),

    isInteractive: PropTypes.bool,
    debugMesh: PropTypes.bool,

    tooltip: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

    enableSlices: PropTypes.oneOf(['x', 'y', false]),
    debugSlices: PropTypes.bool,
    sliceTooltip: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

    enableCrosshair: PropTypes.bool,
    crosshairType: PropTypes.string,
}

export const LinePropTypes = {
    ...commonPropTypes,
    enablePointLabel: PropTypes.bool,
    role: PropTypes.string,
    useMesh: PropTypes.bool,
    enableTouchCrosshair: PropTypes.bool,
    ...motionPropTypes,
    ...defsPropTypes,
}

export const LineCanvasPropTypes = {
    pixelRatio: PropTypes.number,
    ...commonPropTypes,
}

const commonDefaultProps = {
    curve: 'linear',

    xScale: {
        type: 'point',
    } as ScaleSpec,
    yScale: {
        type: 'linear',
        min: 0,
        max: 'auto',
    } as ScaleSpec,

    layers: [
        'grid',
        'markers',
        'axes',
        'areas',
        'crosshair',
        'lines',
        'points',
        'slices',
        'mesh',
        'legends',
    ],
    axisBottom: {},
    axisLeft: {},
    enableGridX: true,
    enableGridY: true,

    enablePoints: true,
    pointSize: 6,
    pointColor: { from: 'color' },
    pointBorderWidth: 0,
    pointBorderColor: { theme: 'background' },
    enablePointLabel: false,
    pointLabel: 'yFormatted',

    colors: { scheme: 'nivo' } as OrdinalColorScaleConfig,
    enableArea: false,
    areaBaselineValue: 0,
    areaOpacity: 0.2,
    areaBlendMode: 'normal',
    lineWidth: 2,

    legends: [],

    isInteractive: true,
    tooltip: PointTooltip,
    enableSlices: false,
    debugSlices: false,
    sliceTooltip: SliceTooltip,
    debugMesh: false,
    enableCrosshair: true,
    crosshairType: 'bottom-left',
}

export const LineDefaultProps = {
    ...commonDefaultProps,
    enablePointLabel: false,
    useMesh: false,
    enableTouchCrosshair: false,
    animate: true,
    motionConfig: 'gentle',
    defs: [],
    fill: [],
    role: 'img',
}

export const LineCanvasDefaultProps = {
    ...commonDefaultProps,
    pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1,
}
