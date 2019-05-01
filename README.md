# gridsome-plugin-mdvue

> mdvue plugin for gridsome

### Quick Overview
`mdvue` allows markdown files to be written to include vue components and style blocks and be rendered as vue single file vue components

### Install
```yarn add gridsome-plugin-mdvue```

### Useage

**1.** Add `gridsome-plugin-vue` in your `gridsome.config` file

```javascript
module.exports = {
    plugins: [
        {
            use: 'gridsome-plugin-mdvue'
        }
    ]
}
```

**2.** Create your markdown components as `.mdvue` or `.mdv` files
```markdown
import HelloWorld from '@/components/HelloWorld'

# Hello World

<HelloWorld/>

---

Welcome to my gridsome site :)

<style>
    h1 {
        color: cornflowerblue;
    }
</style>
```

**3.** Use the markdown component like any other vue component
```javascript
<template>
    <my-mdvue-hello/>
<template>

<script>
    import MyMdvueHello from '@/componets/my-mdvue-hello.mdvue';
    
    export default {
        components: {
            MyMdvueHello,
        }
    }
</script>
```
