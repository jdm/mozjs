// |reftest| skip async -- class-methods-private is not supported
// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-rest-skip-non-enumerable.case
// - src/dstr-binding/default/cls-expr-async-private-gen-meth.template
/*---
description: Rest object doesn't contain non-enumerable properties (private class expression method)
esid: sec-class-definitions-runtime-semantics-evaluation
features: [object-rest, class, class-methods-private, async-iteration]
flags: [generated, async]
includes: [propertyHelper.js]
info: |
    ClassExpression : class BindingIdentifieropt ClassTail

    1. If BindingIdentifieropt is not present, let className be undefined.
    2. Else, let className be StringValue of BindingIdentifier.
    3. Let value be the result of ClassDefinitionEvaluation of ClassTail
       with argument className.
    [...]

    14.5.14 Runtime Semantics: ClassDefinitionEvaluation

    21. For each ClassElement m in order from methods
        a. If IsStatic of m is false, then
           i. Let status be the result of performing
              PropertyDefinitionEvaluation for m with arguments proto and
              false.
        [...]

    Runtime Semantics: PropertyDefinitionEvaluation

    AsyncGeneratorMethod :
        async [no LineTerminator here] * PropertyName ( UniqueFormalParameters )
            { AsyncGeneratorBody }

    1. Let propKey be the result of evaluating PropertyName.
    2. ReturnIfAbrupt(propKey).
    3. If the function code for this AsyncGeneratorMethod is strict mode code, let strict be true.
       Otherwise let strict be false.
    4. Let scope be the running execution context's LexicalEnvironment.
    5. Let closure be ! AsyncGeneratorFunctionCreate(Method, UniqueFormalParameters,
       AsyncGeneratorBody, scope, strict).
    [...]

---*/
var o = {a: 3, b: 4};
Object.defineProperty(o, "x", { value: 4, enumerable: false });


var callCount = 0;
var C = class {
  async * #method({...rest}) {
    assert.sameValue(rest.x, undefined);

    verifyProperty(rest, "a", {
      enumerable: true,
      writable: true,
      configurable: true,
      value: 3
    });

    verifyProperty(rest, "b", {
      enumerable: true,
      writable: true,
      configurable: true,
      value: 4
    });
    callCount = callCount + 1;
  }

  get method() {
    return this.#method;
  }
};

new C().method(o).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);
