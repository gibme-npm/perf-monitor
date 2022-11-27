// Copyright (c) 2016-2022, Brandon Lehmann <brandonlehmann@gmail.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

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
        const result = this.measure(decimals);

        this.mark();

        return result;
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

export { PerformanceMonitor };
