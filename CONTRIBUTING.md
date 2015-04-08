Contributing
============

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Make your changes on the `src` folder, never on the `dist` folder.
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request

Testing
-------

Tests are run with [Protractor](http://angular.github.io/protractor/#/). After installing it, you must execute `webdriver-manager start` to start a web server on the port defined in `conf.js`. Then execute the command `protractor conf.js` to test.

**NOTE:** The `gulpfile.js` already contains a task to run a web server on port 8000. Just execute the `gulp` command to start the service.
