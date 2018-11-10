/**
 * The model
 */

 var model = function() {};

model.dataStore = function() {
    return data;
}

 
 /**
  * Get a single page from the data source
  * @returns markup 
  */
model.getPage = function() {
    var page = model.dataStore().pages,
        titleEl = document.createElement('h2'),
        contentEl = document.createElement('p'),
        markup  = document.createDocumentFragment();
        
    for (var i = 0, max = page.length; i < max; i++) {
        title = page[i].title,
        content = page[i].content,
        titleEl.innerText = title;
        contentEl.innerText = content;
        markup.appendChild(titleEl);
        markup.appendChild(contentEl);
    }

    return markup;
};

console.log(model.getPage());   

model.getPages = function(data) {
    console.log(data);
    var content = model.getPage();
    content.forEach(content);
};

console.log(model.getPages());
