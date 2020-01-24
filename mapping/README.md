# Mapping in Magento

When Acumatica data is prepared for syncing, the data paths must be mapped based on attributes and fields established in Magento. This requires the creation of additional schema and attributes in Magento.

## Mapping Product Attribute Schema

Product Attribute Schema must be mapped in order to ensure product data can be moved from Acumatica to Magento. Acumatica attributes are considered metadata and must be mapped prior to syncing products.

To begin, select an attribute that has been added to an item class that is enabled for Magento sync in Acumatica. Navigate to the Magento Connector workspace in Acumatica and select Product under the Schema Management section.

1. Click Refresh Schema.
	 
	* The attributes will refresh successfully with a green checkmark.

2. Toggle the Active box next to the attribute that must be mapped.

3. Click Save.

To view the successfully synced attribute, navigate to the Stores workspace in Magento and select Attribute Set. Attribute Sets are equivalent to Acumatica item classes.

1. Click the Attribute Set (item class) that the Acumatica attribute is assigned to.

2. In the Groups section, scroll down to the Acumatica folder.

3. The attribute will appear in the Acumatica folder.

![Attribute Set](/attributeset.png)

Default Magento attributes will appear in the General folder. It is important to note that the connector will not adjust any existing attributes located in attribute sets in Magento. If the attribute appears in the Unassigned Attributes list, the attribute may be dragged and dropped into the Acumatica folder.

Now that the attribute has been assigned to the Attribute Set, the attribute can be made and mapped in Magento for syncs. Navigate to the Kensium A-M Connector workspace in Magento and select Product in the Mapping section.

1. Select a Store View in the top left hand corner.

2. Click Update Schema.

	* If the Magento Product Attribute already exists for the Acumatica Product Attribute, skip to step 8.

3. Click Get New Attributes

	* The list of unmapped attributes from Acumatica will render.

4. Click Create next to the Acumatica attribute that will be made into a Magento attribute.

5. Under Attribute Properties

	* Enter a Default Label

		- This is the display name of the attribute.

	* Enter a Catalog Input Type for Store Owner

		- This will update the interface of the options for the attribute.

	* Enter a Values Required option.

		- This will determine whether the attribute is a required field.

6. Under Advanced Attribute Properties.

	* Enter an Attribute Code.

		- This is an internally used code for attributes.

	* Enter a Scope.

		- This will designate where the attribute will be visible.

7. Click Save Attribute. The Magento Attribute will now be created based on the information from the Acumatica Attribute and appear in the Magento Product Attribute column of the Product Attribute Mapping page.

8. Click Update Schema.

9. Click Map Product Attributes.

10. Select the Magento Product Attribute.

11. Select the Acumatica Product Attribute.

12. Click Save.

![Product Attribute Mapping](/productattribute-mapping.png)

The attribute has now been mapped.

## Mapping Customer Schema

Customer schema must be mapped to ensure that customer data is properly syncing between Acumatica and Magento. To begin, navigate to the Magento Connector workspace in Acumatica and select Customers under the Schema Management section.

1. Click Refresh Schema.
	 
	* The attributes will refresh successfully with a green checkmark.

2. Toggle the Active box next to the attribute that must be mapped.

3. Click Save.

Next, navigate to the Kensium A-M Connector workspace in Magento and click Customer under the Mapping section.

1. Select a Store View in the top left hand corner.

2. Click Update Schema.

	* If the Magento Customer Attribute already exists for the Acumatica Customer Attribute, skip to step 8.

3. Click Get New Attributes

	* The list of unmapped attributes from Acumatica will render.

4. Click Create next to the Acumatica attribute that will be made into a Magento attribute.

5. Under Attribute Properties

	* Enter a Default Label

		- This is the display name of the attribute.

	* Enter an Attribute Code

		- This is an internal documentation of the attribute.

	* Enter a Input Type option.

		- This is the type of attribute that has been created in Acumatica (combo, multi combo, etc.).

6. Under Storefront Properties.

	* Enter a Show on Storefront Option.

	* Enter a Sort Order.

		- This will designate where the attribute will appear in conjunction with other attributes if visible on the storefront.

	* Enter a Forms to Use In.

		- This will designate where the attribute will appear.

7. Click Save Attribute. The Magento Attribute will now be created based on the information from the Acumatica Attribute and appear in the Magento Customer Attribute column of the Customer Attribute Mapping page.

8. Click Update Schema.

9. Click Map Attributes.

10. Select a Magento Customer Attribute.

11. Select an Acumatica Customer Attribute.

12. Select a Direction.

	* This will allow a user to determine the direction of metadata syncs for individual product attributes.

13. Click Save.

![Customer Attribute Mapping](/customerattribute-mapping.png)

The attribute has now been mapped.

## Mapping Category Schema

Category mapping involves the information located in the eCommerce tab of Acumatica that renders with the utilization of an eCommerce connector. To begin, navigate to the Magento Connector workspace in Acumatica and select Categories under the Schema Management section.

1. Click Refresh Schema.

	* The attributes will refresh successfully with a green checkmark.

2. Toggle on the Active box next to the attribute that must be mapped.

3. Click Save.

Next, navigate to the Kensium A-M Connector workspace in Magento and click Category in the Mapping section.

1. Select a Store View.

2. Click Update Schema.

3. Click Map Category Attributes.

4. Select a Magento Category Attribute.

5. Select an Acumatica Category Attribute.

6. Click Save.

![Category Attribute Mapping](/categoryattribute-mapping.png)

The relationship between the category attributes will be mapped.

## Mapping Customer Groups

Customer Groups in Magento can be mapped to Customer Classes and Customer Price Classes in Acumatica. To begin, navigate to the Kensium A-M Connector workspace in Magento and click Customer Group in the Mapping section. Customer groups must be mapped in order to ensure customer syncs will properly occur between Acumatica and Magento.

1. Select the Store View.

2. Click Update Customer Class.

3. Click Update Customer Price Class.

4. Click Map Customer Groups.

	* A popup will render to create a new mapping relationship between Magento and Acumatica Customer Group data.

5. Select a Magento Customer Group.

6. Select an Acumatica Customer Class.

7. Select an Acumatica Customer Price Class.

	* If adding multiple relationships, click Add and a second line will render to map additional relationships.
	
8. Click Save.

![Customer Group Mapping](/customergroup-mapping.png)

The relationship has been mapped.

::: tip Notes	
Customer Classes and Customer Price Classes can only be used within one mapping. The connector will not recognize multiple mappings for a single customer or customer price class.
:::

## Mapping Payment Methods

Payment methods in Magento must be mapped with payment methods in Acumatica. The purpose of this is to ensure payments are processed and settled properly from Magento to Acumatica. To begin, navigate to the Kensium A-M Connector workspace in Magento and click Payment Method in the Mapping section.

1. Select a Store View.

2. Click Update Schema.

3. Click Map Payment Methods.

4. Select a Magento Payment Method.

5. Select a Card Type.

6. Select an Acumatica Payment Plugin.

	* If no payment plugins are being used in the Acumatica instance, this field can be left blank.

7. Select an Acumatica Payment Method.

8. Select an Acumatica Cash Account.

9. Click Save.

![Payment Method Mapping](/paymentmethod-mapping.png)

The payment method relationship has now been mapped.

## Mapping Shipping Methods

Shipping methods can be mapped bidirectionally depending on the nature of the order that has been placed.

### Shipping Methods from Acumatica to Magento

To begin, navigate to the Kensium A-M Connector workspace in Magento and select Shipping Method (A>M) under the Mapping section.

1. Select a Store View.

2. Click Update Schema.

3. Click Map Shipping Methods.

4. Select the Acumatica ShipVia method.

5. Select the Magento Shipping Carrier.

6. Enter a Magento Shipping Title.

7. Click Save.

![Shipping Method A->M Mapping](/shippingmethod-a-m-mapping.png)

The shipping relationship has been mapped.

### Shipping Methods from Magento to Acumatica

To begin, navigate to the Kensium A-M Connector workspace in Magento and select Shipping Method (M>A) under the Mapping section.

1. Select a Store View.

2. Click Update Schema.

3. Click Map Shipping Methods.

4. Select a Magento Shipping Method.

	* If a new method needs to be created, select Custom and enter in the name of a new Magento Shipping Method.

5. Select an Acumatica Ship Via method.

6. Click Save.

![Shipping Method M->A Mapping](/shippingmethod-m-a-mapping.png)

The shipping relationship has now been mapped.

## Mapping Warehouses

Warehouses in Acumatica can be mapped to Magento Sources to ensure proper management of inventory. To begin, navigate to the Kensium A-M Connector workspace in Magento and select Warehouse under the Mapping section.

1. Select a Store View.

2. Click Update Schema.

3. Click Map Warehouse.

4. Select a Magento Source.

5. Select an Acumatica Warehouse.

6. Click Save.

![Warehouse Mapping](/warehouse-mapping.png)

The warehouse relationship has been mapped.

## Mapping Order Statuses

Order statuses in Acumatica can be mapped to Magento order statuses to ensure that order status data transfers from Acumatica’s back office to Magento’s front end. To begin, navigate to the Kensium A-M Connector in Magento and click Order Status in the Mapping section.

1. Select a Store View.

2. Click Add New Order Status.

3. Enter the name of the Acumatica Order Status.

	* The Acumatica Order Status must be entered exactly as it appears in Acumatica to ensure proper mapping.

4. Select a corresponding Magento Order Status.

5. Click Save.

![Order Status Mapping](/orderstatus-mapping.png)

The order status is now mapped.


## Backorder feature

1. For the product to be available in the front end irrespective of its stock availability in the Magento, we should create custom attribute and assign to Item class of the product in Acumatica with name "BACKORDERS".
2. We need to bring this Acumatica attribute to Magento mapping screen with the below steps
	* Go to Product schema screen in Acumatica under the Magento connector section.
    * Under the attributes tab select the respective "BACKORDERS" attrribute and click on SAVE button.
    * In Magento click on update schema in the Product attribute mapping screen.
3. Map the Acumatica "BACKORDERS" attribute with Magento "BACKORDERS" field in the product attribute mapping screen.
4. Once the mapping is established the Inventory sync will not touch the Stock status of those products for which the BACKORDERS is selected as [Allow Qty below 0 / Allow Qty Below 0 and Notify Customer].
By this way we can achieve the required functionality.

|Field|Value|
|---|---|
|**Attribute ID**|BACKORDERS|
|**Attribute Name**|BACKORDERS|
|**Attribute Type**|	Combo|

|Attribute Value ID|	Attribute Value Description|
|---|---|
|0|	No Backorders|
|1|	Allow Qty Below 0|
|2|	Allow Qty Below 0 and Notify Customer|