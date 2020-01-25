---
prev: ./technical
next: false
---
# How and What?

## What data is synced between Magento and Acumatica?

Attributes (Customer and Product), Categories, Products, Customers, Orders, and Shipments. 

## Will data get synced automatically after Acumatica-Magento Connector is installed and configured? 

Data synchronization starts only after configuring the sync schedules in Magento.  The admin determines whether the sync process takes place on a scheduled basis or manually. 

## Between Magento and Acumatica, which one is the system of record? 

The connector solution allows the data to be synced bi-directionally and can be setup to have either of the system as the master.  However, in an ideal situation, Acumatica should be the system of truth for Product Catalog related information, with the customers and orders created in Magento flowing into Acumatica.

## Is the logging saved in Magento or is it external? 

Logs are saved on the database just as per the Magento default framework.

## Is the sync bi-directional? 

Yes, and one can also choose the direction of the sync at an attribute level and not just at the entity level. 

## Are the Syncs happening in real-time? 

Yes. The syncs can be configured to transmit all data in real time. 

## What data is synced back to Magento from Acumatica upon fulfillment of an order? 

When an order is fulfilled, and a shipment record is created in Acumatica, connector creates the shipment in Magento and also updates it with Shipment Number, Ship Via, Shipped Date, Quantity, Line Items and Tracking number. 
## Is an order required for a customer to be synced? 

No.  Magento allows a customer record to be created even without an order (New Account setup).  These records are synced to Acumatica via the Customer Sync process, which is not dependent on orders. 

## How often can I run the syncs? 

This depends on the number of records that could be modified between two consecutive syncs.  Since each sync process is only pulling/pushing the changes (delta) from the previous sync, the interval between two consecutive syncs depends on the time it takes to sync the data that would have changed.  This is estimated during the discovery process. 

## Is the order number the same between Acumatica and Magento? 

Magento order number can be passed to Acumatica, and the same order number can be maintained by setting the order sequence number in Acumatica to Manual.  The challenge is to ensure that the users in Acumatica are not creating orders with number that conflict Magento orders.  This can be achieved by setting up a specific order type for orders coming from the web (WO), and controlling permissions on these orders.

## What is the unique identifier for customers? 

Email ID is a unique key for  a customer in Magento.  When a new customer is created on Magento, the connector checks for customer existence based on the Email ID.  If the customer record is found, the Acumatica Customer ID is saved on the Customer record in Magento, which will then be used for subsequent transactions.  Otherwise a new customer is created. 

## Is Inventory managed in Magento? 

Yes, Magento maintains its own inventory for products, which is decremented when an order is created.  However, inventory sync replaces inventory data in Magento with the latest data from Acumatica.

## What happens on the Magento front-end if the two systems cannot reach each other? 

Magento will continue to sell with its current data/inventory level etc. Once the link comes back, the updates are synced. 

## If one system goes down and there are stock changes, how will Acumatica handle overselling assuming Magento will begin pushing orders through once the connection is back? 

The connector will continue to collect messages despite its failed connection. When the connection is restored, the messages will send via bulk sync. 

## Does Magento pull stock from an allocation to the website? Is this set up as a ‘warehouse’ in Acumatica or is it combined stock level? 

Connector can pull from a specific warehouse in Acumatica or from a combined stock level.

## How do taxes work between Acumatica, and Magento? 

Tax Categories can be mapped at Product Attributes in Magento. The product’s Tax Category will dictate the taxable amount based on Acumatica rules. 

## How are Magento transactions in different currencies handled? 

The base currency that is set at the website level is the currency which is pushed into Acumatica. Any conversion etc. is then configured in Acumatica. 

## Will data get synced automatically after the Acumatica-Magento Connector is installed and configured? 

No, Data synchronization starts only after initializing and activating the connector in Acumatica. 

## What Magento product types are supported by Acumatica-Magento Connector? 

The Connector supports stock and non-stock (simple) items.  In addition, if the Product Configurator module is installed on Acumatica, the connector also syncs composite (Configurable, Bundled and Grouped) products. If using CommercePro, Quick Kits are also able to be synced. 

## What does product configurator do? How can this be used? How does this integrate with Connector? 

The configurator brings Magento Product types such as Configurable, Bundle, Grouped, Virtual, and Downloadable into Acumatica, so you can have the same functionality on sales and purchase orders. 

## Can I sync a specific item? 

Yes, support exists for an admin user in Magento to sync a specific Product, Category, Customer or Order. 

## What are some of the reasons for an order to not sync from Magento into Acumatica? 

There are several possibilities that can result in an order to not sync from Magento into Acumatica: 

* Order Shipping Method or Carrier not configured in Acumatica, matching Magento

* Order Payment Method not configured in Acumatica or Magento

* Item not defined in Acumatica 

* Sales Order Sequence number error 

* Unsupported Product Types 

* Credit limit for customer preventing the order creation in Acumatica 

* Magento and Acumatica cannot be connected to each other. 

* Infrastructure issues such as lack of disc space on either the Acumatica or Magento 

* Network connection issues 

## Does the connector tool maintain a log of all syncs and updates? 

Yes, the connector maintains two different logs.  The first one is for the data that is synced between the two systems, and another to track any updates to the configuration. 

## Can I re-sync failed orders individually? 

All orders after number of attempts of sync (number can be defined by Admin), are placed in a failed orders queue, and the errors are shown in the failed order log.  Once the errors have been corrected, either on Magento (e.g. invalid customer zip code), or on Acumatica (e.g. Product missing in Acumatica), the sync process for that order can be initiated again individually or via failed order sync feature. 

## How are order edits managed? 

Magento (both Open Source and Commerceenterp editions) do not support editing of orders.  So, in most installations, order edits are made in Acumatica, but not fully synced back to Magento.However, extensions do exist for Magento to allow order edits, and if such extensions are implemented, then the connector code can be customized to support order edits. 

## How are RMAs handled? 

RMA is an Commerce Edition only feature in Magento and has some basic functionality such as initiating a return.  The Admin section of Magento provides managing RMAs as well.The connector supports limited integration for RMAs on Commerce edition of Magento, where an RMA in Magento is pushed into Acumatica with the appropriate RMA Order Type.RMAs on Open Source Edition of Magento can be supported as a customization based on the extension that is installed on Magento. 

## Can refunds to store credit be achieved? 

This is not part of the default connector, but we can do a customization for this if needed. 

## Does the integration handle store credit (Magento Commerce)? 

This is not part of the default connector, but we can do a customization for this if needed. 

## How is refunding handled? Magento has the ability to refund directly to the customer’s credit card depending on the payment gateway, or via PayPal. This raises a credit memo in Magento, does this reflect in Acumatica? 
 
Credit memo in Magento is synced back to Acumatica.  Refunds in Acumatica can be customized to be pushed back to Magento. 

## Can the connector handle quoting? 

Yes, this can be customized.  On Magento, one can install the Cart2Quote extension, which can then be pushed to QT order type in Acumatica. 

## How does the Connector handle multiple UOMs defined on the same stock item in Acumatica? 

Magento does not have multiple UOM functionality.  So, a design decision would have to be made based on the customers’ product setup (how they are purchased and merchandised).  Accordingly, a customization is needed to set these up as either Configurable Products, or a Simple Product with Custom Options in Magento.

## When Syncing orders, are customers automatically synced? 

When an order is pushed from Magento to Acumatica, the sync solution checks to see if the customer already exists in Acumatica (Search by Email ID), and if one is not found, the customer is created and the orders is then synced.If the customer already exists, then the customer data is not updated, but the customer information on the order is populated with the information from Magento.  This is because both Magento and Acumatica allow customer information on a sales order to be different than the customers’ default information. 
However, if the customer logs into the customer-area in Magento, and updates the default billing or shipping address on their customer record, the same is updated into Acumatica on the next Customer sync cycle.

## Will order level billing and shipping information be saved to the customer record? 

No, this information will be synced to the order only, as explained above. 

## Does the connector create invoices in Magento? 

Yes, once an order is processed completely in Acumatica and an invoice is created, the connector creates the invoice in Magento as well, and marks the order as Complete in Magento. 

## Can the connector handle split shipments (multiple delivery addresses)? 

Not as per native Magento. The order can be split in Acumatica but the customer on Magento front-end can’t natively choose which products are shipped to which address. Might either be a customization but the workaround would be for the customer to place two orders. 

## How does the connector handle freight charges between Magento and Acumatica?

Acumatica re-calculates freight when sales order is created (based on the Ship Via code passed in the sales order).  Since this may result in a discrepancy in order totals, Connector setup includes configuration to ignore the calculated value (via Shipping Terms), and passes the Magento value in Premium Freight field.

## Are newsletter subscribers in Magento synced into Acumatica? 

No. Newsletter subscribers are not synced at this time.

## How does the connector handle customer special or contract pricing? 

Acumatica has customer classes, which are used to set up customer class specific pricing.  These can be synced with Magento Customer Groups.  This is handled as a customization based on the rules needed.

## How markdowns are handled (permanent vs temporary)? 

This is handled just as a regular price change in Acumatica. 

## Where do detailed and complicated promotions live? Magento or Acumatica? 

Magento supports both Item and Cart level discounts both with and without a discount code.  Acumatica requires a discount code and sequence to be applied for each discount.  Since Marketing programs and discounts can vary quite a bit, it would be difficult for an ERP (Acumatica) to keep up.  So, the sync tool passes item level discounts as “Manual” Discounts at item level on the sales order.  Cart level discounts are distributed across the line items proportionally. 



 
 
 
  



   	

