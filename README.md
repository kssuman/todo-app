Step 1: Run Backend server

1. Open \backend\TodoWebApi\TodoWebApi.sln Visual Studio
2. Run TodoWebApi
   Now a backend server is running

Step 2: Run frontend react app

1. Open \frontend\ folder with an IDE (i.e, Visual Studio/ VS Code)
2. Open terminal in the IDE
3. Go to \frontend\src
4. Run 'npm install' . Now all dependecy are installed
5. Run 'npm start'
   ToDo app will open in an browser and you are ready to go.

App Description:

1. Task descrpition should have minimum 10 characters
2. Due time is a number, which indicate task is due in how many minutes from now.
   To test easily it kept simple.
3. Task can be added by pressing 'Add' button or press enter.
4. Task can be deleted by clicking 'x' on the right
5. Task can be Marked as done by clicking checkbox on the left, it can not be Marked as undone afterwards.
6. Over due tasks are marked as red, which also can be Marked as done. Then it will not not red anymore.
7. It is possible to open multiple localhost intance of the app (diferent ports).
