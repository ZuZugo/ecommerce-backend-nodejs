"use strict";

// count connect
const mongoose = require("mongoose");
const os = require("os");

const _SECOND = 5000;
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connection ${numConnection}`);
};

// check overload
const checkOverLoad = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    // Example maximum number of connection based on number osf cores
    const maxConnections = numCores * 5;

    console.log(`Activate connections::: ${numConnection}`);
    console.log(`Memory Usage::: ${memoryUsage / 1024 / 1024} MB`);

    if (numConnection > numCores) {
      console.log(`Connection Overload Detected`);
    }
  }, _SECOND); //
};

module.exports = {
  countConnect,
  checkOverLoad,
};
