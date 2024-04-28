## DirCraft

DirCraft provides you the ability to create new component or page folders with one CLI command. Its including story, test and mock props files (with configurable templates).

<hr>

https://github.com/SerhatPolat/dircraft-js/assets/74260464/1a759b4c-239e-40f9-a550-5bc630e3077d

<hr>

## Configuration

There is a `config.js` file to handle your components and pages folders path and also file extensions (to make DirCraft headless, for example you can create .vue files without manipulate create file codes)

```js
const config = {
  pages_path: "./pages/",
  components_path: "./components/",
  file_extensions: {
    page: ".tsx",
    component: ".tsx",
    story: ".stories.jsx",
    mockProps: ".mocks.ts",
    test: ".test.js",
  },
};

export default config;
```

Also you can update component and page templates from `craftComponent/componentTemplates.js` and `craftPage/pageTemplate.js`

<hr>

# Usage

```bash
node craftComponent <COMPONENT_NAME>

node craftPage <PAGE_NAME>
```
