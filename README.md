# More DApp Component

> Vue Component for More DApp

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# build for library
yarn build_lib
```
## Usage

``` js
import MoreDAppComponent from 'more-dapp-component'
import 'more-dapp-component/lib/index.css'

// your code
```

## Example
``` vue
<template>
  <page-container>
    <page-title>Page title</page-title>
    <section-container>
      section container
      <section-title>
        title
      </section-title>
      <more-input withClear v-model="message"/>
      <more-button @press="showMessage">show message</more-button>
      <tip types="with-dot container">
        this is tip
        <tip types="highlight">highlight tip</tip>
      </tip>
      <form action="">
        <form-item label="Your company">
          {{ picked }}
        </form-item>
      </form>
      <radio-group name="company" v-model="picked">
        <radio value="more">More</radio>
        <radio value="alibaba">Alibaba</radio>
        <radio value="tencent">Tencent</radio>
      </radio-group>
    </section-container>
  </page-container>
</template>

<script>
  export default {
    name: "app",
    data() {
      return {
        message: null,
        picked: 'more'
      }
    },
    methods: {
      showMessage() {
        const { message } = this
        if (message) {
          this.$message(message)
        } else {
          this.$message('message is required')
        }
      }
    }
  }
</script>
```

