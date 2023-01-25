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


class HotelCapabilities(BaseModel):
    short_stay: Optional[bool]
    self_health_management: Optional[bool]
    business_trip: Optional[bool]
    presidential_suite: Optional[bool]
    family_stay: Optional[bool]


class Hotel(BaseModel):
    image: Image
    title: str
    city: str
    description: str
    review: float
    comments: int
    price: int
    features: HotelFeatures
    capabilities: HotelCapabilities
