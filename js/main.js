//listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){

    let sitename = document.getElementById('siteName').value;
    let siteurl = document.getElementById('siteUrl').value;

    var bookmark = {
        name : siteName,
        url : siteUrl
    }
    

    //local storage
   if(localStorage.getItem('bookmark') === null){
       //init array
       let bookmarks = [];
       //add to array
       bookmarks.push('bookmark');

       //set to localStorage
       localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
   }
   
      //prevent form from submitting
  e.preventDefault();
}