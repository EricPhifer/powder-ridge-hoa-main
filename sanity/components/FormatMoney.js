/* eslint-disable */
import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

const formatMoney = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format;

export default function FormatMoney({ type, value, inputComponent, onChange }) {
  return (
    <div>
      <h2>
        {type.title} - {value ? formatMoney(value / 100) : null}
      </h2>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
        ref={inputComponent}
      />
    </div>
  );
}

FormatMoney.displayName = 'FormatMoney';

FormatMoney.focus = function () {
  this._inputElement.focus();
};
