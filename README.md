
# Tech Challenge coding Task
...
Additionally, please present us with a hands-on end-to-end automation task that you were involved with. Technology choice is flexible as long as it can be run during the live interview.

*The goal of this challenge is to test basic knowledge of QA processes, strategies, and common technologies used in these environments. This can be as simple as logging into a system as a user and making an update, e.g. create a public GitHub Gist page. Please re-use your previous work and boilerplates to save time on this task.

We ask that you do not exceed more than approximately 3 hours of your time researching and preparing this challenge.

# Description of the tech challenge example
You have asked me to give the example of the Test Cases automation for the Login functionality to any Web Resource. 
As a proposal you have offered to use GitHub Gist and TestCafe as the easiest and fastest framework to start with.

So, I've used TestCafe, and it was really nice and fast.
Regarding Gist I've faced with the 2-factor authentication login logic, that blocks me from using it.
So, as the result I've just found the https://www.phptravels.net/ as a playground for exactly these purposes.

I have decided to emulate the Test Cases similar to the larger solutions, even though for these kind of functionality it might not be required:
* I've split the all Tests in 2 Test Suit (Main and Extended).
* There is a TestHelper library implemented (of course it might be better even move the import of Selector library also to Helper, but it would be too much)
* I've tried to make tests as clear and small as possible.
* All tests are independent.
* All tests suppose to prepare and clean TestData (it is not ready and left as a placeholder, because of the websight limitations of manipulating with data, but still).
* etc.

We can definetly dicuss all wha I did, if you need more explanation from me.

# Note:
Emir, I just wanted to repeat that I was not doing FrontEnd testing before so much, and mostly was focussing on the BackEnd.
All these JS and TestCafe is something really what I haven't used in profession before (maybe a bit JS with CypressIo).
I just follow my common understanding about it, without digging into details, when were doing the task. 
Hope, that my code looks reasonable and clear. :) 
I would be happy to discuss it, if you want.