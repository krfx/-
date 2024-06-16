@startuml



class User {

&#x20;   \- username: string

&#x20;   \- password: string

&#x20;   \- email: string

&#x20;   \- phone: string

}



class Trip {

&#x20;   \- tripId: int

&#x20;   \- destination: string

&#x20;   \- startDate: date

&#x20;   \- endDate: date

&#x20;   \- activities: list\<string>

}



class Flight {

&#x20;   \- flightId: int

&#x20;   \- departure: string

&#x20;   \- destination: string

&#x20;   \- departureTime: datetime

&#x20;   \- arrivalTime: datetime

}



class Hotel {

&#x20;   \- hotelId: int

&#x20;   \- name: string

&#x20;   \- location: string

&#x20;   \- checkInDate: date

&#x20;   \- checkOutDate: date

}



class TravelPlan {

&#x20;   \- planId: int

&#x20;   \- traveler: User

&#x20;   \- trips: list\<Trip>

&#x20;   \- flights: list\<Flight>

&#x20;   \- hotels: list\<Hotel>

}



class Guide {

&#x20;   \- guideId: int

&#x20;   \- name: string

&#x20;   \- languages: list\<string>

&#x20;   \- specialty: string

}



class Tour {

&#x20;   \- tourId: int

&#x20;   \- name: string

&#x20;   \- guide: Guide

&#x20;   \- itinerary: string

}



class BusinessTrip {

&#x20;   \- tripId: int

&#x20;   \- traveler: User

&#x20;   \- destination: string

&#x20;   \- startDate: date

&#x20;   \- endDate: date

&#x20;   \- meetingRooms: list\<string>

&#x20;   \- expenses: list\<string>

}



User "1" -- "1..\*" TravelPlan

User "1" -- "1..\*" BusinessTrip

TravelPlan "1..\*" -- "\*" Trip

TravelPlan "1..\*" -- "\*" Flight

TravelPlan "1..\*" -- "\*" Hotel

Guide "1" -- "\*" Tour



@enduml



解释说明：

User 类：表示应用程序的用户，包括旅行爱好者和商务旅行者。

Trip 类：表示旅行计划中的具体旅行。

Flight 类和 Hotel 类：表示旅行计划中的航班和酒店预订。

TravelPlan 类：表示用户的旅行计划，包括多个旅行、航班和酒店。

Guide 类：表示导游或旅游规划者，提供导览和定制化旅行方案。

Tour 类：表示导游提供的具体旅游行程。



关系说明：

User 与 TravelPlan 和 BusinessTrip 是一对多的关系，一个用户可以有多个旅行计划和商务出差计划。

TravelPlan 包含多个 Trip、Flight 和 Hotel，表示一个旅行计划可以包含多个旅行、航班和酒店。

Guide 可以与多个 Tour 相关联，一个导游可以提供多个旅游行程。
