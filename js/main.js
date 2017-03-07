//listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){

    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    var bookmark = {
        name : siteName,
        url : siteUrl
    }
    

    //local storage
   if(localStorage.getItem('bookmarks') === null){
       //init array
       var bookmarks = [];
       //add to array
       bookmarks.push(bookmark);

       //set to localStorage
       localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
   }
   
      //prevent form from submitting
  e.preventDefault();
}
