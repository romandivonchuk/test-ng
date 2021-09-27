interface location {
  name: string
  url: string
}


export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: object
  location: location
  image: string
  episode: Array<string>
  url: string
  created: string
}
