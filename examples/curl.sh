#!/bin/bash
# export APIFY_TOKEN=your_token
curl -X POST "https://api.apify.com/v2/acts/automationnation~google-ads-transparency-scraper/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"advertisers": ["nike.com"], "region": "us", "maxAdsPerAdvertiser": 100}'
