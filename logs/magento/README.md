# Magento Logs

Navigate to the Basic Configuration section of the Kensium A-M Connector in Magento.

The Logging section of the Basic Configuration page allows a user to select the logs that can be active for actions made between Magento and Acumatica.

1. Toggle the Logs that are needed.
2. Enter a value for the Log Entry Lifetime, days.
3. Enter a Log Cleaning Frequency.
4. Select the Show in System Messages preferences.
5. Click Save Config.

At the bottom of the screen there is an option to Flush Messages. This action will delete all log data if necessary.

## Aadmin Logs

The Admin Log contain a log of all the actions made within Magento that are only visible to an admin. Clicking View next to an action will show a detailed entry of the action made.

## Bulks Action Logs

The Bulk Action Log contains entries of bulk syncs that have occurred between Acumatica and Magento. The action will log as a single entry and clicking Details will display each individual update that was made during the bulk call, as well as show failed items that did not sync.

## Connector Sync Logs

The Connector Sync Log shows the actions made through the connector, their start, finish, and failure time, as well as the group, action, and sync direction of the entry

## Developer Logs

The Developer Logs contain entries of changes made within data syncs that have happened from Acumatica to Magento for developer views. Clicking Details next to an entry will display the hard-coded change to the entry.

## Order Sync Failure

The Magento site contains a log of all order syncs that have failed in their transmission to Acumatica. Navigate to the Kensium A-M Connector workspace in Magento and select Order Sync Failure. 
Orders that have failed will render their order number as well as an error message to help trouble shoot the failed order.
