## Platform.io

Given the recent surge in interest in AI models and LLMs, you have been tasked with building an application that showcases the various models deployed by organisations and developers alike. The application will go live as-is, so it is up you to develop an interface which is informative and enticing. The application should capture the nuances of a real-life production application, and show the various models available, their categories, and should allow end-users to select and explore any one model.

### How to run

### Step 1: Clone the repository

```bash
 git clone https://github.com/madhusriram012/Atlan-frontend.git
```
### Step 2: Install dependencies

To add node_modules, type npm install in terminal.
```bash
cd frontend
npm install 
```
If error persists while running the above command ,simply delete the node_modules folder and repeat the process.

### Step 4: To start server

```bash
  npm start
```
After running the above command, open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### Framework

The JavaScript framework I chose was React as it is better for smaller, more dynamic projects. React's component-based structure promotes modular and reusable code, enhancing organization and maintainability. Its Virtual DOM efficiently updates only changed parts, optimizing rendering performance. With a robust community and ecosystem, React offers a wealth of resources and support, fostering faster development through shared knowledge and best practices.
 
The Major plugins or packages installed are Cloudinary,Axios,Bootstrap,React-icons.

### Demo

([DEMO_FRONTEND_ATLAN](https://drive.google.com/drive/folders/1h3L5fi3rcJwOdUm4PZYu1AIuVPmdN49t?usp=drive_link))


<img width="1220" alt="image" src="https://github.com/madhusriram012/atlan_sql_front/assets/75003175/b85176b5-53f9-44b0-a7f2-570a0cd90d73">


<img width="599" alt="image" src="https://github.com/madhusriram012/Atlan-frontend/assets/75003175/675ea6f0-d812-40f5-ae75-39fff777319c">




### Brainstorming

Brainstorming started with gathering necessary information required for the data analystics team to have smooth expereince by using the tool.
With the gathered information, few important topics were picked and features were built based on those needs. The following are the topics the features were focussed on,
* Discoverability of Models
* Information Accessibility
* Featured Models
* Detailed Model Pages
* Collaboration and sharing.
* Rating and feedback
* Search and Filtering
* User Accounts and Personalization
* Model Comparison Tools
* Try It Out Functionality


### Features

1. User Accounts and Personalization: Users may want the ability to create accounts to personalize their experience, Additionally to fasten the process they can instantly sigin by google or facebook or apple signin.
2. Dynamic Model Views (visualization): The list of mdoels will be fetched without loading all the data. The models are loaded in pagination view. Keeping the application lightweight, and swift.
3. A space for diving into specific models (Code execution and result visualization): Every model should also have a dedicated page that allow end users to dive deeper into the given model. If you want to sprinkle in additional details, go right ahead, but a very minimal page would ideally contain: a description of the model and the provider, a snippet of code showing an example of using it, potential use cases.
4. Search Tables (Ease of viewing particular model): The user can search for the table names. In real production environment, there will be lot of models which needs to be searched. This feature saves time by identifying required table faster.
5. History  (Query History): History tab shows the list of queries which was used. 
6. Dedicated account (Security and access control): The user will have dedicated account which allows to authenticate and authorise user. Some users can access certain table and some can't. This account helps to manage these restrictions.
7. Sharing (Collaboration and sharing): Users can share the models to the users in the organisation or the team. 
8. Model Comparison Tools: For users looking to make informed decisions, a tool that allows them to compare multiple models side by side can be a valuable feature.
9. Rating and feedback from users: From this people can give rating to particular model and can comment on what needs to be improved.
    

### Optimizations

1. Used pagination method to render a large amount of rows in application without breaking the browser, or without crashing it and using this method it provides the results very fast.

2. The most time-saving optimisation would be dynamic fetching. The models are fetched only when the user requests it. This saves a lot of seconds off our initial load time, 
   by distributing that across requests.
   
4. Image was fetched directly from a website and lazy loading was enabled so it increased the load time so added the image along with the code in local and removed lazy loading as the 
   image comes in the main page.

5. Did cache Busting in order to change the URL of the static files whenever one make updates, forcing the browser to fetch the new version.
   
6. Context API optimizes data loading for a smoother user experience on the explore page, reducing wait times. 

