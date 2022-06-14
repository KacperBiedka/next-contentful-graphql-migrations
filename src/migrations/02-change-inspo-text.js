module.exports = function (migration) {
  const inspo = migration.editContentType("inspo");

  inspo.deleteField("title");
  inspo.createField("title", {
    name: "Title",
    type: "Symbol",
    required: true,
  });

  inspo.deleteField("slug");
  inspo.createField("slug", {
    name: "Slug",
    type: "Symbol",
    required: true,
    validations: [
      {
        unique: true,
      },
      {
        regexp: { pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$" },
      },
    ],
  });
};
