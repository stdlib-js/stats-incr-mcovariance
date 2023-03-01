<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrmcovariance

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a moving [unbiased sample covariance][covariance] incrementally.

<section class="intro">

For unknown population means, the [unbiased sample covariance][covariance] for a window `n` of size `W` is defined as

<!-- <equation class="equation" label="eq:unbiased_sample_covariance_unknown_means" align="center" raw="\operatorname{cov_n} = \frac{1}{n-1} \sum_{i=j}^{j+W-1} (x_i - \bar{x}_n)(y_i - \bar{y}_n)" alt="Equation for the unbiased sample covariance for unknown population means."> -->

<div class="equation" align="center" data-raw-text="\operatorname{cov_n} = \frac{1}{n-1} \sum_{i=j}^{j+W-1} (x_i - \bar{x}_n)(y_i - \bar{y}_n)" data-equation="eq:unbiased_sample_covariance_unknown_means">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/mcovariance/docs/img/equation_unbiased_sample_covariance_unknown_means.svg" alt="Equation for the unbiased sample covariance for unknown population means.">
    <br>
</div>

<!-- </equation> -->

where `j` specifies the index of the value at which the window begins. For example, for a trailing (i.e., non-centered) window using zero-based indexing and `j` greater than or equal to `W`, `j` is the `n-W`th value with `n` being the number of values thus analyzed.

For known population means, the [unbiased sample covariance][covariance] for a window `n` of size `W` is defined as

<!-- <equation class="equation" label="eq:unbiased_sample_covariance_known_means" align="center" raw="\operatorname{cov_n} = \frac{1}{n} \sum_{i=j}^{j+W-1} (x_i - \mu_x)(y_i - \mu_y)" alt="Equation for the unbiased sample covariance for known population means."> -->

<div class="equation" align="center" data-raw-text="\operatorname{cov_n} = \frac{1}{n} \sum_{i=j}^{j+W-1} (x_i - \mu_x)(y_i - \mu_y)" data-equation="eq:unbiased_sample_covariance_known_means">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@27e2a43c70db648bb5bbc3fd0cdee050c25adc0b/lib/node_modules/@stdlib/stats/incr/mcovariance/docs/img/equation_unbiased_sample_covariance_known_means.svg" alt="Equation for the unbiased sample covariance for known population means.">
    <br>
</div>

<!-- </equation> --> 

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
incrmcovariance = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mcovariance@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var incrmcovariance = require( 'path/to/vendor/umd/stats-incr-mcovariance/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mcovariance@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.incrmcovariance;
})();
</script>
```

#### incrmcovariance( window\[, mx, my] )

Returns an accumulator `function` which incrementally computes a moving [unbiased sample covariance][covariance]. The `window` parameter defines the number of values over which to compute the moving [unbiased sample covariance][covariance].

```javascript
var accumulator = incrmcovariance( 3 );
```

If means are already known, provide `mx` and `my` arguments.

```javascript
var accumulator = incrmcovariance( 3, 5.0, -3.14 );
```

#### accumulator( \[x, y] )

If provided input values `x` and `y`, the accumulator function returns an updated [unbiased sample covariance][covariance]. If not provided input values `x` and `y`, the accumulator function returns the current [unbiased sample covariance][covariance].

```javascript
var accumulator = incrmcovariance( 3 );

var v = accumulator();
// returns null

// Fill the window...
v = accumulator( 2.0, 1.0 ); // [(2.0, 1.0)]
// returns 0.0

v = accumulator( -5.0, 3.14 ); // [(2.0, 1.0), (-5.0, 3.14)]
// returns ~-7.49

v = accumulator( 3.0, -1.0 ); // [(2.0, 1.0), (-5.0, 3.14), (3.0, -1.0)]
// returns -8.35

// Window begins sliding...
v = accumulator( 5.0, -9.5 ); // [(-5.0, 3.14), (3.0, -1.0), (5.0, -9.5)]
// returns -29.42

v = accumulator( -5.0, 1.5 ); // [(3.0, -1.0), (5.0, -9.5), (-5.0, 1.5)]
// returns -24.5

v = accumulator();
// returns -24.5
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` (x,y) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mcovariance@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var accumulator;
var x;
var y;
var i;

// Initialize an accumulator:
accumulator = incrmcovariance( 5 );

// For each simulated datum, update the moving unbiased sample covariance...
for ( i = 0; i < 100; i++ ) {
    x = randu() * 100.0;
    y = randu() * 100.0;
    accumulator( x, y );
}
console.log( accumulator() );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-incr/covariance`][@stdlib/stats/incr/covariance]</span><span class="delimiter">: </span><span class="description">compute an unbiased sample covariance incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mpcorr`][@stdlib/stats/incr/mpcorr]</span><span class="delimiter">: </span><span class="description">compute a moving sample Pearson product-moment correlation coefficient incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mvariance`][@stdlib/stats/incr/mvariance]</span><span class="delimiter">: </span><span class="description">compute a moving unbiased sample variance incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-mcovariance.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-mcovariance

[test-image]: https://github.com/stdlib-js/stats-incr-mcovariance/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-incr-mcovariance/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-mcovariance/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-mcovariance?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-mcovariance.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-mcovariance/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-mcovariance/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-incr-mcovariance/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-incr-mcovariance/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-incr-mcovariance/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-mcovariance/main/LICENSE

[covariance]: https://en.wikipedia.org/wiki/Covariance

<!-- <related-links> -->

[@stdlib/stats/incr/covariance]: https://github.com/stdlib-js/stats-incr-covariance/tree/umd

[@stdlib/stats/incr/mpcorr]: https://github.com/stdlib-js/stats-incr-mpcorr/tree/umd

[@stdlib/stats/incr/mvariance]: https://github.com/stdlib-js/stats-incr-mvariance/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
