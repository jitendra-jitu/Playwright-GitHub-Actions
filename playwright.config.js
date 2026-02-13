// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';


const config=({
  testDir: './tests',
  timeout:30*1000,
  expect:{
    timeout:5*1000
  },
  reporter:'html',
  use: {
    browserName:'chromium',
    // trace: 'on-first-retry',
    headless:false,
    screenshot:'on',
    trace:'on'
  },
});

module.exports=config;

