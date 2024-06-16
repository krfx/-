**实体（Entities）**



用户（User）

UserID (PK)

用户名 (Username)

密码 (Password)

邮箱 (Email)

手机号 (Phone)



旅游目的地（Destination）

DestinationID (PK)

目的地名称 (DestinationName)

描述 (Description)

图片 (Image)

评价 (Reviews)



旅行计划（TravelPlan）

PlanID (PK)

UserID (FK)

出发日期 (DepartureDate)

返回日期 (ReturnDate)

目的地 (DestinationID, FK)

备注 (Notes)



服务预订（ServiceBooking）

BookingID (PK)

UserID (FK)

服务类型 (ServiceType)

服务详情 (ServiceDetails)

预订日期 (BookingDate)

状态 (Status)



旅行规划（TravelScheme）

SchemeID (PK)

UserID (FK)

客户需求 (CustomerRequirements)

旅行方案 (TravelDetails)

创建日期 (CreationDate)



导览服务（GuidedTour）

TourID (PK)

SchemeID (FK)

导览路线 (TourRoute)

语音导游 (AudioGuide)



商务行程（BusinessTrip）

TripID (PK)

UserID (FK)

目的地 (DestinationID, FK)

出差日期 (TripDate)

会议场地预订 (MeetingRoomBooking)

费用管理 (ExpenseManagement)



**关系（Relationships）**

用户（User）与旅行计划（TravelPlan）：一对多关系，一个用户可以有多个旅行计划。

用户（User）与服务预订（ServiceBooking）：一对多关系，一个用户可以进行多个服务预订。

用户（User）与旅行规划（TravelScheme）：一对多关系，一个用户可以创建多个旅行规划。

旅行规划（TravelScheme）与导览服务（GuidedTour）：一对一或一对多关系，一个旅行规划可以有一个或多个导览服务。

用户（User）与商务行程（BusinessTrip）：一对多关系，一个用户可以有多个商务行程。

商务行程（BusinessTrip）与旅行目的地（Destination）：多对一关系，一个商务行程对应一个旅行目的地。



**表示法说明**

(PK) 表示主键

(FK) 表示外键
