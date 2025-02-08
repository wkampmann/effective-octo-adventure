import "../atlas.css";
import { EditorProps } from "document-model/document";
import {
  AtlasGroundingState,
  AtlasGroundingAction,
  AtlasGroundingLocalState,
  actions,
} from "../../document-models/atlas-grounding";
import { utils as documentModelUtils } from "document-model/document";
import { Button } from "@powerhousedao/design-system";

export type IProps = EditorProps<
  AtlasGroundingState,
  AtlasGroundingAction,
  AtlasGroundingLocalState
>;

export default function Editor(props: IProps) {
  // generate a random id
  // const id = documentModelUtils.hashKey();

  return (
    <>
      <h1 className="atlas-header">Grounding Document</h1>
    </>
  );
}
