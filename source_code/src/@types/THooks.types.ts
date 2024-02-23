export type TStorageKey = "localStorage" | "sessionStorage";

export type TUseWebStorageProps = {
  key: string;
  initialValue: any;
  storageType: TStorageKey;
};
