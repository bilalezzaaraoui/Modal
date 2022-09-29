# Modalib

Modalib is a package that allows to create a basic date input quickly by giving it a specific name

# Install

Install the package `npm i modalib`

## Usage

You need to have a module with the router configuration. For example:

`form.js`

```js
import React from 'react';
import { DateInput } from 'modalib';

const form = (props) => {
    return <DateInput name={props.name}>
}

```

## Authors

Bilal Ezzaaraoui
