// Copyright (c) 2016-2022 Brandon Lehmann
//
// Please see the included LICENSE file for more information.

import { performance } from 'perf_hooks';

export default class PerformanceMonitor {
    private _startTime = performance.now();

    /**
     * Sets the mark
     */
    public mark () {
        this._startTime = performance.now();
    }

    /**
     * Returns the amount of time passed in ms since the last mark or the construction of the instance
     *
     * @param decimals
     */
    public measure (decimals = 8): number {
        return this.format(performance.now() - this._startTime, decimals);
    }

    /**
     * Returns the amount of time passed in ms since the last mark or the construction of the instance
     * and then advanced the mark to now
     *
     * @param decimals
     */
    public measureAndMark (decimals = 8): number {
        const now = performance.now();

        this.mark();

        return this.format(now - performance.now(), decimals);
    }

    /**
     * Truncates the number to the specified decimal places
     *
     * @param ms
     * @param decimals
     * @private
     */
    private format (ms: number, decimals = 8): number {
        return parseFloat(ms.toFixed(decimals));
    }
}
