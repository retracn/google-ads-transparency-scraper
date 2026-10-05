# pip install apify-client
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")
run = client.actor("automationnation/google-ads-transparency-scraper").call(run_input={
  "advertisers": [
    "nike.com"
  ],
  "region": "us",
  "maxAdsPerAdvertiser": 100
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item.get("advertiserName"), item.get("format"), item.get("headline"), item.get("daysShown"))
