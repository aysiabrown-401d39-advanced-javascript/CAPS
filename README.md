# Class 11: Lab
## CAPS
### Aysia Brown

### Links & Resources 
- [CI/CD](https://github.com/aysiabrown-401d39-advanced-javascript/CAPS/actions/new)
- No applicable back-end
- No applicable front-end

### Setup

**`.env` varbiables:**
- none applicable

**Instaling Dependencies:**
- run `npm i` within each individual directory for *caps*, *vendor* and *driver* the cloned repo in your terminal to install package.json dependencies

**Initialize & Start Up**
- run `node caps.js` in your terminal within your cloned repo *caps* subdirectory. `caps.js` is the hub of our sockets.
- run `node vendor.js` in your terminal within your cloned repo *vendor* subdirectory
- run `node driver.js` in your terminal within your cloned repo *driver* subdirectory

**Tests:**
- run `npm test` to run the tests within your cloned repo in your terminal
- the tests spy on various functions to make sure the logs are being called
- the tests also check to emsure we are waiting on timeouts for the driver
- tests are currently throwing a `TypeError: wsModule.Server is not a constructor` when ran. Unsure and will troubleshoot later. Attempted mocking socket.io and socket.io-client and that still didn't resolve the issue.


