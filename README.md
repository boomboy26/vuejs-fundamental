# vuejs-fundamental

<img  src="https://vuejs.org/images/logo.svg" width="50" />

## Project setup

```
npm install
npm run serve
npm run build
npm run lint
```

#### [CDN VUE](vue_cdn)

##### Pass Data and props

<img  src="https://stopbyte.com/uploads/default/original/1X/50272ddef244584f7bb0f28c65bf7d29c725f4b1.png" width="300" />

Parent to child use props

```javascript
<ChildComponent v-bind:childProp='data' />
```

Child to Parent use emit

```javascript
this.$emit('customerEvent', data);
```

Call child function use $ref

```
<Child ref="refName" />

this.$ref.refName.methodName()
```
