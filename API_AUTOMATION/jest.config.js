module.exports = {
  verbose: true,
  reporters: [
    'default',
    ['jest-html-reporters', 
      {
        publicPath: "./test-report",
        filename: "test-report.html",
        pageTitle: "Test Report",
      }
    ],
  ],
};