const puppeteer = require('puppeteer');

async function runBenchmark() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const client = await page.createCDPSession();
  await client.send('Network.enable');

  console.log('Navigating to page...');

  const metrics = [];

  for (let i = 0; i < 3; i++) {
    await client.send('Network.clearBrowserCache');

    console.log(`Run ${i + 1}...`);
    const startTime = Date.now();

    // Simple navigation, wait until network is mostly idle
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

    const perfData = await page.evaluate(() => {
      const timing = performance.getEntriesByType('navigation')[0];
      return {
        loadTime: timing.loadEventEnd - timing.startTime,
        domInteractive: timing.domInteractive - timing.startTime,
        domComplete: timing.domComplete - timing.startTime
      };
    });

    const endTime = Date.now();
    const totalTime = endTime - startTime;

    const resources = await page.evaluate(() => {
      return performance.getEntriesByType('resource')
        .filter(r => r.initiatorType === 'img' || r.name.match(/\.(png|jpe?g|gif|svg|webp)/i))
        .reduce((acc, curr) => acc + (curr.transferSize || 0), 0);
    });

    metrics.push({
      ...perfData,
      totalTime,
      imagePayloadSizeKB: Math.round(resources / 1024)
    });
  }

  console.log('\n--- Benchmark Results ---');
  const avgLoadTime = metrics.reduce((acc, curr) => acc + curr.loadTime, 0) / metrics.length;
  const avgTotalTime = metrics.reduce((acc, curr) => acc + curr.totalTime, 0) / metrics.length;
  const avgImageSize = metrics.reduce((acc, curr) => acc + curr.imagePayloadSizeKB, 0) / metrics.length;

  console.log(`Average Page Load Time (Timing API): ${Math.round(avgLoadTime)}ms`);
  console.log(`Average Total Time (Puppeteer goto): ${Math.round(avgTotalTime)}ms`);
  console.log(`Average Image Payload Size: ${Math.round(avgImageSize)} KB`);

  console.log('\nDetailed Metrics:');
  console.table(metrics);

  await browser.close();
}

runBenchmark().catch(console.error);
