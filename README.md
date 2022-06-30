# Simple Demo

## Available Scripts for frontend

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Available scripts for backend 

Once you `cd` inside the backend directory, it is advised to create a virtual environment with:

### `python -m venv .`

Afterwards, in order to install the packages necessary, please run:

### `pip -r requirements.text`

To run the simple backend, please run:

### `uvicorn main:app --reload --port 4000`

Note: the port is currently hardcoded but it can be changed if asked.
