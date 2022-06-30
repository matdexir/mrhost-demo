from typing import Optional

from pydantic import AnyHttpUrl, BaseModel


class HotelFeatures(BaseModel):
    free_internet: Optional[bool]
    smoking_area: Optional[bool]
    parking: Optional[bool]
    pet_friendly: Optional[bool]
    washing_machine: Optional[bool]
    kitchen: Optional[bool]


class Image(BaseModel):
    url: AnyHttpUrl
    name: Optional[str]


class Hotel(BaseModel):
    image: Image
    title: str
    city: str
    description: str
    review: float
    price: int
    features: HotelFeatures
