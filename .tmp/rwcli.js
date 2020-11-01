
  const proxyquire = require("proxyquire")
  const fs = require('fs')
  const path = require('path')
  const files = {}
  const fileOverrides = {"file:///Users/user/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/projects/redwoodblog/web/src/pages/HomePage/HomePage.js":"import { Link, routes } from '@redwoodjs/router'\n\nconst HomePage = () => {\n  return (\n    <>\n      <h1>HomePage</h1>\n      <p>\n        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>\n      </p>\n      <p>\n        My default route is named <code>home</code>, link to me with `\n        <Link to={routes.home()}>Home</Link>`\n      </p>\n      new text\n    </>\n  )\n}\n\nexport default HomePage\n","file:///Users/user/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/projects/redwoodblog/web/src/Routes.js":"// In this file, all Page components from 'src/pages` are auto-imported. Nested\n// directories are supported, and should be uppercase. Each subdirectory will be\n// prepended onto the component name.\n//\n// Examples:\n//\n// 'src/pages/HomePage/HomePage.js'         -> HomePage\n// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage\n\nimport { Router, Route } from '@redwoodjs/router'\n\nconst Routes = () => {\n  return (\n    <Router>\n      <Route path=\"/\" page={HomePage} name=\"home\" />\n      <Route notfound page={NotFoundPage} />\n    </Router>\n  )\n}\n\nexport default Routes\n","file:///Users/user/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/projects/redwoodblog/web/src/pages/HomePage/HomePage.test.js":"import { render } from '@redwoodjs/testing'\n\nimport HomePage from './HomePage'\n\ndescribe('HomePage', () => {\n  it('renders successfully', () => {\n    expect(() => {\n      render(<HomePage />)\n    }).not.toThrow()\n  })\n})\n"}
  const FILE_SCHEME = 'file://'

  function URL_file(f) {
    if (f.startsWith(FILE_SCHEME))
      f = f.substr(FILE_SCHEME.length)
    return new URL(FILE_SCHEME + path.normalize(f)).href
  }

  proxyquire('@redwoodjs/cli/dist', {
    fs: {
      mkdir() {},
      mkdirSync(...args) {},
      writeFile(a, b) {
        files[URL_file(a)] = b
      },
      writeFileSync(a, b) {
        files[URL_file(a)] = b
      },
      readFileSync(...args) {
        const f = URL_file(args[0])
        if (fileOverrides[f]) return fileOverrides[f]
        return fs.readFileSync.apply(fs, args)
      },
      '@global': true,
    },
  })

  process.on('exit', () => {
    console.log("---------===----===--------")
    console.log(JSON.stringify(files, null, 2))
  })
  