// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Hanunoo`
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
    [0x001720, 0x001736]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Hanunoo}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Hanunoo}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Hano}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Hano}"
);
testPropertyEscapes(
  /^\p{scx=Hanunoo}+$/u,
  matchSymbols,
  "\\p{scx=Hanunoo}"
);
testPropertyEscapes(
  /^\p{scx=Hano}+$/u,
  matchSymbols,
  "\\p{scx=Hano}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00171F],
    [0x001737, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Hanunoo}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Hanunoo}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Hano}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Hano}"
);
testPropertyEscapes(
  /^\P{scx=Hanunoo}+$/u,
  nonMatchSymbols,
  "\\P{scx=Hanunoo}"
);
testPropertyEscapes(
  /^\P{scx=Hano}+$/u,
  nonMatchSymbols,
  "\\P{scx=Hano}"
);

reportCompare(0, 0);
