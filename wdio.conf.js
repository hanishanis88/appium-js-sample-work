exports.config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    port: 4723,
    path: '/wd/hub',

    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './tests/**/*.spec.js'
    ],

    // ============
    // Capabilities
    // ============
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        deviceName: 'Pixel_4_API_33',
        automationName: 'UiAutomator2',
        app: `${process.cwd()}/apps/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk`,
        appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
    }],

    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    // ===================
    // Services
    // ===================
    services: [
        ['appium', {
            command: '',
        }]
    ],

    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};