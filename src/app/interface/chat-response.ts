export interface Ichat {
  created_at: string;
  editable: boolean;
  id: string;
  sender: string;
  text: string;
  users: {
    avatar_url: string;
    id: string;
    full_name: string;
  };
}
