# Scope for repaying the loan

## Setup Instructions

### Frontend

- Clone this repository with the following command.

```bash
git clone https://github.com/kr-2003/enosium_track_3.git
```

- Go to `/enosium_track_1` directory.

```bash
cd enosium_track_1
```

- Go to `/app` directory.

```bash
cd app
```

- Install `npm` packages for the `NextJS` frontend.

```bash
npm install
```

- To run the frontend, run the following command:

```bash
npm run dev
```

- Frontend will be on port `3000` on your `localhost`.

### Backend

- Get out of the `/app` directory.

```bash
cd ..
```

- Go to `/server` directory.

```bash
cd server
```

- Make sure you have [Python3](https://www.python.org/downloads/) installed on your device.
- Run the following command to create a virtual environment.

```bash
python3 -m venv server-env
```

- Now activate the virtual environment.

```bash
source ./server-env/bin/activate
```

- Run the following command to install Python libraries.

```bash
pip3 install -r requirements.txt
```

- To start server, run:

```bash
uvicorn main:app --reload
```

- Server will be on port `3000` on your `localhost`.
