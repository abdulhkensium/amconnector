# ESTABLISHING A CONNECTION WITHIN ACUMATICA

After the package has been published, the connector must be established within Acumatica

## CONFIGURING THE CONNECTOR IN ACUMATICA

The first step in configuring the Magento Connector is to setup the parameters of the connector. Navigate to the Magento Connector workspace and click Setup Parameters. Navigate to the Connection Settings section.

1. Enter the Magento URL.

    * This is the store URL for the Magento eCommerce website.
 
 2. Enter the **Bearer Token**.

    * The Bearer Token can be found on the Magento site.

        - Navigate to the System workspace on the Magento Site.
  
        - Click Integrations under the Extensions workspace.
  
        - Click the Pencil Icon next to the ACE integration.
  
        - The Bearer Token will be listed under the Access Token field.
  
    * Enter the Bearer Token again to Confirm Bearer Token.
 
3. Click **Test Connection**.
    * A success message will render if the connection is successful.
    
 ![An image](/image.png)
 
 Next, navigate to the **Queue Processing Settings** section.
 
 1. Enter a **Threshold Count**.
 
    * The Threshold Count value indicates the number of records that will be sent individually from Acumatica to Magento prior to the records being batched. (e.g. if there are 50 records being sent, and the threshold count is 25, then the records are batched by using the count defined in the Batch count value and sent to Magento. If the batch count defined is for 25, then Acumatica batches 25 messages in one request and makes only 2 requests to Magento.) This setting is applicable only for the Pricing and Inventory sync.
    
2. Enter a **Batch Count**.

    * The batch count value indicates how many records will be added to an FTP call for bulk record sync. This reduces sync time by making multiple, smaller FTP calls. (e.g. if syncing 50 records, the threshold count is set to 25, and the batch count is set to 5, the 50 records will be sent in 10 API calls, each containing 5 records to be synced.). This setting is applicable only for the Pricing and Inventory sync.
    
3. Enter a **Retry Count**.
   
    * This value is the number of times Acumatica attempts to send across a message to Magento before rendering them as a Failed message. All failed messages are not attempted automatically by the application. To process any Failed messages, you can use the Reprocess Failed Messages screen in the Magento Connector workplace.
 
4. Enter a **Check Process Time**.

    * The accepted value for this option is between 1 and 59. This value defines the frequency in number of seconds for which a schedule once initiated by the framework continues to execute. All schedulers defined by the Magento Connector are scheduled to run every 1 minute. This setting is an extension of the default scheduling to define if the process should be slowed down and controlled. When the framework initiates a scheduler as per the defined schedules, the scheduler first completes the designated task. It then checks for the time for which the process should continue to run based on the already elapsed time versus the defined check process time. If the already elapsed time is less than the Check process time, then the scheduler thread continues to run until the time it has elapsed the time defined in the Check Process time. 
  
5. Enter a **Process Sleep Time**.

    * This value is the time between check processes in seconds. (e.g. if the check process time is set to 50 seconds, and the process sleep time is set to 5 seconds, the connector will first finish the expected tasks when it launches. Once the task is completed, it sleeps for the defined amount of time and then checks for any new records to be processed. This setting is controlled by the Check Process Time setting above.
