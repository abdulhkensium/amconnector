# Establishing a connection within Magento

After the connection has been established in Acumatica, the connector must be established in Magento.

## Viewing the Acumatica endpoint URLs in Magento 

Endpoint URLs are visible for a user to determine the destination of data synced from Magento to Acumatica. These endpoints utilize Acumatica’s API framework to determine the direction of calls made from Magento to Acumatica.

To view these endpoints, navigate to the **Kensium A-M Connector** workspace in Magento and click **Acumatica Endpoint URLs**.

![Acumatica Endpoint](/acumatica-endpoint.png)

::: tip Notes
It is not advised to modify URLs without the support of an implementation specialist. Endpoint URLs are added by default upon installing the package. They should be modified only if a customization is present or being added.
:::

## Basic Configuration in Magento

To configure the connection in Magento, navigate to the **Kensium A-M Connector** workspace in Magento and click **Basic Configuration**

![Basic Configuration](/basic-configuration.png)

1. Select a **Store View**
	- The Store View indicates which website (in Acumatica terms, which branch) the configuration will affect. If the configuration is applicable to all websites, and thus stores and branches, active on Magento, select Default Config. Otherwise, select the website or store view that is specific to the configuration that is being completed.

2. Enter the **Acumatica Base URL**.

3. Enter the **Login Username**.

4. Enter and confirm the **Password**.

5. Enter the **Login Company**.

6. Click **Test Connection**.
	- A message will appear if the connection is successful.

7. Click Save Config.

The **Logging** section of the **Basic Configuration** page allows a user to select the actions that can be logged during data exchanges between Acumatica and Magento.

![Acumatica Logging](/acumatica-logging.png)

1. Toggle the Logs that are needed.

2. Enter a value for the Log Entry Lifetime, days.

3. Enter a Log Cleaning Frequency.

4. Select the Show in System Messages preferences.

5. Click Save Config.

![Log Entry](/log-entry.png)

At the bottom of the screen there is an option to **Flush Messages**. This action will delete all log data if necessary.

## Sync Configuration in Magento

Sync Configuration in Magento allows a user to enable syncs between Acumatica and Magento. Navigate to the **Kensium A-M Connector** workspace in Magento and click **Sync Configuration**.

1. Select a Store View.
	- The Store View indicates which website (in Acumatica terms, which branch) the configuration will affect. If the configuration is applicable to all websites, and thus stores and branches, active on Magento, select **Default Config**. Otherwise, select the website or store view that is specific to the configuration that is being completed.

2. Toggle a **Sync** to enable to enable the sync for a particular sync.
3. Select a **Sync Direction** for the sync.
4. Click **Save Config**.

Repeat these steps for each sync criteria that are necessary for syncs.

![Sync Configuration](/sync-configuration.png)


