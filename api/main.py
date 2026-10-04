from fastapi import FastAPI

app = FastAPI(title="Movie Reservation API")


@app.get("/")
def root():
    return {"message": "Movie reservation API"}
