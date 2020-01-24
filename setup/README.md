# Setup and Install

## RabbitMQ setup and configuration
   Help link: 
   1. Magento Cloud : https://devdocs.magento.com/guides/v2.3/cloud/project/project-conf-files_services-rabbit.html?itm_source=devdocs&itm_medium=search_page&itm_campaign=federated_search&itm_term=rabbitmq
   2. Non-Magento cloud: https://devdocs.magento.com/guides/v2.3/install-gde/prereq/install-rabbitmq.html?itm_source=devdocs&itm_medium=search_page&itm_campaign=federated_search&itm_term=rabbitmq
 
## Default Magento cron as per the Magento guidelines
   Command to install cron: ``` bin/magento cron ```
   Help link: Magento cloud: https://devdocs.magento.com/guides/v2.3/cloud/configure/setup-cron-jobs.html

## Install Composer via Installation
We need to run below commands from the Magento web root folder, then the connector will be installed along with dependencies mentioned in the composer.json file in the connector package root. Since our connector package is private and it needs access credentials after executing below commands, access details will be shared to authorized persons as per the contract:
   

```
composer config repositories.private-packagist composer https://repo.packagist.com/kensiumsolutions/
composer config repositories.packagist.org false
composer require kensium/acumatica-connector
```