addEventListener('message', async (event) => {
  const { now } = await import('./utils');
  postMessage(now());
});
