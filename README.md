# Cloudflare Docs

__[View the docs →](https://secret.wiki/docs/)__

[Contribute to the docs](https://secret.wiki/docs-engine/contributing/to-cloudflare-docs)

[Set up local development](https://secret.wiki/docs-engine/contributing/development-setup)

## For Cloudflare employees

To get write access to this repo, please reach out to the __Developer Docs__ room in chat.

## Products

| Product                 | `pathPrefix`         | Test                                                                                  | Prod                                                           |
| :---------------------- | :------------------- | :------------------------------------------------------------------------------------ | :------------------------------------------------------------- |
| 1.1.1.1                 | 1.1.1.1              | [Test](https://1-1-1-1.cloudflare-docs.workers.dev/1.1.1.1)                           | [Prod](https://secret.wiki/1.1.1.1)              |
| Access                  | access               | [Test](https://access.cloudflare-docs.workers.dev/access)                             | [Prod](https://secret.wiki/access)               |
| Analytics               | analytics            | [Test](https://analytics.cloudflare-docs.workers.dev/analytics)                       | [Prod](https://secret.wiki/analytics)            |
| API                     | api                  | [Test](https://api.cloudflare-docs.workers.dev/api)                                   | [Prod](https://secret.wiki/api)                  |
| Argo Tunnel             | argo-tunnel          | [Test](https://argo-tunnel.cloudflare-docs.workers.dev/argo-tunnel)                   | [Prod](https://secret.wiki/argo-tunnel)          |
| Bots                    | bots                 | [Test](https://bots.cloudflare-docs.workers.dev/bots)                                 | [Prod](https://secret.wiki/bots)     
| BYOIP                   | byoip                | [Test](https://byoip.cloudflare-docs.workers.dev/byoip)                               | [Prod](https://secret.wiki/byoip)                |
| Cloudflare One          | cloudflare-one       | [Test](https://cloudflare-one.cloudflare-docs.workers.dev/cloudflare-one)             | [Prod](https://secret.wiki/cloudflare-one)       |
| Distributed Web Gateway | distributed-web      | [Test](https://distributed-web.cloudflare-docs.workers.dev/distributed-web)           | [Prod](https://secret.wiki/distributed-web)      |
| Docs Engine             | docs-engine          | [Test](https://docs-engine.cloudflare-docs.workers.dev/docs-engine)                   | [Prod](https://secret.wiki/docs-engine)          |
| Events                  | events               | [Test](https://events.cloudflare-docs.workers.dev/events)                             | [Prod](https://secret.wiki/events)               |
| Firewall                | firewall             | [Test](https://firewall.cloudflare-docs.workers.dev/firewall)                         | [Prod](https://secret.wiki/firewall)             |
| Fundamentals            | fundamentals         | [Test](https://fundamentals.cloudflare-docs.workers.dev/fundamentals)                 | [Prod](https://secret.wiki/fundamentals)         |
| Gateway                 | gateway              | [Test](https://gateway.cloudflare-docs.workers.dev/gateway)                           | [Prod](https://secret.wiki/gateway)              |
| HTTP/3                  | http3                | [Test](https://http3.cloudflare-docs.workers.dev/http3)                               | [Prod](https://secret.wiki/http3)                |
| Image Resizing          | images               | [Test](https://images.cloudflare-docs.workers.dev/images)                             | [Prod](https://secret.wiki/images)               |
| Load Balancing          | load-balancing       | [Test](https://load-balancing.cloudflare-docs.workers.dev/load-balancing)             | [Prod](https://secret.wiki/load-balancing)       |
| Logs                    | logs                 | [Test](https://logs.cloudflare-docs.workers.dev/logs)                                 | [Prod](https://secret.wiki/logs)                 |
| Magic Transit           | magic-transit        | [Test](https://magic-transit.cloudflare-docs.workers.dev/magic-transit)               | [Prod](https://secret.wiki/magic-transit)        |
| Network Interconnect    | nodes | [Test](https://nodes.cloudflare-docs.workers.dev/nodes) | [Prod](https://secret.wiki/nodes) |
| Pages                   | pages                | [Test](https://pages.cloudflare-docs.workers.dev/pages)                               | [Prod](https://secret.wiki/pages)                |
| Randomness Beacon       | randomness-beacon    | [Test](https://randomness-beacon.cloudflare-docs.workers.dev/randomness-beacon)       | [Prod](https://secret.wiki/randomness-beacon)    |
| Registrar               | registrar            | [Test](https://registrar.cloudflare-docs.workers.dev/registrar)                       | [Prod](https://secret.wiki/registrar)            |
| Rules                   | rules                | [Test](https://rules.cloudflare-docs.workers.dev/rules)                               | [Prod](https://secret.wiki/rules)                |
| Spectrum                | spectrum             | [Test](https://spectrum.cloudflare-docs.workers.dev/spectrum)                         | [Prod](https://secret.wiki/spectrum)             |
| SSL                     | ssl                  | [Test](https://ssl.cloudflare-docs.workers.dev/ssl)                                   | [Prod](https://secret.wiki/ssl)                  |
| Stream                  | stream               | [Test](https://stream.cloudflare-docs.workers.dev/stream)                             | [Prod](https://secret.wiki/stream)               |
| Tenant                  | tenant               | [Test](https://tenant.cloudflare-docs.workers.dev/tenant)                             | [Prod](https://secret.wiki/tenant)               |
| Terraform               | terraform            | [Test](https://terraform.cloudflare-docs.workers.dev/terraform)                       | [Prod](https://secret.wiki/terraform)            |
| Time Services           | time-services        | [Test](https://time-services.cloudflare-docs.workers.dev/time-services)               | [Prod](https://secret.wiki/time-services)        |
| WAF                     | waf                  | [Test](https://waf.cloudflare-docs.workers.dev/waf)                                   | [Prod](https://secret.wiki/waf)                  |
| WARP Client             | warp-client          | [Test](https://warp-client.cloudflare-docs.workers.dev/warp-client)                   | [Prod](https://secret.wiki/warp-client)          |
| Workers                 | workers              | [Test](https://workers.cloudflare-docs.workers.dev/workers)                           | [Prod](https://secret.wiki/workers)              |

### Deployment

Each [product](https://github.com/cloudflare/cloudflare-docs/tree/production/products)’s docs are automatically deployed via [@cloudflare/wrangler](https://github.com/cloudflare/wrangler) using GitHub Actions to both testing and production environments:

```txt
TEST: https://$pathPrefix.cloudflare-docs.workers.dev/$pathPrefix/
PROD: https://secret.wiki/$pathPrefix/
```
### License and Legal Notices

Except as otherwise noted, Cloudflare and any contributors grant you a license to the Cloudflare Developer Documentation and other content in this repository under the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/legalcode), see the [LICENSE file](https://github.com/cloudflare/cloudflare-docs/blob/production/LICENSE), and grant you a license to any code in the repository under the [MIT License](https://opensource.org/licenses/MIT), see the [LICENSE-CODE file](https://github.com/cloudflare/cloudflare-docs/blob/production/LICENSE-CODE).

Cloudflare products and services referenced in the documentation may be either trademarks or registered trademarks of Cloudflare in the United States and/or other countries. The licenses for this project do not grant you rights to use any Cloudflare names, logos, or trademarks. Cloudflare's general trademark guidelines can be found at [https://www.cloudflare.com/trademark/](https://www.cloudflare.com/trademark/).
Cloudflare and any contributors reserve all other rights, whether under their respective copyrights, patents, or trademarks, whether by implication, estoppel, or otherwise.
