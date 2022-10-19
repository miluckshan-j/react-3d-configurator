import { MeshPhongMaterialProps } from "react-three-fiber";

export interface NewMaterialOpt {
  newMTL: MeshPhongMaterialProps | null;
  activeOption: string;
}
