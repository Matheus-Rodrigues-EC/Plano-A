export class EventEntity {
  id: number;
  name: string;
  data: Date;
  local: string;
  description: string;
  created_at: Date;
  updated_at: Date;

  constructor(
    id: number,
    name: string,
    data: Date,
    local: string,
    description: string,
    created_at: Date,
    updated_at: Date,
  ) {
    this.id = id;
    this.name = name;
    this.data = data;
    this.local = local;
    this.description = description;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
