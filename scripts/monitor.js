/**
 * System Monitoring Script - Multi-Environment
 * Monitors application health and performance
 */

const MONITOR_ENV = process.env.MONITOR_ENV || 'production';

const monitorConfig = {
  interval: MONITOR_ENV === 'production' ? 60000 : 5000,
  alertThreshold: MONITOR_ENV === 'production' ? 80 : 90,
  metricsEndpoint: MONITOR_ENV === 'production' ? 'http://localhost:8080/metrics' : 'http://localhost:3000/metrics',
  debugMode: MONITOR_ENV === 'development',
  verboseLogging: MONITOR_ENV === 'development'
};

console.log('=================================');
console.log(`DevOps Simulator - Monitor (${MONITOR_ENV})`);
if (MONITOR_ENV === 'development') console.log('Development Mode: ENABLED');
console.log('=================================');

function checkSystemHealth() {
  const timestamp = new Date().toISOString();
  
  if (monitorConfig.debugMode) {
    console.log(`\n[${timestamp}] === DETAILED HEALTH CHECK ===`);
  } else {
    console.log(`[${timestamp}] Checking system health...`);
  }

  // CPU usage
  const cpuUsage = Math.random() * 100;
  console.log(`✓ CPU usage: ${cpuUsage.toFixed(2)}%`);
  
  // Memory usage
  const memUsage = Math.random() * 100;
  console.log(`✓ Memory usage: ${memUsage.toFixed(2)}%`);
  
  // Disk usage
  const diskUsage = Math.random() * 100;
  console.log(`✓ Disk space: ${diskUsage.toFixed(2)}% used`);
  
  // Development-specific checks
  if (monitorConfig.debugMode) {
    console.log('✓ Hot reload: Active');
    console.log('✓ Debug port: 9229');
    console.log('✓ Source maps: Enabled');
  }

  // Determine status
  const maxUsage = Math.max(cpuUsage, memUsage, diskUsage);
  if (maxUsage > monitorConfig.alertThreshold) {
    console.log('System Status: WARNING - High resource usage');
  } else {
    console.log('System Status: HEALTHY');
  }

  if (monitorConfig.verboseLogging) {
    console.log(`Next check in ${monitorConfig.interval}ms`);
  }
}

// Start monitoring
console.log(`Monitoring every ${monitorConfig.interval}ms`);
setInterval(checkSystemHealth, monitorConfig.interval);
checkSystemHealth();

// Development-specific: Log memory usage every 30s
if (monitorConfig.debugMode) {
  setInterval(() => {
    const memUsage = process.memoryUsage();
    console.log('\n--- Memory Usage ---');
    console.log(`RSS: ${(memUsage.rss / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Heap Used: ${(memUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
  }, 30000);
}
