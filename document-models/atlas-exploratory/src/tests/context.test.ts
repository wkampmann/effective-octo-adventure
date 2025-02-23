/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import {
  z,
  AddContextDataInput,
  RemoveContextDataInput,
  SetProvenanceInput,
  SetNotionIdInput,
  AddAdditionalGuidanceInput,
  RemoveAdditionalGuidanceInput,
} from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/context/creators";
import { AtlasExploratoryDocument } from "../../gen/types";

describe("Context Operations", () => {
  let document: AtlasExploratoryDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addContextData operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddContextDataInput = generateMock(
      z.AddContextDataInputSchema(),
    );

    const updatedDocument = reducer(document, creators.addContextData(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_CONTEXT_DATA");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeContextData operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveContextDataInput = generateMock(
      z.RemoveContextDataInputSchema(),
    );

    const updatedDocument = reducer(
      document,
      creators.removeContextData(input),
    );

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe(
      "REMOVE_CONTEXT_DATA",
    );
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle setProvenance operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: SetProvenanceInput = generateMock(
      z.SetProvenanceInputSchema(),
    );

    const updatedDocument = reducer(document, creators.setProvenance(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("SET_PROVENANCE");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle setNotionId operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: SetNotionIdInput = generateMock(z.SetNotionIdInputSchema());

    const updatedDocument = reducer(document, creators.setNotionId(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("SET_NOTION_ID");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle addAdditionalGuidance operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddAdditionalGuidanceInput = generateMock(
      z.AddAdditionalGuidanceInputSchema(),
    );

    const updatedDocument = reducer(
      document,
      creators.addAdditionalGuidance(input),
    );

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe(
      "ADD_ADDITIONAL_GUIDANCE",
    );
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeAdditionalGuidance operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveAdditionalGuidanceInput = generateMock(
      z.RemoveAdditionalGuidanceInputSchema(),
    );

    const updatedDocument = reducer(
      document,
      creators.removeAdditionalGuidance(input),
    );

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe(
      "REMOVE_ADDITIONAL_GUIDANCE",
    );
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
