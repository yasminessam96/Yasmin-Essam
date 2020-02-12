# Yasmin-Essam - QC Task
## First Part: Test Design
- I used the iOS version of the app 'Monefy'
- I prioritized the test cases based on the feature impact. The higher the usage of that feature is or the more important it is to the usage of the application, the higher the priority of its test cases. 
### The following are test cases with the highest priority (in no particular order):
1. Test navigations to all pages and menus to make sure they're working correctly (settings, accounts, categories, currencies, new expense, new income, expenses page, balance page, clicking on expenses/incomes in balance page to display value)
2. Adding at least one expense
3. Adding at least one income (deposit, salary or savings)
4. Add a new income in cash
5. Add a new income in payment card
6. Add a new expense in cash
7. Add a new expense in payment card
8. Adding all categories of expenses
9. Adding all categories of incomes
10. Choose (day, week, month, year, all) and check the balance updates correctly
11. Change account(cash, payment card, all) and check balance updates correctly
12. Click to view balance and all payments
13. Click on an expense icon
14. New transfer from cash to card and vice versa
15. Change language and make sure the whole app translated to that language
16. Change currency and assert it is changed successfully
17.Choose a date with no records
18. Choose a date that has records 
19.In settings, click on Budget mode and make sure it is working correctly
20. In settings, click on Carry over and make sure it is working correctly
21. In settings, click on Future recurring records and make sure it is working correctly
22. Click on export to file, save file and view it to make sure it got exported correctly and successfully
23. Click on clear all data and assert all data are cleared successfully

### The following are test cases with a medium to low priority (in no particular order):
24. Click on '+' sign then 'Choose Category' without entering any money
25. Click on '-' sign then 'Choose Category' without entering any money
26. Try to input negative number in expenses/incomes
27. Schedule income
28. Click on BUY EGP 49.99 to buy pro version and make sure it navigates to App Store for payment
29. Click on BUY EGP 49.99 to buy pro version and then cancel payment
30. Click on Restore in 'buy Monefy pro version' page without buying the pro version and observe the error message
31. Click on any pro feature and make sure it navigates to a page to buy the pro version
32. Click on review application in settings and assert it navigates to app store
33. Merge two categories of expenses/incomes
34. Disable a category of expenses/incomes
35. Enable a disabled category of expenses/incomes
36. Delete a category of expenses/incomes

## Second Part: Bug Reporting
#### Bug 1: Lines from categories' icons to center circle are not present in all categories
###### Steps:
###### Expected Results:
###### Actual Results: 
###### Attachements:
###### Affected Devices:
###### Network:
###### Severity:
###### Priority:
###### Impact:


#### Bug 2: Side Setting menu opens on its own upon adding an expense and returning to landing page
###### Steps:
###### Expected Results:
###### Actual Results: 
###### Attachements:
###### Affected Devices:
###### Network:
###### Severity:
###### Priority:
###### Impact:


#### Bug 3: Percentile area for equal expenses are not equal
###### Steps:
###### Expected Results:
###### Actual Results: 
###### Attachements:
###### Affected Devices:
###### Network:
###### Severity:
###### Priority:
###### Impact:

Reporting
#### Bug 4: Not all components are translated upon changing language
###### Steps:
###### Expected Results:
###### Actual Results: 
###### Attachements:
###### Affected Devices:
###### Network:
###### Severity:
###### Priority:
###### Impact:

Reporting
#### Bug 5: Lines from categories' icons to center circle are not present in all categories
###### Steps:
###### Expected Results:
###### Actual Results: 
###### Attachements:
###### Affected Devices:
###### Network:
###### Severity:
###### Priority:
###### Impact:

## Third Part: Test Automation
I automated tests for www.duckduckgo.com using selenium. I used javascript and the framework Nightwatch.js.
