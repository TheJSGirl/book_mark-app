//listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);


function saveBookmark(e){

    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    var bookmark = {
        name : siteName,
        url : siteUrl
    }
    
    if(!siteName || !siteUrl){
    alert('please fill in the form');
    return false;
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


   else{
       //get bookmarks from the local storage
     var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
       //add bookmark to array
       bookmarks.push(bookmark);

       //reset back to local storage
       localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
 }
 
 
  //re-fetch the bookmarks
  fetchBookmark();
  //prevent form from submitting
  e.preventDefault();
}



function deleteBookmark(url){
    //get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
     
    //loop throughtout the bookmarks
    for(var i=0; i< bookmarks.length; i++){
        if(bookmarks[i].url == url){
            //remove from array
            bookmarks.splice(i, 1);
        }
    }
    //re-start back to localStorage
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

    //re-fetch the bookmarks
    fetchBookmark();
}

function fetchBookmark(){
    //get bookmarks from the local storage
     var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

     //get output id
     var bookmarksResults = document.getElementById('bookmarksResults');

     //buid output
     bookmarksResults.innerHTML=" "; 
     for(var i=0;i< bookmarks.length; i++){
         var name = bookmarks[i].name;
         var url =  bookmarks[i].url;

         bookmarksResults.innerHTML+= '<div class= "well">' +
                                     '<h3>'+name+
                                     '<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>'+
                                     '<a onclick="deleteBookmark(\''+url+'\' )" class="btn btn-danger" target="_blank" href="#">Delete</a> '+
                                     '</h3>'+ 
                                     '</div>';
     }
}
