1. There is another watch plugin that can be installed with
   `npm i -D jest-watch-typeahead` that will show a preview of files that will
   match when entering a regex, and you're then free to hit up and down to
   select the specific file you're interested in
1. This one offers two available entries to add to your jest configuration
   ```
   watchPlugins: [
       'jest-watch-typeahead/filename',
       'jest-watch-typeahead/testname',
   ]
   ```

Refer to
https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-21...tjs/jest-22
to see the changes made by the exercise
