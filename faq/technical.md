---
prev: ./sales
next: ./how-and-what
---

# Technical - Setup Related Questions

<TOC />

## Is there a middleware component involved? 

No, there isn’t any middleware component.  Acumatica connector is a native Magento extension that communicates with Acumatica directly via web services. 

## What versions of Magento does the connector support?

Magento Commerce / Commerce Cloud / Open Source  2.2.2 and above.

## What additional components do I need on Magento and Acumatica? 

Other than the customizations provided as part of the connector solution, no other components are needed for the connector on Acumatica side.  

On Magento, RabbitMQ and Composer are the required components on the server to set up the connector. 

## Can I install other extensions on Magento after Acumatica-Magento Connector is installed? 

Yes, Magento connector is built based on Magento extension framework, and works with other extensions that are also built as per Magento standard framework.  However, we recommend that you first install all the components on a staging instance, test for any incompatibilities and then promote the changes to production. 

## How are multiple images and videos managed? Do they live in Acumatica? How can Acumatica handle 10 high resolution images per product if a client has 10000 SKUs? 

While the connector supports, and one can load images into Acumatica, and can sync them with Magento, this would not be an ideal situation, as you do not want such high resolution images sitting in Magento as well.  A better option would be to host these images on a common CDN, where these images can be accessed by both the systems. 
 
## What Acumatica API framework does the connector use? 

Acumatica utilizes REST API framework, as does Magento. 

# Technical - Supported Functionality Related Questions

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

Customizations are required if reward points are to be maintained in Acumatica. Custom attribute can be created on the customer record to hold the current reward points balance.  In addition, accounting needs to be set up to handle the balance as liability in Acumatica. 

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
