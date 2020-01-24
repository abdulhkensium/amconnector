# Licensing and Installation

## What type of Licensing is required for the connector to work? 

Licensing is available for the connector on the Acumatica side. 

## Is there an Acumatica add-on (Customization project) that is required to be installed? 

Yes, we will be publishing AMConnector (Acumatica - Magento) customization packages.   

## Does the Acumatica add-on require additional licensing? 

No. After the connector is licensed in Acumatica, there is no additional licensing needed to be applied 

## What is the licensing model? Annual or Perpetual? 

The connector is licensed on an annual basis. 


## What is the cost of the connector? 

Connector costs vary based on the type of installation.  Please contact your sales representative for the pricing. 

## Is the Connector sold directly to the customer by Kensium? 

Kensium customers must purchase the connector from Kensium. Non-Kensium customers can receive the connector from an Acumatica VAR. 

## Is there a trial or development license available? 

Yes, a trial license of the connector is available and not the development license 

## What are the limitations of the trial license? 

All features of the connector are available in a trial license. Data validation is limited to 100 records per day. 

## How do I know that my license is about to expire? 

Email notifications would go on 30, 7, 3, 2, and 1 days before expiration, and these notifications would be sent to the “Admin” email that is configured in the license request screen. 

A notification will also be shown on the Admin section in Magento, when the administrator logs-in. 

At the time of expiration, contact your account manager to arrange a renewal. 

## After the license expires, what would happen? 

Once the license expires, all of the Acumatica-Magento Connector features will be disabled, and only help and license sections will be active and accessible. 

## How can I renew an Annual/Recurring license? 

Please contact our Sales/Account executive. 

## If I send a license request for renewal one month before expiration, would the remaining one-month validity get added to the renewed license? 

Yes, remaining time left on the previous license would be carry forwarded/added to the renewal. 

## Do I need to purchase another license, if I create a new store in the existing website? 

Yes, connector license is based on Magento installation, and the number of stores.  If a new store is being added to a Magento installation, which exceeds the number of licensed stores, a new license needs to be generated for the additional store. 

# Sales

## How many implementations of the connector has Kensium done? 

Kensium has implemented the connector between Magento and Acumatica for over 40 customers. 

## If my customer is looking for a Magento site along with the connector implementation, can you help? 

Kensium is a Magento Commerce level partner and has one of the largest development teams with a large capacity to deliver and support medium and large enterprise scale solutions.  In addition, Kensium also has the largest certified Acumatica Developers as in-house implementation assist services and can augment your sales team with any pre-sales and implementation activity for the website as well. 

## How long does a connector implementation take? 

A typical connector implementation would take around 40 hours spread over 1-2 weeks.  However, the actual time and effort would depend on any customizations that are needed and would be determined upon discovery. 

## Who does the actual implementation?  

Magento website development and implementation will be handled by Kensium, unless the customer has an existing Magento website.   

## Acumatica implementation services will be provided by Kensium or a certified commerce edition VAR. 

Connector implementation services will be provided by Kensium. 

## Are the Connector & Product Configurator sold together or separately? 

Both solutions work independently as well as together.  So, they can be sold separately, if the customer wants only one solution. 

## In case of support needed for the connector, who provides it? 

Kensium provides 24x7x365 support for the connector services.  VARs can also utilize Kensium to offer support services to their customers for Magento, as well as Acumatica.

# Technical

# Setup Related Questions

## Is there a middleware component involved? 

No, there isn’t any middleware component.  Acumatica connector is a native Magento extension that communicates with Acumatica directly via web services. 

## What versions of Magento does the connector support? 

## What additional components do I need on Magento or Acumatica? 

Other than the customizations provided as part of the connector solution, no other components are needed for the connector on Acumatica side.  

On Magento, RabbitMQ and Composer are required to the server to setup the connector. 

## Can I install other extensions on Magento after Acumatica-Magento Connector is installed? 

Yes, Magento connector is built based on Magento extension framework, and should work with other extensions that are also built as per Magento standards.  However, we recommend that you first install the all the components on a staging instance, test for any incompatibilities and then push the changes to production. 

## How are multiple images and videos managed? Do they live in Acumatica? How can Acumatica handle 10 high res images per product if a client has 10000 SKU’s? 

While the connector supports, and one can load images into Acumatica, and can sync them with Magento, this would not be an ideal situation, as you do not want such high res images sitting in Magento as well.  A better option would be to host these on a CDN. 
 
## What Acumatica API framework does the connector use? 

Acumatica utilizes REST API framework, as does Magento. 

# Supported Functionality Related Questions 

## Do you support configurable products? 

Yes, the Magento connector supports Acumatica instances that are utilizing Product Configurator for all configurable products. 

## Do you support Multiple Stores / Websites? 

Yes. The connector supports multiple stores. Configuration settings are required to maintain orders in Acumatica for each store (using branches in Acumatica). Default supported setup assumes that there are multiple stores in the same Magento instance. If there are multiple instances of Magento (each having one or more stores), all pointing to the same Acumatica instance, then additional customization is needed to ensure data from the various Magento instances are kept unique. 

## Can the connector be used for migrating data from existing Magento sites into Acumatica? 

The connector tool uses Web Services to exchange data between Magento and Acumatica. Hence it is better suited for real-time transactions, than as a bulk data migration tool. We advise export/import scenarios for one-time Data import.  Kensium can help with the migration through a separate service contract.   

## How do you handle Gift Cards? 

Magento Open Source edition does not support Gift Cards out of the box, but Magento Commerce edition does.  Acumatica does not have Gift Card functionality, so this payment type is mapped to a cash account in Acumatica. 

## What about purchase of gift cards with x value? Is this set up as a liability in Acumatica? 

Yes, this will be a setting within Acumatica on how the line item on the order is dealt with from a GL perspective. 
 
## How do you handle Reward Points? 

Customizations are required if reward points are to be maintained in Acumatica. Custom attribute can be created on the customer record to hold the current rewards points balance.  In addition, accounting needs to be setup to handle the balance as liability in Acumatica. 

## How are Discounts handled? 

Discount codes can be created and mapped between Magento and Acumatica. Proportion discounts will appear as proportional discounts in Acumatica, line item discounts as non-stock items in Acumatica. 
	
Magento offers discount on Shipping Amount as well. In that case, there is a possibility of total discount amount on Magento to be greater than order subtotal (Sum of line totals) on Acumatica (Shipping is sent to premium freight field). How is this case handled by Connector? 

Connector distributes non shipment discount to line totals proportionately and sends final shipment amount (after discount) to premium freight field. Example: Let’s say the order total in Magneto is $100($80 subtotal + $20 shipping charges) and there is a discount of 99%. Now Connector will proportionately divide the discount amount and sends $1 as the final shipment amount (premium freight field).  

## Do you handle Acumatica sales price worksheets in Magento? 

Yes we do support including customer and customer group level. 

## Can you handle Authorizations in Magento, and Capture in Acumatica? 

Yes, if the same tokenized payment gateway such as Authorize.net CIM is used, payment can be authorized in Magento, and captured in Acumatica. 

## How do you integrate with Market Places? 

Magento already has a lot of established extensions that connect to marketplaces such as Amazon, eBay, etc.  These can be used to integrate the marketplaces to Magento, and the Magento-Acumatica connector can be used to transfer this data from Magento to Acumatica, and vice versa. 

## Do you support multiple warehouses? 

Yes, multiple warehouses are supported by the connector in both Magento and Acumatica. 

## Are partial shipments supported? 

Yes, partial shipments are supported, and synced to Magento. 

## Are partial invoices supported? 

No, partial invoices are not supported by the connector on Magento. 

## Are Acumatica KITS handled by the Connector? 

Yes, the connector supports Acumatica standard kits and quick kits in CommercePro. 

## Does the connector support Drop Ship type items? 

Yes, the connector supports DropShip inventory types. 

## Can vendor drop ship inventory be managed in Acumatica and synced to Magento? 

This functionality is not available by default, but can be achieved with some customizations. Vendor drop-ship inventory can be maintained via an attribute on the Vendor table, which can then be pulled into Magento via a customized Inventory sync. 

## Does the connector handle multiple part-numbers (cross-reference feature) in Acumatica? 

No, the connector out of the box does not handle cross-reference functionality, but this can be customized to be passed to Magento in the alternate search fields or custom attributes. 

## Does the connector handle Magento Custom Options? 

With some small customizations, this can be supported. Custom options can be synced with the Product Configurator module in Acumatica, or just pulled in as additional line items on the sales order, or as Notes associated with each line item on the sales order.



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



 
 
 
  



   	

