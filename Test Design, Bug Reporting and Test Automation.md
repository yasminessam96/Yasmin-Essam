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
##### Steps:
1. Open app
2. Open settings menu
3. Click on "Budget Mode" and add a budget of e.g $100
4. Return to landing page and observe the inner circle
##### Expected Results:
1. The app has no expenses or incomes inputted yet so the budget should be the only one visible and should be $100
##### Actual Results: 
1. The app displays $3.33 in blue as budget which is incorrect (see attached image)
##### Attachements:
![budget bug image](https://github.com/yasminessam96/Yasmin-Essam/blob/master/budget.jpg)
##### Affected Devices: 
iOS
##### Network:
##### Severity:
High
##### Priority:
High
##### Impact:
Incorrect functionality results in customer dissatisfaction and distrust in the application and may lead the customer to not use the app again

#### Bug 2: Clicking on 'Future recurring records' in settings produces no change in logic
##### Steps:
1. Open app
2. Open settings menu
3. Click on "Future recurring records" 
4. Return to application and try adding expenses and incomes normally
##### Expected Results:
1. There should be some change in the logic and functionalities since Future recurring records in checked
##### Actual Results: 
1. There is no change in the logic and functionalities since Future recurring records in checked
##### Attachements:
-
##### Affected Devices:
iOS
##### Network:
##### Severity:
High
##### Priority:
High
##### Impact:
Missing functionalities or buttons that do nothing affect the customers negatively and may lead them to stop using the application

#### Bug 3: Side Setting menu opens on its own upon adding an expense and returning to landing page
##### Steps:
1. Open app
2. Click on '-' to add expense
3. Add the expense and choose category and return to landing page
##### Expected Results:
1. Landing page should be displayed normally without any side menus opened
##### Actual Results: 
1. Settings menu randomly opens upon returning to landing page without clicking on it
##### Attachements:
![menu randomly opens](https://github.com/yasminessam96/Yasmin-Essam/blob/master/menu_opens_randomly.jpg)
##### Affected Devices:
iOS
##### Network:
##### Severity:
Low
##### Priority:
Medium
##### Impact:
Bad user experience and user might become dissatisfied with the app


#### Bug 4: Percentile area for equal expenses are not equal
##### Steps:
1. Open app
2. Click on '-' to add expense
3. Add at expenses for all categories with at least 2 categories of equal expenses (e.g sports and food both have equal expenses)
4. return to landing page and observe
##### Expected Results:
1. Categories with equal expenses and percentages should occupy the same percentile area on the center circle
##### Actual Results: 
1. Categories of equal expenses don't have equal percentile areas
##### Attachements:
![unequal percentiles image](https://github.com/yasminessam96/Yasmin-Essam/blob/master/unequal.jpg)
##### Affected Devices:
iOS
##### Network:
##### Severity:
Medium
##### Priority:
Medium
##### Impact:
Bad UI and user experience. User may distrust the accuracy of the application


#### Bug 5: Not all components are translated upon changing language
##### Steps:
1. Open app
2. From right side menu, choose Settings
3. Click Language to choose to another one (e.g Italian)
4. Restart the app and observe
##### Expected Results:
1. All app data should be translated to italian with no presence of english
##### Actual Results: 
1. Some data are not translated to Italian and stay in English
##### Attachements:
![incorrect translation](https://github.com/yasminessam96/Yasmin-Essam/blob/master/Inkedtranslation_1_LI.jpg)
##### Affected Devices:
iOS
##### Network:
##### Severity:
High
###### Priority:
High
##### Impact:
Bad user experience. User may become dissatisfied with the application since he/she cannot understand data written in English


#### Bug 6: Lines from categories' icons to center circle are not present in all categories
##### Steps:
1. Open app
2. Click on '-' button
3. Add expenses for all categories
4. Return to landing page and observe
##### Expected Results:
1. All categories' icons have lines connecting them to center circle
##### Actual Results: 
1. Some categories' icons are not connected to center circle with any lines
##### Attachements:
![lines not present](https://github.com/yasminessam96/Yasmin-Essam/blob/master/lines_to_circle.jpg)
##### Affected Devices:
iOS
##### Network:
##### Severity:
Low
##### Priority:
Medium
##### Impact:
Bad UI and user experience.

#### Bug 7: Expenses' categories are not arranged according to percentages
##### Steps:
1. Open the app
2. Click on '-' button 
3. Repeatedly add expenses until you cover all categories
4. Return to landing page and observe
##### Expected Results:
1. Categories icons should be arranged in ascending order of percentages around the inner circle
##### Actual Results: 
1. Categories are random and not arranged
##### Attachements:
![not arranged](https://github.com/yasminessam96/Yasmin-Essam/blob/master/lines_to_circle.jpg)
##### Affected Devices:
iOS
##### Network:
##### Severity:
Low
##### Priority:
Low
##### Impact:
Bad UI and user experience.

#### Bug 8: Expenses' categories that are really small are represented as 0%
##### Steps:
1. Open the app
2. Click on '-' button 
3. Repeatedly add expenses until you cover all categories with at least 4 categories with very low expense (e.g $1 each)
4. Return to landing page and observe
##### Expected Results:
1. Categories are all connected to center circle
2. All categories have percentages greater than 0%
##### Actual Results: 
1. Categories lines are distorted and crossing each other
2. Not all categories are connected
3. Some categories have 0% 
##### Attachements:
![zero one](https://github.com/yasminessam96/Yasmin-Essam/blob/master/zero%25.jpg)
![zero two](https://github.com/yasminessam96/Yasmin-Essam/blob/master/zero%25_2.jpg)
##### Affected Devices:
iOS
##### Network:
##### Severity:
High
##### Priority:
High
##### Impact:
Inaccurate data may lead user to distruct the app. Also, bad UI and user experience. 


#### UX issues:
- The categories icons in the app are very confusing. They are always on the landing page no matter if they're selected as expenses or not. I think it would be better to only add the icons of the selected expenses categories only.
- The idea of matching the categories icons to the center circle does not look good. The lines can get intersected and look very confusing to the user.
- Clicking on the inner white center circle where the total income/expenses are recorded is not clickable. To navigate to the details screen of expenses/income, you have to click on the outer circle which I think is not really user friendly. I think the entire center circle (both inner and outer) should be clickable and navigate to the details screen.



## Third Part: Test Automation
I automated tests for www.duckduckgo.com using selenium. I used javascript and the framework Nightwatch.js. Test cases are present inside the 'tests' folder. To run in windows, open git bash inside the project folder and use the command "nightwatch tests" to run all tests or "nightwatch tests/testCase1.js" to run testCase1 for example.

### TestCase 1: Search for a lowercase word by clicking on search button
Steps | Expected Results/Assertions
1. Open duckduckgo.com | Assert page loaded
2. Search for word 'instabug' and click search | Assert number of results are 10; Assert each link contains the word "instabug" regardless of capitalization

### TestCase 2: Search for a word by clicking Enter
Steps | Expected Results/Assertions
1. Open duckduckgo.com | Assert page loaded
2. Search for word 'instabug' and press Enter | Assert number of results are 10; Assert each link contains the word "instabug" regardless of capitalization

### TestCase 3: Click search/Enter without typing any word
Steps | Expected Results/Assertions
1. Open duckduckgo.com | Assert page loaded
2. Press Enter without typing any word | Assert we are still on the home page
3. Press Search without typing a word | Assert we are still on the home page

### TestCase 4: Search for an empty word
Steps | Expected Results/Assertions
1. Open duckduckgo.com | Assert page loaded
2. Search for word ' ' and press Enter | Assert on the error message displayed: "Oops, no search  Please try again"

### TestCase 5: Search for an uppercase word by clicking on search button
Steps | Expected Results/Assertions
1. Open duckduckgo.com | Assert page loaded
2. Search for word 'INSTABUG' and press Enter | Assert number of results are 10; Assert each link contains the word "instabug" regardless of capitalization

### TestCase 6: Search for an word that contains a special character
Steps | Expected Results/Assertions
1. Open duckduckgo.com | Assert page loaded
2. Search for word 'Mother-in-law' and press Enter | Assert number of results are 10; Assert each link contains the word "mother-in-law" regardless of capitalization

### TestCase 7: Search for word that contains numbers
Steps | Expected Results/Assertions
1. Open duckduckgo.com | Assert page loaded
2. Search for word '1996' and press Enter | Assert number of results are 10; Assert each link contains "1996" 

### TestCase 8: Search for word that contains spaces then a number or special character
Steps | Expected Results/Assertions
1. Open duckduckgo.com | Assert page loaded
2. Search for word '  1996' and press Enter | Assert number of results are 10; Assert each link contains the word "1996" without any preceding spaces

### TestCase 9: Search for an word that doesn't exist
Steps | Expected Results/Assertions
1. Open duckduckgo.com | Assert page loaded
2. Search for word 'kfkfkrfkernfjernfjinrjrngjknrejkg' and press Enter | Assert on the displayed message: 'No results found for kfkfkrfkernfjernfjinrjrngjknrejkg'

### TestCase 10: Search for a specific url
Steps | Expected Results/Assertions
1. Open duckduckgo.com | Assert page loaded
2. Search for word 'www.google.com' and press Enter | Assert number of results are 10; Assert each link contains the url "google"

### TestCase 11: Search for word then click on More Results
Steps | Expected Results/Assertions
1. Open duckduckgo.com | Assert page loaded
2. Search for word 'instabug' and press Enter | Assert number of results are 10
3. Click on 'More Results' | Assert page 2 is displayed; Assert total number of results is now 28

### TestCase 12: Type a search term then clear it
Steps | Expected Results/Assertions
1. Open duckduckgo.com | Assert page loaded
2. Search for word 'instabug' and press Enter | Assert search box contains the word
3. click on x to clear input field | Assert search term is removed from search box and it's empty

### TestCase 13: Click on any link to view content
Steps | Expected Results/Assertions
1. Open duckduckgo.com | Assert page loaded
2. Search for word 'instabug' and press Enter | Assert a list of results is displayed
3. Click on first link | Assert we navigate to another page that contains the word 'instabug' in content




