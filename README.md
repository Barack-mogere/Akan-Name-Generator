 ##AKAN NAME GENERATOR
 -About the project-
 The Akan Name Generator is a simple web project that takes a user’s birthday and gender, then calculates the day of the week they were born. Based on that result, it assigns an Akan name from Ghanaian culture.
Each Akan name is linked to the day of the week a person is born, so this project combines basic mathematics, logic, and cultural learning in a fun way.

-##HOW IT WORKS-
The project works in four main steps:

1.The user enters their day, month, year, and gender
2.JavaScript calculates the day of the week using a formula
3.The program matches that day with a corresponding Akan name
4.The result is displayed on the screen

-##FORMULA USED-
d = ((4CC − 2CC − 1) + (5YY / 4) + (26(MM + 1) / 10) + DD) % 7

Where:
    CC = first two digits of the year
    YY = last two digits of the year
    MM = month
    DD = day of the month
    % 7 = gives a result from 0 to 6 (day index)

##THE AKAN NAMES

-Male Names-
Sunday → Kwasi
Monday → Kwadwo
Tuesday → Kwabena
Wednesday → Kwaku
Thursday → Yaw
Friday → Kofi
Saturday → Kwame


-Female Names-
Sunday → Akosua
Monday → Adwoa
Tuesday → Abenaa
Wednesday → Akua
Thursday → Yaa
Friday → Afua
Saturday → Ama

##WHAT I LEARNED-
 while building the project i learned how to tie together many javascripts processes inorder to come up with one function

 ##FUTURE IMPROVEMENTS-
 Improve UI design for better user experience
Add animations for result display
Make it mobile-friendly

##AUTHOR-
This project was done by Barack Mogere© and it was created as a learning project to practice JavaScript and understand basic web development concepts.