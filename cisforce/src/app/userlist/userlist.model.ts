export class UserListResp {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserListItem[];
}

export class UserListItem {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
