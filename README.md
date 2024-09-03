# Notebook-Themed Todo App

This is a notebook-themed Todo app built using React. The app allows users to add tasks, mark them as completed, delete tasks, and toggle the visibility of completed tasks. The app follows the "Thinking in React" approach for development.

## Features

- Add new tasks with a category
- Mark tasks as completed
- Move tasks back to the original list from the completed list
- Delete tasks
- Toggle the visibility of completed tasks
- Notebook-themed UI with lined paper and spiral binding effect
- Animation for tasks flying from the task list to the completed list

## Installation

- Clone the repository:
```bash
   git clone https://github.com/your-username/notebook-todo-app.git
   cd notebook-todo-app
```
- Install dependencies:
```bash
npm install
```
- Start the development server
```bash
npm run dev
```
- Open your browser and navigate to `http://localhost:3000` .

## Thinking in React

This app was developed following the "Thinking in React" approach, which involves breaking down the UI into components, building a static version, identifying the minimal representation of UI state, determining where the state should live, and adding inverse data flow.

### Step 1: Break the UI into a Component Hierarchy

The UI was broken down into the following components:

- `TodoApp`: The main container component.
- `AddTask`: The input field and button to add a new task.
- `TaskTable`: Displays tasks categorized by type.
- `TaskCategoryRow`: Displays a heading for each category.
- `TaskRow`: Displays a row for each task.
- `ToggleSwitch`: A toggle switch to show or hide completed tasks.

### Step 2: Build a Static Version in React

A static version of the app was built without any interactivity. This involved creating the components and rendering them with hardcoded data.

### Step 3: Identify the Minimal (but Complete) Representation of UI State

The minimal set of mutable state was identified:

- `taskList`: The list of tasks.
- `completedTasks`: The list of completed tasks.
- `showCompletedTasks`: A boolean to toggle the visibility of completed tasks.

### Step 4: Identify Where Your State Should Live

The state was determined to live in the `TodoApp` component, as it needs to pass the state down to the `TaskTable` and `ToggleSwitch` components.

### Step 5: Add Inverse Data Flow

Callback functions were passed from `TodoApp` to child components to handle adding, deleting, completing, and toggling tasks. This ensures that state changes flow back up to the parent component.

## Components
`TodoApp`
The main container component that manages the state and handles adding, deleting, completing, and toggling tasks.

`AddTask`
A form component that allows users to add new tasks with a category.

`TaskTable`
A table component that displays tasks categorized by type.

`TaskCategoryRow`
A component that displays a heading for each category.

`TaskRow`
A component that displays a row for each task, with a checkbox to mark it as completed and a delete button.

`ToggleSwitch`
A component that renders a toggle switch to show or hide completed tasks.

## Styles
The app uses CSS to create a notebook-themed appearance with lined paper, spiral binding, and handwritten font. The task rows have a dotted border, and an animation is applied to make tasks fly from the task list to the completed list when the checkbox is clicked.

## License
This project is licensed under the MIT License.
