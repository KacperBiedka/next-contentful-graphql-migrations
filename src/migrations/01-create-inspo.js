module.exports = function (migration) {
  const inspo = migration.createContentType("inspo", {
    name: "Inspo",
  });

  inspo.createField("title", {
    name: "Title",
    type: "Text",
    required: true,
  });

  inspo.createField("slug", {
    name: "Slug",
    type: "Text",
    required: true,
    validations: [
      {
        regexp: { pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$" },
      },
    ],
  });

  inspo.createField("thumbnail", {
    name: "Thumbnail",
    type: "Link",
    linkType: "Asset",
    validations: [
      {
        linkMimetypeGroup: ["image"],
      },
    ],
    required: true,
  });

  inspo.createField("featuredImage", {
    name: "Featured Image",
    type: "Link",
    linkType: "Asset",
    validations: [
      {
        linkMimetypeGroup: ["image"],
      },
    ],
    required: true,
  });

  inspo.createField("tags", {
    name: "Tags",
    type: "Array",
    items: {
      type: "Symbol",
    },
    required: true,
  });

  inspo.createField("priority", {
    name: "Priority",
    type: "Integer",
    required: true,
  });

  inspo.createField("description", {
    name: "Description",
    type: "RichText",
    required: true,
  });
};
