 // --- JAVASCRIPT LOGIC ---
        
        // 1. Initialize the Async Function
        /**
         * Asynchronous function to fetch user data from an API and display names.
         */
        async function fetchUserData() {
            // 2. Define the API URL
            const apiUrl = 'https://jsonplaceholder.typicode.com/users';

            // 3. Select the Data Container Element
            const dataContainer = document.getElementById('api-data');

            // 4. Fetch Data Using try-catch
            try {
                // A. Use 'await fetch' to asynchronously request data from the URL.
                // The 'await' pauses the function until the response is received.
                const response = await fetch(apiUrl);
                
                // B. Check if the network request was successful (status code 200-299).
                // If not, throw an error to jump to the catch block.
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // C. Convert the response stream into a JavaScript object (JSON).
                // 'await' is used again because this is also an asynchronous operation.
                const users = await response.json();

                // 5. Clear the Loading Message
                dataContainer.innerHTML = ''; // Remove "Loading user data..."

                // 6. Create and Append User List
                const userList = document.createElement('ul'); // Create the <ul> element

                // Loop through every user object in the 'users' array
                users.forEach(user => {
                    const listItem = document.createElement('li'); // Create a <li> element for each user
                    
                    // Set the list item's text to the user's name
                    listItem.textContent = user.name; 
                    
                    // Add the new <li> to the <ul> list
                    userList.appendChild(listItem); 
                });

                // Add the complete <ul> list to the display container on the webpage
                dataContainer.appendChild(userList);

            } catch (error) {
                // 7. Error Handling (runs if fetching or processing fails)
                console.error('Fetch error:', error);
                
                // Clear the container and display a friendly error message to the user
                dataContainer.innerHTML = '';
                dataContainer.textContent = 'Failed to load user data.';
                dataContainer.style.color = 'red';
            }
        }

        // 8. Invoke fetchUserData on DOMContentLoaded
        // We wait for the entire HTML structure to load before trying to find the elements
        // and fetch data.
        document.addEventListener('DOMContentLoaded', fetchUserData);
