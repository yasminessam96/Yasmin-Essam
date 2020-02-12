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

#### Bug 1: Clicking on 'Budget mode' in settings produces wrong results
###### Steps:
1. Open app
2. Open settings menu
3. Click on "Budget Mode" and add a budget of e.g $100
4. Return to landing page and observe the inner circle
###### Expected Results:
1. The app has no expenses or incomes inputted yet so the budget should be the only one visible and should be $100
###### Actual Results: 
1. The app displays $3.33 in blue as budget which is incorrect
###### Attachements:
![budget bug image](https://github.com/yasminessam96/Yasmin-Essam/blob/master/budget.jpg)
###### Affected Devices: 
iOS
###### Network:
###### Severity:
High
###### Priority:
High
###### Impact:
Incorrect functionality results in customer dissatisfaction and distrust in the application and may lead the customer to not use the app again

#### Bug 2: Clicking on 'Future recurring records' in settings produces no change in logic
###### Steps:
1. Open app
2. Open settings menu
3. Click on "Future recurring records" 
4. Return to application and try adding expenses and incomes normally
###### Expected Results:
1. There should be some change in the logic and functionalities since Future recurring records in checked
###### Actual Results: 
1. There is no change in the logic and functionalities since Future recurring records in checked
###### Attachements:
###### Affected Devices:
iOS
###### Network:
###### Severity:
High
###### Priority:
High
###### Impact:
Missing functionalities or buttons that do nothing affect the customers negatively and may lead them to stop using the application

#### Bug 3: Side Setting menu opens on its own upon adding an expense and returning to landing page
###### Steps:
1. Open app
2. Click on '-' to add expense
3. Add the expense and choose category and return to landing page
###### Expected Results:
1. Landing page should be displayed normally without any side menus opened
###### Actual Results: 
1. Settings menu randomly opens upon returning to landing page without clicking on it
###### Attachements:
###### Affected Devices:
iOS
###### Network:
###### Severity:
Low
###### Priority:
Medium
###### Impact:
Bad user experience and user might become dissatisfied with the app


#### Bug 4: Percentile area for equal expenses are not equal
###### Steps:
1. Open app
2. Click on '-' to add expense
3. Add at expenses for all categories with at least 2 categories of equal expenses (e.g sports and food both have equal expenses)
4. return to landing page and observe
###### Expected Results:
1. Categories with equal expenses and percentages should occupy the same percentile area on the center circle
###### Actual Results: 
1. Categories of equal expenses don't have equal percentile areas
###### Attachements:
###### Affected Devices:
iOS
###### Network:
###### Severity:
Medium
###### Priority:
Medium
###### Impact:
Bad UI and user experience. User may distrust the accuracy of the application


#### Bug 5: Not all components are translated upon changing language
###### Steps:
1. Open app
2. From right side menu, choose Settings
3. Click Language to choose to another one (e.g Italian)
4. Restart the app and observe
###### Expected Results:
1. All app data should be translated to italian with no presence of english
###### Actual Results: 
1. Some data are not translated to Italian and stay in English
###### Attachements:

###### Affected Devices:
iOS
###### Network:
###### Severity:
High
###### Priority:
High
###### Impact:
Bad user experience. User may become dissatisfied with the application since he/she cannot understand data written in English


#### Bug 6: Lines from categories' icons to center circle are not present in all categories
###### Steps:
1. Open app
2. Click on '-' button
3. Add expenses for all categories
4. Return to landing page and observe
###### Expected Results:
1. All categories' icons have lines connecting them to center circle
###### Actual Results: 
1. Some categories' icons are not connected to center circle with any lines
###### Attachements:
###### Affected Devices:
iOS
###### Network:
###### Severity:
Low
###### Priority:
Medium
###### Impact:
Bad UI and user experience.

#### Bug 7: Expenses' categories are not arranged according to percentages
###### Steps:
1. Open the app
2. Click on '-' button 
3. Repeatedly add expenses until you cover all categories
4. Return to landing page and observe
###### Expected Results:
1. Categories icons should be arranged in ascending order of percentages around the inner circle
###### Actual Results: 
1. Categories are random and not arranged
###### Attachements:
###### Affected Devices:
iOS
###### Network:
###### Severity:
Low
###### Priority:
Low
###### Impact:
Bad UI and user experience.

#### Bug 8: Expenses' categories that are really small are represented as 0%
###### Steps:
1. Open the app
2. Click on '-' button 
3. Repeatedly add expenses until you cover all categories with at least 4 categories with very low expense (e.g $1 each)
4. Return to landing page and observe
###### Expected Results:
1. Categories are all connected to center circle
2. All categories have percentages greater than 0%
###### Actual Results: 
1. Categories lines are distorted and crossing each other
2. Not all categories are connected
3. Some categories have 0% 
###### Attachements:
###### Affected Devices:
iOS
###### Network:
###### Severity:
High
###### Priority:
High
###### Impact:
Inaccurate data may lead user to distruct the app. Also, bad UI and user experience. 



## Third Part: Test Automation
I automated tests for www.duckduckgo.com using selenium. I used javascript and the framework Nightwatch.js.
