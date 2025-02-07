# electron-localbrowser
Run local HTML files in Electron!

Mostly meant as a hacky way to "package" [Ryan Lane's cyclone-simulator](https://monsoonjr99.github.io/cyclone-sim/) into a portable format but can run any HTML documents.
User data and HTML docs are made portable with `process.execpath()` so package the program first - else they will be stored in electron's dist folder in `node_modules`.

App structure (example on Windows):
```
Root folder
|   electron-localbrowser.exe
|   ...
|
+---html
|       index.html
|       ...
|    
\---profile
        Local State
        Preferences
        ...
```