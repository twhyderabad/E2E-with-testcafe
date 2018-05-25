const createTestCafe = require('testcafe');
let testcafe         = null;
let runner           = null;

const runTests = suite => {
    createTestCafe('localhost', 1338)
        .then(tc => {
            testcafe = tc;
            runner = testcafe.createRunner();

            return runner
                .src(suite)
                .browsers(['chrome:headless', 'safari', 'chrome:headless:emulation:device=iphone 6'])
                .reporter('spec')
                .run();
        })
        .then(failCount => {
            console.log("Test failed: " + failCount);
            testcafe.close();
        })
};

runTests('specs/login.test.js')