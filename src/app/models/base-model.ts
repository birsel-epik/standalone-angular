export interface BaseModel {
  id?: number;
  documentId?: string;

  creationTime?: Date;
  modificationTime?: Date;

  creatorUserId?: number;
  modifiedUserId?: number;

  isDeleted?: boolean;
  integrationCode?: string;

  isStopped?: boolean;
}

export interface SelectableModel {
  selected: boolean;
}
