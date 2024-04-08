$(document).ready(function () {
  let allNotes = $("li a");
  allNotes.on("keyup", function () {
    let noteTitle = $(this).find("h2").text();
    let noteContent = $(this).find("p").text();
    let itemKey = "list_" + $(this).parent().index();
    let data = { title: noteTitle, content: noteContent };
    window.localStorage.setItem(itemKey, JSON.stringify(data));
  });
  allNotes.each(function (index) {
    let data = JSON.parse(window.localStorage.getItem("list_" + index));
    if (data !== null) {
      let noteTitle = data.title;
      let noteContent = data.content;
      $(this).find("h2").text(noteTitle);
      $(this).find("p").text(noteContent);
    }
  });
});