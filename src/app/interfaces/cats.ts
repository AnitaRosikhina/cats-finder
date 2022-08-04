export namespace Cat {

  export interface Entity {
    breeds: Breed[];
    url: "https://cdn2.thecatapi.com/images/mudzVExq0.jpg";
  }

  export interface Breed {
    id: string;
    name: string;
  }
}
