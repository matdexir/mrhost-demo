import random

import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas.definitions import Hotel, HotelFeatures, Image

word_site = "https://www.mit.edu/~ecprice/wordlist.10000"

response = requests.get(word_site)
WORDS = response.content.splitlines()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def create_random_hotels():
    num = random.randint(10, 15)
    cities = ["Taipei", "Taichung", "Tainan", "Kaoshiung", "Taitung"]
    hotels = []
    lorem = """
        Lorem ipsum dolor sit amet, qui minim labore adipisicing
        minim sint cillum sint consectetur cupidatat.
    """
    for i in range(num):
        image = Image(url="https://placekitten.com/300/300/", name="Image")
        hotel_features = HotelFeatures(
            free_internet=(random.randint(0, 100) % 2 == 0),
            smoking_area=(random.randint(0, 100) % 2 == 0),
            washing_machine=(random.randint(0, 100) % 2 == 0),
            kitchen=(random.randint(0, 100) % 2 == 0),
            parking=(random.randint(0, 100) % 2 == 0),
            pet_friendly=(random.randint(0, 100) % 2 == 0),
        )
        hotel = Hotel(
            image=image,
            features=hotel_features,
            description=lorem,
            city=cities[random.randint(i, 200) % len(cities)],
            review=round(random.uniform(0, 5), 2),
            price=random.randint(700, 5000) // 10 * 10,
            title=WORDS[random.randint(0, len(WORDS) - 1)].decode("utf-8"),
        )
        # print(hotel)
        hotels.append(hotel)
    return hotels


create_random_hotels()
