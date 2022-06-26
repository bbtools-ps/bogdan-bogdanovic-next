export interface Data {
  documents: {
    createTime: string;
    updateTime: string;
    name: string;
    fields: {
      title: { stringValue: string };
      description: { stringValue: string };
      imageName: { stringValue: string };
      equipment?: { arrayValue: { values: { stringValue: string }[] } };
      technologies?: { arrayValue: { values: { stringValue: string }[] } };
      infoLink?: { stringValue: string };
      liveLink?: { stringValue: string };
      sourceLink?: { stringValue: string };
    };
  }[];
}
