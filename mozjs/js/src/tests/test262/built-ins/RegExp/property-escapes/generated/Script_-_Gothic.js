// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Gothic`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.1.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010330, 0x01034A]
  ]
});
testPropertyEscapes(
  /^\p{Script=Gothic}+$/u,
  matchSymbols,
  "\\p{Script=Gothic}"
);
testPropertyEscapes(
  /^\p{Script=Goth}+$/u,
  matchSymbols,
  "\\p{Script=Goth}"
);
testPropertyEscapes(
  /^\p{sc=Gothic}+$/u,
  matchSymbols,
  "\\p{sc=Gothic}"
);
testPropertyEscapes(
  /^\p{sc=Goth}+$/u,
  matchSymbols,
  "\\p{sc=Goth}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01032F],
    [0x01034B, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Gothic}+$/u,
  nonMatchSymbols,
  "\\P{Script=Gothic}"
);
testPropertyEscapes(
  /^\P{Script=Goth}+$/u,
  nonMatchSymbols,
  "\\P{Script=Goth}"
);
testPropertyEscapes(
  /^\P{sc=Gothic}+$/u,
  nonMatchSymbols,
  "\\P{sc=Gothic}"
);
testPropertyEscapes(
  /^\P{sc=Goth}+$/u,
  nonMatchSymbols,
  "\\P{sc=Goth}"
);

reportCompare(0, 0);
