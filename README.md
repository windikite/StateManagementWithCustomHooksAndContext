My 47th assignment, and the first of the front end specialization modules! In this assignment we use useContext and custom hooks to make the two parts of the application.  

Assignment 1  
This half of the application contains a list of default contacts to simulate fetched data, as well as a card that updates with the data of the chosen contact. Data includes name, phone, email, and how many days since the contact had last logged in. This contact list is provided to the entire app as context which can be accessed from any component. 

Once the contacts are accessible to the component it renders them in a list and provides an onclick function to get more details.  

Assignment 2  
This half of the application contains an inventory management system. It starts by providing global state/context to the application which is accessed later on. This one uses a different method of creating the context which worked well, though it did reduce the need for a hook as most or all of its functionality could be handled by the context component. 

On the hook, it handles the logic of adding and removing from the inventory, and the page component handles the rendering of the inventory as cards with buttons to add or remove them. If the number of a product reaches 0, it will be deleted, though that could easily be changed if desired. 

New products can be added via the product form, which has validation on it to make sure that the new product is valid. Once it is successfully added (which utiltizes the hook from earlier as well), you are redirected and the inventory component will show the new product. 

Running this project is easy; just install all dependencies and run 'npm run dev'.