export interface Friend {
  _id: string;
  firstName: string;
  lastName: string;
  bday: number[];
  food: string | null;
  animal: string | null;
  dino: string | null;
}

export type AllFriendsResponse = Friend[];
