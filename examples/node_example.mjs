// npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'YOUR_APIFY_TOKEN' });
const run = await client.actor('automationnation/google-ads-transparency-scraper').call({
  "advertisers": [
    "nike.com"
  ],
  "region": "us",
  "maxAdsPerAdvertiser": 100
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) console.log(item.advertiserName, item.format, item.headline, item.daysShown);
