export interface SelectedFileProps {
  lastModified: number;
  lastModifiedDate: {};
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
  invalid?: boolean;
}

export type SelectedFilesProps = Array<SelectedFileProps>;
