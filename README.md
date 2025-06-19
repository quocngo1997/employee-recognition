# Employee Recognition Application

Simple web app that helps employees recognize colleagues to promote recognition within the company.

## Technology used

- React + TypeScript
- React Hook Form
- Clay UI
- React Router
- Logging (loglevel)
- Error Handling (react-error-boundary)
- Testing (jest)

In the project directory, you can run:

### `npm install --legacy-peer-deps`

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

Login screen:
Please enter Email: employee@gmail.com and Password: employee

### `npm test`

Testing

## Flow

1. Login Screen
- The user enters their login credentials. (Please enter Email: employee@gmail.com and Password: employee):
<img width="1000" alt="Login" src="https://github.com/user-attachments/assets/c1266099-0bab-457d-8d30-01893df5b974" />

- Upon successful login, they are redirected to the Employee Home Page
2. Employee Home Page Screen
<img width="1000" alt="Emloyee Home Page" src="https://github.com/user-attachments/assets/e4b9d780-fc6d-4a96-adb1-32e979429f7a" />

- Clicking the button "Recognize employee" navigates the user to the Employee List page.
3. Employee List
- Shows a list of employees:
<img width="1000" alt="Ảnh màn hình 2025-06-19 lúc 14 42 16" src="https://github.com/user-attachments/assets/d6d1a78c-8af4-44e7-ba36-6ed24927854d" />

- The user clicks the recognition icon in the desired employee row to open the Recognition Modal.
4. Employee recognition modal
<img width="1000" alt="Ảnh màn hình 2025-06-19 lúc 14 46 23" src="https://github.com/user-attachments/assets/787c033b-743b-45a1-9ccd-c25903cd8c6c" />

- The user selects a recognition value ("Teamwork", "Innovation", "Respect", "Accountability", "Integrity"):
<img width="1000" alt="Ảnh màn hình 2025-06-19 lúc 14 47 37" src="https://github.com/user-attachments/assets/dfce288a-ce64-4464-affd-cd0d84b53a1b" />

- Clicks Continue to proceed.
5. Recognition Detail
- A textarea appears where the user can enter a detailed message:
<img width="1000" alt="Ảnh màn hình 2025-06-19 lúc 14 50 24" src="https://github.com/user-attachments/assets/dda0c9b0-59bc-4cda-89e0-f7ce4b47ca52" />

- After filling it out, the user clicks Submit, which navigates to the Success Screen confirming the recognition.
6. Success Screen
- Displays a message confirming that the recognition was successfully submitted:
<img width="1000" alt="Ảnh màn hình 2025-06-19 lúc 14 51 49" src="https://github.com/user-attachments/assets/a615aad8-8d15-4631-b448-1670592c6017" />

- Includes a "Back to Home" button, which returns the user to the Home Screen:
<img width="1000" alt="Ảnh màn hình 2025-06-19 lúc 14 54 24" src="https://github.com/user-attachments/assets/fd474198-3c28-4570-a0d4-dd46dd1cc536" />
