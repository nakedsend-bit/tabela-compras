import { FirecrawlService } from './path/to/FirecrawlService';

const main = async () => {
  const service = new FirecrawlService();
  await service.start();
};

main();