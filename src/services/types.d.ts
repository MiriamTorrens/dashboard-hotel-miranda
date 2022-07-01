
//Props Components
export interface PropsButtonStatus {
  status: string
}

export interface PropsForm{
  handleSubmit: () => void,
  user: string,
  setUser: (e: string) => string
  password: string,
  setPassword: (e: string) => string
}

export interface PropsHeader{
    menuOptions: string[]
}

export interface PropsInputText{
  placeholder: string
}

export  interface PropsNavBar{
  displayLat: string,
  setDisplayLat: (displayLat: string) => string
}

export interface PropsModalContact{
  open: string,
  setOpen: (open: string) => string,
  message: ContactObject
}

export interface PropsSelect{
  selectOptions: string[]
}

//Objets Contact, Booking, Room and User
export interface ContactObject {
    id: string,
    date: string,
    customer: {
        fullName: string,
        email: string,
        phoneNumber: string,
    }
    subject: string,
    comment: string,
    viewed: boolean,
    archived: boolean
}

export interface BookingObject{
  fullName: string,
  id: string,
  date: string,
  checkin: string,
  checkout: string,
  roomInfo: number,
  price: number,
  specialRequest: string,
  amenities: object,
  images: string[],
  roomType: {
    type: string,
    roomNumber: number
  }
  roomDescription: string,
  status: string
}

export interface RoomObject{
  id: string,
  images: string[]
  roomType: string
  roomNumber: number
  offer: boolean,
  price: number
  discount: number
  cancellation: string,
  amenities: string[],
  status: string
  roomName: string
}

export interface UserObject{
  fullName: string,
  id: string,
  email: string,
  startDate: string,
  occupation: string,
  description: string,
  contact: string,
  status: string,
  photo: string,
  password: string
}