import { MeshPhongMaterial } from "three";

export interface NewMaterialOpt {
  newMTL: MeshPhongMaterial | null;
  activeOption: string;
}
