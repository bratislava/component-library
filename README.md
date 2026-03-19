# Component library

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app for local development.\
Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app to the `dist` folder, ready to be published or locally tested as a library.

## Local testing with Yalc

For local testing our library without the necessity to publish to npm, you can use a small local repository called `yalc`\
You can find complete documentation [here](https://github.com/wclr/yalc).

### `Instalation`

Using NPM:

```
npm i yalc -g
```

Using Yarn:

```
yarn global add yalc
```

### `Publishing built version to local repository`

First we need to publish our library in order to be able to deploy it:

```
npm run build
```

Then you can publish current built version of this library using:

```
yalc push --sig
```

It will copy all the files that should be published in remote NPM registry. We are using `--sig` flag, to ensure that the dependent project knows, that something has changed. Otherwise it will keep the last imported version in cache and not propagate current changes.

### `Import local library`

To import our published library into dependent project you can use:

```
yalc link @bratislava/component-library
```

Now you can use the imported library in your code as such:

```
import { Input, Button } from '@bratislava/component-library'
```

### `Remove imported library`

To remove the imported library you can use:

```
yalc remove @bratislava/component-library
```

Alternatively to remove all imported libraries use:

```
yalc remove --all
```

## `TS config`

Short explanation of tsconfig usage in this library.

### `tsconfig-build.json`

We want to exclude `/src` from building, because its use is only for local dev. Because of that we use extension of our base `tsconfig.json` to exclude it for build. This extended config needs to be referenced later in build script

```
tsc --p ./tsconfig-build.json && vite build
```

## Using `ComponentLibraryProvider` (Next.js `Link`)

Components such as **`Button`** with an `href` read a link implementation from context. Wrap the app with **`ComponentLibraryProvider`** and pass a suitable Link component into the **`linkComponent`** property.

### Example: **bratislava.sk**

```tsx
import { ComponentLibraryProvider } from '@bratislava/component-library'
import MLink from '@/src/components/common/MLink/MLink'

// Inside MyApp, after other providers:
;<BAI18nProvider>
  <ComponentLibraryProvider linkComponent={MLink}>
    <OverlayProvider>
      <NavMenuContextProvider>
        <div id="root">
          <Component {...pageProps} />
        </div>
        {/* … */}
      </NavMenuContextProvider>
    </OverlayProvider>
  </ComponentLibraryProvider>
</BAI18nProvider>
```
