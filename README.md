# [Link Component] Accessing element.ref was removed in React 19

To reproduce the error:

- Clone this repository.
- Install the dependencies `yarn install`
- Run the app using `yarn dev`
- Open your browser at http://localhost:3000/
- Open the developer inspector, and you will see an error similar to the following:
```
hook.js:608 Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release. Error Component Stack
    at LinkComponent (link.tsx:304:16)
    at NextLinkComposed (index.tsx:22:63)
    at MuiButtonBase-root (emotion-element-7a13…opment.esm.js:48:26)
    at ButtonBase (ButtonBase.js:84:31)
    at MuiButton-root (emotion-element-7a13…opment.esm.js:48:26)
    at Button (Button.js:314:30)
    at div (<anonymous>)
    at Styled(:3000/div) (http://l…16ac0._.js:7324:197)
    at Box (createBox.js:20:26)
    at ButtonExample (<anonymous>)
    at Contact [Server] (<anonymous>)
    at InnerLayoutRouter (layout-router.tsx:324:3)
    at RedirectErrorBoundary (redirect-boundary.tsx:48:5)
    at RedirectBoundary (redirect-boundary.tsx:79:9)
    at HTTPAccessFallbackErrorBoundary (http-access-fallback-boundary.tsx:49:5)
    at HTTPAccessFallbackBoundary (http-access-fallback-boundary.tsx:133:3)
    at LoadingBoundary (layout-router.tsx:465:3)
    at ErrorBoundary (error-boundary.tsx:190:3)
    at InnerScrollAndFocusHandler (layout-router.tsx:289:3)
    at ScrollAndFocusHandler (layout-router.tsx:299:9)
    at RenderFromTemplateContext (render-from-template-context.tsx:8:10)
    at OuterLayoutRouter (layout-router.tsx:511:9)
    at DefaultPropsProvider (DefaultPropsProvider.js:9:3)
    at RtlProvider (index.js:6:3)
    at ThemeProvider (ThemeProvider.js:33:5)
    at ThemeProvider (ThemeProvider.js:48:5)
    at ThemeProviderNoVars (ThemeProviderNoVars.js:8:10)
    at ThemeProvider (ThemeProvider.js:9:3)
    at AppRouterCacheProvider (appRouterV13.js:15:5)
    at body (<anonymous>)
    at html (<anonymous>)
    at RootLayout [Server] (<anonymous>)
    at RedirectErrorBoundary (redirect-boundary.tsx:48:5)
    at RedirectBoundary (redirect-boundary.tsx:79:9)
    at HTTPAccessFallbackErrorBoundary (http-access-fallback-boundary.tsx:49:5)
    at HTTPAccessFallbackBoundary (http-access-fallback-boundary.tsx:133:3)
    at DevRootHTTPAccessFallbackBoundary (dev-root-http-access…k-boundary.tsx:20:3)
    at ReactDevOverlay (ReactDevOverlay.tsx:91:3)
    at HotReload (hot-reloader-client.tsx:523:3)
    at Router (app-router.tsx:254:9)
    at ErrorBoundaryHandler (error-boundary.tsx:69:11)
    at ErrorBoundary (error-boundary.tsx:190:3)
    at AppRouter (app-router.tsx:660:3)
    at ServerRoot (app-index.tsx:184:32)
    at Root (app-index.tsx:212:17)
```