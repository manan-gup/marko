import { t as _t } from "marko/src/runtime/vdom/index.js";

const _marko_componentType = "packages/translator-default/test/fixtures/import-tag-conflict/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import { asset as test } from "./test1/asset";
import { asset } from "./test2/asset";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry";

_marko_registerComponent(_marko_componentType, () => _marko_template);

const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);