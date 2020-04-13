/**
 * rxlite - A simple, lightweight Rx library.
 * https://github.com/mwc/rxlite
 *
 * MaoWenchao (mwc@foxmail.com)
 * Licensed under the MIT License.
 *
 * Version 0.0.1 beta - 4/2020
 */

export default (f: Function) => (g: Function) => f(g)