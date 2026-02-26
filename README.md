# Appium Automation Framework – SauceDemo

## Overview

This project demonstrates a structured end-to-end automation framework for mobile application using Appium with JS.

APK: apps/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk
---

## Architecture

- Page Object Model (POM)
- Utility helper functions
- Retry strategy configuration
- Screenshot & video capture on failure

---

## Project Structure
/tests → Test specifications
/pages → Page Object classes
/utils → Helper & utility functions

---

## Test Coverage

- Successful login
- Locked-out user validation
- Add to cart (random item selection)
- Cart validation with price calculation logic

---

## Reporting

- Screenshots on failure
- Video recording enabled
- Spec

---

## Run Tests Locally

Install dependencies:

npm install

Start Appium server:

npx appium

Start emulator

Run test:

npx wdio run wdio.conf.js
