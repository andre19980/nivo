/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { forwardRef, ForwardedRef } from 'react'
import { ResponsiveWrapper } from '@nivo/core'
import LineCanvas from './LineCanvas'

import { Datum, LineCanvasProps } from './types'

const ResponsiveLineCanvas = <RawDatum extends Datum>(
    props: Omit<LineCanvasProps<RawDatum>, 'width' | 'height'>,
    ref: ForwardedRef<HTMLCanvasElement>
) => (
    <ResponsiveWrapper>
        {({ width, height }) => (
            <LineCanvas
                width={width}
                height={height}
                {...(props as Omit<LineCanvasProps<Datum>, 'height' | 'width'>)}
                ref={ref}
            />
        )}
    </ResponsiveWrapper>
)

export default forwardRef(ResponsiveLineCanvas)
