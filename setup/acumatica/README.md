# Installing the connector package

The first step to installing the feature is to run the latest version of the Acumatica-Magento Connector.
To begin, the following pre-requisites are necessary for the installation and configuration of the Magento Connector

* The latest version of the Commerce Basic package

::: tip Notes
The package can be obtained through a VAR using the Acumatica portal, through an Account Manager by contacting the Acumatica Helpdesk, or through the Acumatica public site.
:::

1. Save the .zip file of the Magento Acumatica Connector package to the local hard drive.
2. Navigate to the **Customization** workspace.
3. Click **Customization Projects**.
4. Click the **Import** button.
5. Select **Import New Project**.
	* Select the **Acumatica Magento Connector Package .zip file** from a local folder.
	* Click **Upload**.
6. In the **Levels** column, indicate the level in which the package needs to be published.
	* If utilizing CommercePro and Product Configurator, the packages should be published with the following level designations: 1. Product Configurator, 2. Commerce Basic, 3. CommercePro, 4. Acumatica-Magento Connector.
7. Toggle on the box(es) of the packages that need to be published.
	* If a package is already published in the instance that needs to remain published, the package should have a level value associated with it, and the box should be toggled on prior to publishing.
8. Click the Publish button.
9. Click **Save**.

![Installation Connector Package](/installation-connector-package.png)

If you want to publish the package(s) for a specific company:

1. Click the down arrow on the **Publish** button.
2. Select **Publish to Multiple Tenants**.
3. When the Publish to Multiple Tenants pop-up screen appears
	* Select the checkbox(es) for the company name(s) to publish the package(s).
	* Click **OK**.

After installing the customization package, the connections must be established between Acumatica and Magento.
